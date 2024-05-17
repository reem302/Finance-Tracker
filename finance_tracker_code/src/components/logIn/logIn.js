import React, { Component } from "react";
import "./logIn.css";
import Pages from "../../pages";
import Forms from "../../forms";
import BackgroundImage from "../../common/backgroundImage/backgroundImage";
import LanguageButton from "../../common/languageButton/languageButton";

// Component that handles the login page
export default class LogIn extends Component {
  render() {
    const pages = Pages();
    const forms = Forms();
    const loginTitle = pages.logIn.title;
    const loginData = pages.logIn.content;
    const userIcon = pages.logIn.userIcon;
    const googleImage = pages.pagesImages.images.googleImage;
    const buttonsData = pages.buttons.buttonsText;
    const logInInputs = forms.loginPage.logInInputs;

    return (
      <div className="logInContainer">
        <BackgroundImage />
        <div className="loginContainer">
          <div className="buttons">
            <LanguageButton />
            <a href="/" className="backButton">
              {buttonsData.backButton}
            </a>
          </div>
          <div className="inputFields">
            <div>
              <div className="userIcon"> {userIcon}</div>
              <div className="title">{loginTitle}</div>
            </div>

            {/* Extract login inputs from JSON using map */}
            <div className="loginForm">
              <form>
                {logInInputs.map((input) => (
                  <div className="formItem" key={input.id}>
                    {input.icon}
                    <input
                      type={input.type}
                      name={input.name}
                      className={input.className}
                      placeholder={input.placeholder}
                    />
                  </div>
                ))}
              </form>
            </div>
            <button className="loginButton">{buttonsData.logInButton}</button>

            {/* Exctract image from JSON */}
            <div className="googleContainer">
              {loginData.continueWith}
              <img
                src={googleImage.path}
                alt={googleImage.alt}
                className={googleImage.className}
              />
            </div>

            {/* Navigate to register page */}
            <div className="registeContainer">
              <div>{loginData.dontHaveAccount}</div>
              <a href="/register" className="joinNowlink">
                {loginData.joinNow}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
