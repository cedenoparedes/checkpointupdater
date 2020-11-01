import React, { useContext, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import Menu from "./Menu";
import NoFound from "./NoFound";
import Process from './Process'
import GlobalContext from "../context/globalcontext";

const ContentRouter = () => {
//   const [, , contextMiddleware] = useContext(GlobalContext);
//   useEffect(() => {}, []);

  return (
    <div id="main-container">
      <Switch>
        <Route exact path="/">
            <Login />
        </Route>
        <Route  path="/menu">
            <Menu />
        </Route>
        <Route  path="/process">
            <Process />
        </Route>
        <Route path="*">
          <NoFound />
        </Route>
      </Switch>
    </div>
  );
};

export default ContentRouter;
