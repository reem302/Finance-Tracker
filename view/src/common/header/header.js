import React, { Component } from "react";
import "./header.css";
import { fetchPageData } from "../../services/fetchData";

// Component for header
class Header extends Component {

  // Initialize the component state
  constructor(props) {
    super(props);
    // State holds the data that needs to be rendered
    this.state = {
      pagesData: null,
      error: null
    };
  }

  async componentDidMount() {
    try {
      const pageName = "header";
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

    const title = pagesData.title;
    const content = pagesData.content;
    const logoForHeader = pagesData.logoForHeader;
    const logOutButton = pagesData.logOut;

    return (
      <header className="header">
          <div className="leftSideBar">

            {/* Extract logo image and title from JSON */}
            <img src={logoForHeader.path} alt={logoForHeader.alt} className={logoForHeader.className} />
            <h1>{title}</h1>

            {/* Map over the list */}
            <ul className="menulist">
              {content.map((item) => (
                <li className="menuitem" key={item.key}>
                  <a href={item.key}>{item.text}</a>
                </li>
              ))}
            </ul>
            <button className="logOut">{logOutButton}</button>
          </div>
      </header>
    );
  }
}

export default Header;
