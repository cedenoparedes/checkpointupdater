import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "../Login";
import Menu from "../Menu";
import ProcessMenu from "../ProcessMenu";
import ReportMenu from "../ReportMenu";
import ReportDark from "../ReportDark";
import NoFound from "./NoFound";
import Process from "../Process";
import GlobalContext from "../../context/globalcontext";

const ContentRouter = () => {
  const [, , contextMiddleware] = useContext(GlobalContext);

  return (
    <div id="main-container">
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route
          path="/menu"
          component={contextMiddleware.routeProtectedComponent(Menu)} />
        <Route exact path="/report/menu">
          <ReportMenu />
        </Route>
        <Route path="/process">
          <Process />
        </Route>
        <Route exact path="/report">
          <ReportDark />
        </Route>
        <Route exact path="/reportDark">
          <ReportDark />
        </Route>
        <Route exact path="/processMenu">
          <ProcessMenu />
        </Route>
        <Route path="*">
          <NoFound />
        </Route>
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </div>
  );
};

export default ContentRouter;