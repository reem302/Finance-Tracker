import React, { Component } from "react";
import "./footer.css";
import { fetchPageData } from "../../services/fetchData";
import ContactUs from "../../components/contactUs/contactUs";

// Component for footer
class Footer extends Component {

  // Initialize the component state
  constructor(props) {
    super(props);
    // State holds the data that needs to be rendered
    this.state = {
      pagesData: null,
      isModalOpen: false,
    };
  }

  async componentDidMount() {
    try {
      const pageName = "footer";
      const data = await fetchPageData(pageName);
      if (data) {
        this.setState({ pagesData: data });
      }
    } catch (error) {
      console.error("Failed to fetch pages data:", error);
    }
  }

  // Update the state of the modal
  setIsModalOpen = (isOpen) => {
    this.setState({ isModalOpen: isOpen });
  };

  handleContactUsClick = (event) => {
    event.preventDefault();
    this.setIsModalOpen(true);
  };

  render() {
    const { pagesData, isModalOpen } = this.state;
    if (!pagesData) {
      return null;
    }

    const footerContent = pagesData;

    return (
      <footer className="footer">
        <div className="wrapper">
          <ul className="footerLinks">

            {/* Extract cdata from JSON using map */}
            {footerContent.pagesLinks.map((link) => (
              <li key={link.key}>
                {link.key === "contactUs" ? (
                  <a href="#" onClick={this.handleContactUsClick}>
                    {link.text}
                  </a>
                ) : (
                  <a href={`/${link.key}`}>{link.text}</a>
                )}
              </li>
            ))}
          </ul>
          <p>&copy; {footerContent.reservedRights}</p>
        </div>
        {isModalOpen && <ContactUs setIsOpen={this.setIsModalOpen} />}
      </footer>
    );
  }
}

export default Footer;
