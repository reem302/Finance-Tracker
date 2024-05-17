import React, { Component } from "react";
import Pages from "../../pages";
import Forms from "../../forms.js";
import "./contactUs.css";
import LanguageButton from "../../common/languageButton/languageButton";

// Component that handles the contact us page
export default class ContactUs extends Component {
  render() {
    const pages = Pages();
    const forms = Forms();
    const contactUsData = pages.contactUs;
    const buttonsData = pages.buttons.buttonsText;
    const contactUsInputs = forms.contactUsPage.contactUsInputs;
    const contactUsImage = pages.pagesImages.images.contactUs;

    return (
      <div className="contactUsContainer">
        <div className="buttonsContainer">
          <LanguageButton />
        </div>
        <h2 className="contactUsTitle">{contactUsData.title}</h2>

        {/* Extract image from JSON */}
        <div
          className={contactUsImage.className}
          style={{ backgroundImage: `url(${contactUsImage.path})` }}
          alt={contactUsImage.alt}
        >
          <h3 className="getInTouch">{contactUsData.getInTouchTitle}</h3>

          {/* Extract inputs from JSON using map */}
          <form>
            {Object.values(contactUsInputs).map((input) => (
              <div className="formGroup" key={input.id}>
                <input
                  type={input.type}
                  name={input.name}
                  className={input.className}
                  placeholder={input.placeholder}
                />
              </div>
            ))}
          </form>
          <button className="submitButton">{buttonsData.submitButton}</button>
        </div>
      </div>
    );
  }
}
