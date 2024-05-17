import React, { Component } from "react";
import "./register.css";
import Pages from "../../pages.js";
import Forms from "../../forms.js";
import BackgroundImage from "../../common/backgroundImage/backgroundImage.js";
import LanguageButton from "../../common/languageButton/languageButton";

// Component that handles the register page
export default class Register extends Component {
  render() {
    const registerData = Pages().register;
    const buttonsData = Pages().buttons.buttonsText;
    const registerInputs = Forms().registerPage.registerInputs;

    return (
      <div className="registerContainer">
        <BackgroundImage />
        <div className="signInContainer">
          <div className="buttonContainer">
            <div>
              <LanguageButton />
            </div>
            <a href="/login" className="backButton">
              {buttonsData.backButton}
            </a>
          </div>
          <div className="centerItem">
            <div>
              <div className="registerTitle">
                {registerData.registerTitle}
                <span className="name">{registerData.financeTracker}</span>
              </div>
            </div>

            {/* Extract register inputs from JSON using map */}
            <div className="form">
              {Object.keys(registerInputs).map((key) => {
                const inputProps = registerInputs[key];
                return (
                  <div key={key}>
                    <label>{inputProps.label}</label> <br />
                    <input
                      type={inputProps.type}
                      name={inputProps.name}
                      className={inputProps.className}
                    />
                  </div>
                );
              })}
            </div>
            <button className="registerButton">
              {buttonsData.registerButton}
            </button>

            {/* Navigate to login page */}
            <div className="registerItem">
              {registerData.alreadyMember}
              <a href="/login" className="signInlink">
                {registerData.signInLink}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
