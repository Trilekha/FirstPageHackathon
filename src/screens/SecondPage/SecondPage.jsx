import React from "react";
import { Link } from "react-router-dom";
import "./style1.css";

export const SecondPage = () => {
  return (
    <div className="second-page">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="skeleton" />
          <div className="steps-circle-things">
            <div className="overlap-group">
              <div className="circle">
                <div className="div">
                  <img className="line" alt="Line" src="/img/line-1.svg" />
                  <div className="ellipse" />
                  <div className="text-wrapper">1</div>
                </div>
              </div>
              <div className="overlap-group-wrapper">
                <div className="overlap-2">
                  <img className="img" alt="Line" src="/img/line-2.svg" />
                  <div className="ellipse-2" />
                  <div className="text-wrapper-2">2</div>
                </div>
              </div>
              <div className="circle-2">
                <div className="element-wrapper">
                  <img className="element" alt="Element" src="/img/3.png" />
                </div>
              </div>
            </div>
          </div>
          <footer className="footer">
            <div className="element-barclays-bank-wrapper">
              <img className="element-barclays-bank" alt="Element barclays bank" src="/img/2023-barclays-bank.png" />
            </div>
          </footer>
          <div className="nav-bar">
            <img className="logo" alt="Logo" src="/img/logo.png" />
          </div>
          <div className="progresss-bars">
            <div className="text-wrapper-3">Step1</div>
            <div className="text-wrapper-4">Step2</div>
            <div className="text-wrapper-5">Step3</div>
          </div>
          <Link to="/lastpage">
          <div className="next-button">
            <div className="div-wrapper">
              <div className="text-wrapper-6">Next</div>
            </div>
          </div>
          </Link>
          <Link to="/">
          <div className="prev-button">
            <div className="div-wrapper">
              <div className="text-wrapper-7">Previous</div>
            </div>
          </div>
          </Link>

        </div>
      </div>
    </div>
  );
};
