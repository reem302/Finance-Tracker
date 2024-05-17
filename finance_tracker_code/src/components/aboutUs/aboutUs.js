import React, { Component } from "react";
import Pages from "../../pages";
import "./aboutUs.css";
import LanguageButton from "../../common/languageButton/languageButton";

// Component that displays the about us page
export default class AboutUs extends Component {
  render() {
    const pages = Pages();
    const aboutUsData = pages.aboutUs;
    const backgroundImage = pages.pagesImages.images.aboutUs;

    return (
      <div className="aboutUsContainer">
        <div className="buttons">
          <LanguageButton />
        </div>
        <h2 className="aboutUstitles">{aboutUsData.title}</h2>

        {/* About Us Image */}
        <div className="descriptionContainer">
          <div
            className={backgroundImage.className}
            style={{ backgroundImage: `url(${backgroundImage.path})` }}
            alt={backgroundImage.alt}
          >
            <div className="aboutUsOverlay"></div>

            {/* Extract About Us description from JSON */}
            <div className="description">
              {aboutUsData.description.split("\n").map((line, index) => (
                <div key={index}>{line}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
