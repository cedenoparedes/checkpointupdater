import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import ContentRouter from "./Components/ContentRouter";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Components/Login/LoginForm.css';
import './Components/HeaderFooter.css';
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
