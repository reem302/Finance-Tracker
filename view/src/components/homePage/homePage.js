import React, { Component } from "react";
import "./homePage.css";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { fetchPageData } from "../../services/fetchData";

// Map to display icons using map
const iconMap = {
  DocumentScannerIcon: DocumentScannerIcon,
  AutoAwesomeMosaicIcon: AutoAwesomeMosaicIcon,
  MonetizationOnIcon: MonetizationOnIcon,
};

// Component for home page 
export default class HomePage extends Component {

  // Intialize the component state
  constructor(props) {
    super(props);
    // State holds the data that needs to be rendered
    this.state = {
      pagesData: null,
    };
  }

  async componentDidMount() {
    try {
      const pageName = "HomePage";
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

    const homePageTitle = pagesData.homePageTitle;
    const intro = pagesData.intro;
    const features = pagesData.features;
    const getStartedButton = pagesData.getStarted;
    const logoImage = pagesData.logoImage;
    const backgroundImage = pagesData.backgroundImage;

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
              className={logoImage.className}
            />

            {/* Extract the title from JSON  */}
            {homePageTitle.map((title, index) => (
              <div key={index} className={title.className}>
                {title.content}
              </div>
            ))}
          </div>
        </div>

        <div className="introContainer">
          <div className="introText">
            {intro.introText} <br />
            <div className="signUpText">{intro.signUpText}</div>
          </div>
        </div>

        {/* Extract the features from JSON using map */}
        <div className="rectangleContainer">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];

            return (
              <div key={index}>
                <div className="rectangle">
                  {IconComponent && (
                    <IconComponent
                      sx={{ fontSize: 45, color: "#045542" }}
                      className="inputIcon"
                    />
                  )}
                  <div className="featureContent">{feature.content}</div>
                </div>
              </div>
            );
          })}
        </div>
        <a href="/login" className="getStartedButton">
          {getStartedButton}
        </a>
      </div>
    );
  }
}
