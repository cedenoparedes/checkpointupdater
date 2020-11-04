import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ContentRouter from "./Components/Common/ContentRouter";
import "./Components/Process/Process.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Components/Login/LoginForm.css";
import "./Components/Common/HeaderFooter.css";
import ContextMiddleware from "./Components/Common/ContextMiddleware"
import "./Components/ReportCheckPoint/ReportCheckPointForm.css";
import "./Components/Report/ReportForm.css";
import "./Components/ReportDark/ReportFormDark.css";
import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer";

function App() {
  return (
    <ContextMiddleware>
      <Router>
        <Header />
        <div className="Content">
          <ContentRouter />
        </div>
        <Footer />
      </Router>
    </ContextMiddleware>
  );
}

export default App;
