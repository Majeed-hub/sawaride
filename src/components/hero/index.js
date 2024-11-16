import React, {useEffect} from 'react';
import SawaLogo from "../../assets/images/SawaLogo.png";
import "./index.css";
import Button from "../../components/button/index";
import CarShow from '../backgroundGraphics';
function Hero() {

    return (
      <>
        <div className="App">
          <CarShow
            className="App-iframe" 
          />

          <header className="App-header">
            <img src={SawaLogo} className="App-logo" alt="logo" />
            <div className="d-button">
              <Button />
            </div>
          </header>
          <header className="App-body">
            {/* <h1>Welcome to open mobility</h1> */}

            <h2 className="heading">
              Book a ride with <br />
              <span className="gradient">Zero commission</span>
            </h2>

            <p></p>
            <p className="sub-heading">
              An app by drivers, <span className="gradient">SAWA RIDE</span> ,{" "}
              <br />
              for the people.
              <br /> 100% direct payment to drivers.
            </p>
           
          </header>
        </div>
      </>
    );
}

export default Hero;