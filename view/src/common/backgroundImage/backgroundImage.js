import React, { Component } from "react";
import { fetchPageData } from "../../services/fetchData";
import "./backgroundImage.css";

// Component for background image in the logIn and register pages
export default class backgroundImage extends Component {
  
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
      const pageName = "background";
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

    const logoImage = pagesData.logoImage;
    const backgroundImage = pagesData.backgroundImage;

    return (
      <div
        className={backgroundImage.className}
        style={{ backgroundImage: `url(${backgroundImage.path})` }}
      >
        {/* Extract logo image from JSON */}
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
