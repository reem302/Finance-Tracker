import React, { Component } from "react";
import Pages from "../../pages";
import "./languageButton.css"

// Component for language button
export default class languageButton extends Component {
  render() {
    const pages = Pages();
    const buttonsData = pages.buttons.buttonsText;

    return (
      <div>
        <div className="langButton">
          <div>
            <select name="selectedLanguage" className="selectedLanguage">
              {buttonsData.languages.map((lang) => (
                <option key={lang.value} value={lang.value}>
                  {lang.text}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    );
  }
}
