import React, { Component } from "react";
import "./homePage.css";
import Pages from "../../pages";

export default class homePage extends Component {
  render() {
    const pages = Pages();
    const homePageData = pages.HomePage;
    const logoImage = pages.pagesImages.images.logoImage;
    const features = pages.HomePage.features;
    const buttonsData = pages.buttons.buttonsText;
    const backgroundImage = pages.pagesImages.images.backgroundImage;

    return (
      <div className="homePageContainer">
        {/* Image and title container */}
        <div
          className="imageContainer"
          style={{ backgroundImage: `url(${backgroundImage.path})` }}
        >
          <div className="overlay"></div>
          <div className="titleContainer">
            <img
              src={logoImage.path}
              alt={logoImage.alt}
              className="logoImg"
            />

            {/* Extract the title from JSON  */}
            {homePageData.homePageTitle.map((title) => (
              <div key={homePageData.id} className={title.className}>
                {title.content}
              </div>
            ))}
          </div>
        </div>

        <div className="introContainer">
          <div className="introText">
            {homePageData.intro.introText} <br />
            <div className="signUpText">{homePageData.intro.signUpText}</div>
          </div>
        </div>

        {/* Extract the features from JSON using map */}
        <div className="rectangleContainer">
          {features.map((feature) => (
            <div key={feature.content}>
              <div className="rectangle">
                <div>{feature.icon} </div>
                <div className="featureContent">{feature.content}</div>
              </div>
            </div>
          ))}
        </div>
        <a href="/login" className="getStartedButton">
          {buttonsData.getStarted}
        </a>
      </div>
    );
  }
}
