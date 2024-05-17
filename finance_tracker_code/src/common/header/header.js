import React from "react";
import "./header.css";
import Pages from "../../pages";

// Handles the header
function Header() {
  const pages = Pages();
  const headerData = pages.header;
  const logoImage = pages.pagesImages.images.logoImage;
  const logOutButton = pages.buttons.buttonsText.logOut;

  return (
    <header className="header">
      <div className="headerWrapper">
        <div className="leftSideBar">
          <img
            src={logoImage.path}
            alt={logoImage.alt}
            className="logoImg"
          />
          <h1>{headerData.title}</h1>

          {/* Exctract the menu items from JSON using map */}
          <ul className="menulist">
            {headerData.content.map((item) => (
              <li className="menuitem" key={item.key}>
                <a href={item.key}>{item.text}</a>
              </li>
            ))}
          </ul>
          <button className="logOut">{logOutButton}</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
