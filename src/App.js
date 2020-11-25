import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ContentRouter from "./Components/Common/ContentRouter";
import "./Components/Process/Process.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Components/Login/LoginForm.css";
import "./Components/Common/HeaderFooter.css";
import "./Components/ReportMenu/ReportCheckPointForm.css";
import "./Components/ReportDark/ReportFormDark.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import "toastr/build/toastr.css";
import "react-datepicker/dist/react-datepicker.css";
import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer";
import "./Components/Common/HoverButtons.css";
import GlobalContext from "./context/globalcontext"
import { getLanguage } from "./api/language-api";



function App() {
  // const [contextState, , contextMiddleware] = useContext(GlobalContext);

  // useEffect(() => {
  //   getLanguage(contextState.language)
  //     .then(response => contextMiddleware.setLanguage(response))
  //     .catch(error => console.log(error));
  // }, [contextState.language]);

  return (
    <Router>
      <Header />
      <div className="Content">
        <ContentRouter />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
