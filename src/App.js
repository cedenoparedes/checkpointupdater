import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ContentRouter from "./Components/ContentRouter";
import './Components/Process/Process.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "./Components/Login/LoginForm.css";
import "./Components/HeaderFooter.css";
import "./Components/ReportCheckPoint/ReportCheckPointForm.css";
import "./Components/Report/ReportForm.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
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
