import React, { useState, useEffect } from "react";
import GlobalContext from "../../context/globalcontext";
import { Redirect } from "react-router-dom";
import config from "./../../config";


const ContextMiddleware = (props) => {
  const [contextState, setContextState] = useState({
    isAuth: false,
    token: "",
    language: config.language,
    languageLabel: config.messageState
  });

  const getLocalCache = () => {
    let localContextCached = localStorage.getItem("localContext");
    return localContextCached === null ? null : JSON.parse(localContextCached);
  };

  useEffect(() => {
    const localContextCached = getLocalCache();
    if (localContextCached !== null) {
      setContextState(localContextCached);
    }
  }, []);

  const middleware = (state, setState) => {
    let localContext = Object.assign({}, { ...state });

    const setLanguage = (lang) => {
      localContext = Object.assign(
        {},
        { ...localContext },
        { languageLabel: lang }
      );
      setLocalCache(localContext);
    }

    const changeLanguage = (lang) => {
      localContext = Object.assign(
        {},
        { ...localContext },
        { language: lang }
      );
      setLocalCache(localContext);
    }


    const setLocalCache = (localContextCached) => {
      localStorage.setItem("localContext", JSON.stringify(localContextCached));
      setState(localContextCached);
    };

    const logIn = (token) => {
      localContext = Object.assign(
        {},
        { ...localContext },
        { token, isAuth: true }
      );
      setLocalCache(localContext);
    };

    const logOut = () => {
      localContext = Object.assign(
        {},
        { ...localContext },
        { token: "", isAuth: false }
      );
      setLocalCache(localContext);
    };

    const getTokenClaims = () => {
      let token = localContext.token;
      if (token === "" || token === undefined) return null;
      let claims = token.split(".")[1];
      let decodedString = atob(claims);
      return JSON.parse(decodedString);
    };

    const getToken = () => {
      return localContext.token
    }

    const routeProtectedComponent = (comp) =>
      localContext.isAuth ? comp : () => {
        logOut()
        return < Redirect to="/" />
      };

    return { logOut, logIn, getToken, routeProtectedComponent, getTokenClaims, setLanguage, changeLanguage };
  };

  return (
    <GlobalContext.Provider
      value={[
        contextState,
        setContextState,
        middleware(contextState, setContextState),
      ]}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default ContextMiddleware;
