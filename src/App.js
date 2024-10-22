import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SawaLogo from "./assets/images/SawaLogo.png";

function App() {
  return (
    <div className="App">
    
      <iframe
        src="https://my.spline.design/3dcitynavigationcopy-78a5326874435a5b665b6111aa66396e/"
        frameBorder="0"
        className="App-iframe"
        title="3D City"
      ></iframe>

      
      <header className="App-header">
        <img src={SawaLogo} className="App-logo" alt="logo" />
      </header>
      <header className="App-body">
        <h1>Welcome to open mobility</h1>
       
        <h2>Welcome to open mobility</h2>
        
        <h2>Welcome to open mobility</h2>
        
      </header>
    </div>
  );
}

export default App;
