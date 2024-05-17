import React, { Component } from "react";
import Pages from "../../pages";
import "./backgroundImage.css";

// Handles the background image in the logIn and register pages
export default class backgroundImage extends Component {
  render() {
    const pages = Pages();
    const logoImage = pages.pagesImages.images.logoImage;
    const backgroundImage = pages.pagesImages.images.backgroundImage;

    return (
      <div
        className={backgroundImage.className}
        style={{ backgroundImage: `url(${backgroundImage.path})` }}
      >
        <div className="logoContainer">
          <img
            className={logoImage.className}
            src={logoImage.path}
            alt={logoImage.alt}
          />
        </div>
      </div>
    );
  }
}
