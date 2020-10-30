import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import ContentRouter from "./Components/ContentRouter";
import './Components/Login/LoginForm.css'

function App() {
  return (
    <Router>
        <div className="App">       
          <ContentRouter />
        </div>
      </Router>
  );
}

export default App;
