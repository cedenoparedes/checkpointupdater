import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../Login";
import Menu from "../Menu";
import CheckPointProcessMenu from "../CheckPointProcessMenu";
import ReportCheckPoint from "../ReportCheckPoint";
import Report from "../Report";
import ReportDark from "../ReportDark";
import NoFound from "./NoFound";
import Process from "../Process";
import GlobalContext from "../../context/globalcontext";

const ContentRouter = () => {
  const [, , contextMiddleware] = useContext(GlobalContext);
  //   useEffect(() => {}, []);

  return (
    <div id="main-container">
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route
          path="/menu"
          component={contextMiddleware.routeProtectedComponent(Menu)} />
        <Route exact path="/ReportCheckPoint">
          <ReportCheckPoint />
        </Route>
        <Route path="/process">
          <Process />
        </Route>
        <Route exact path="/Report">
          <Report />
        </Route>
        <Route exact path="/ReportDark">
          <ReportDark />
        </Route>
        <Route exact path="/CheckPointProcessMenu">
          {/* <Redirect exact path="/CheckPointProcessMenu/reload" to="/CheckPointProcessMenu"/> */}
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