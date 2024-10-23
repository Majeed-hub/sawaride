import React from 'react';
import SawaLogo from "../../assets/images/SawaLogo.png";
import "./index.css";
import Button from "../../components/button/index";
function Hero() {
    return (
      <>
        <div className="App">
          <iframe
            src="https://my.spline.design/3dcitynavigationcopy-78a5326874435a5b665b6111aa66396e/"
            frameBorder="0"
            className="App-iframe"
            title="3D City"
          ></iframe>

          <header className="App-header">
            <img src={SawaLogo} className="App-logo" alt="logo" />
            <Button />
          </header>
          <header className="App-body">
            {/* <h1>Welcome to open mobility</h1> */}

            <p className="heading">
              Book a ride with <br />
              <span className="gradient">Zero commission</span>
            </p>

            <p></p>
            <p className="sub-heading">
              An app by drivers, <span className="gradient">SAWA RIDE</span> , <br />
              for the people.<br/> 100% direct payment to drivers.
            </p>
          </header>
        </div>
      </>
    );
}

export default Hero;