import React, { useContext, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import Menu from "./menu";
import CheckPointProcessMenu from "./CheckPointProcessMenu"
import ReportCheckPoint from "./ReportCheckPoint";
import Report from "./Report";
import NoFound from "./NoFound";
import Process from "./Process";
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
        <Route path="/menu">
          <Menu />
        </Route>
        <Route exact path="/ReportCheckPoint">
          <ReportCheckPoint />
        </Route>
        <Route path="/process">
          <Process />
        </Route>
        <Route exact path="/Report">
          <Report />
        </Route>
        <Route exact path="/CheckPointProcessMenu">
          <CheckPointProcessMenu />
        </Route>
        <Route path="*">
          <NoFound />
        </Route>
      </Switch>
    </div>
  );
};

export default ContentRouter;
