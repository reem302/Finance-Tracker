import React from "react";
import "./footer.css";
import Pages from "../../pages"; 

// Handles the footer
function Footer() {
  const pages = Pages();
  const footerData = pages.footer;

  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer">
          {/* Extract the content from JSON using map */}
          <ul className="footerLinks">
            {footerData.pagesLinks.map((item) => (
              <li key={item.key}>
                <a href={`/${item.key}`}>{item.text}</a>
              </li>
            ))}
          </ul>
          <p>&copy; {footerData.reservedRights}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
