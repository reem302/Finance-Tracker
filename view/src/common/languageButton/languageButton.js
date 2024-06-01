import React, { Component } from "react";
import { fetchPageData } from "../../services/fetchData";
import "./languageButton.css";

// Component for language button
export default class languageButton extends Component {

  // Initialize the component state
  constructor(props) {
    super(props);
    // State holds the data that needs to be rendered
    this.state = {
      pagesData: null,
    };
  }

  async componentDidMount() {
    try {
      const pageName = "languageButton";
      const pagesData = await fetchPageData(pageName);
      this.setState({ pagesData });
    } catch (error) {
      console.error("Error fetching data:", error);
      this.setState({ error: "Failed to fetch data" });
    }
  }
  render() {
    const { pagesData } = this.state;
    if (!pagesData) {
      return null;
    }

    const languageButton = pagesData.languages;

    return (
        <div className="langButton">
          <div>
            <select name="selectedLanguage" className="selectedLanguage">
              
              {/* Map over the languages */}
              {languageButton.map((lang) => (
                <option key={lang.value} value={lang.value}>
                  {lang.text}
                </option>
              ))}
            </select>
          </div>
        </div>
    );
  }
}
