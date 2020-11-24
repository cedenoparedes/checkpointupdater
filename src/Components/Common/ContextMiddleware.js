import React, { useState, useEffect } from "react";
import GlobalContext from "../../context/globalcontext";
import { Redirect } from "react-router-dom";
import { getLanguage } from '../../api/language-api';

const ContextMiddleware = (props) => {
  const [language, setLanguage] = useState("EN")
  const [languageLabel, setLanguageLabel] = useState([])
  const [contextState, setContextState] = useState({
    isAuth: false,
    token: "",
    languageLabel: "",
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

    getLanguage(language)
      .then((Response) => {
        setLanguageLabel(Response)
      })
      .catch((error) => console.log(error))
  }, [language]);

  const middleware = (state, setState, setLanguage, languageLabel) => {
    let localContext = Object.assign({}, { ...state });

    const getLanguageLabel = () => {
      localContext = Object.assign(
        {},
        { ...localContext },
        { languageLabel: languageLabel }
      );
      setLocalCache(localContext);

    }

    const setLocaLanguage = (language) => {
      setLanguage(language)
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

    return { logOut, logIn, getToken, routeProtectedComponent, getTokenClaims, getLanguageLabel, setLocaLanguage };
  };

  return (
    <GlobalContext.Provider
      value={[
        contextState,
        setContextState,
        middleware(contextState, setContextState, setLanguage, languageLabel),
      ]}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default ContextMiddleware;
