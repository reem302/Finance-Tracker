import React, { Component } from "react";
import { fetchPageData } from "../../services/fetchData";
import "./aboutUs.css";
import LanguageButton from "../../common/languageButton/languageButton";

// Component for about us page
export default class AboutUs extends Component {
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
      const pageName = "aboutUs";
      const pagesData = await fetchPageData(pageName);
      if (pagesData) {
        this.setState({ pagesData });
      }
    } catch (error) {
      console.error("Failed to fetch pages data:", error);
    }
  }
  
  render() {
    const { pagesData } = this.state;
    if (!pagesData) {
      return null;
    }

    const title = pagesData.title;
    const description = pagesData.description;
    const backgroundImage = pagesData.backgroundImage;

    return (
      <div className="aboutUsContainer">
        <LanguageButton />
        <div className="aboutUstitle">{title}</div>

        {/* About Us Image */}
          <div
            className={backgroundImage.className}
            style={{ backgroundImage: `url(${backgroundImage.path})` }}
            alt={backgroundImage.alt}
          >
            <div className="aboutUsOverlay"></div>

            {/* Extract About Us description from JSON */}
            <div className="description">
              {description.split("\n").map((line, index) => (
                <div key={index}>{line}</div>
              ))}
            </div>
          </div>
      </div>
    );
  }
}
