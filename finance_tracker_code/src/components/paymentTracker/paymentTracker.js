import React, { Component } from "react";
import "./paymentTracker.css";
import Pages from "../../pages";
import LanguageButton from "../../common/languageButton/languageButton";

// Component to display the payment history with graph
export default class paymentTracker extends Component {
  render() {
    const pages = Pages();
    const pageTitle = pages.paymentTracker.pageTitle;
    const diagramsData = pages.paymentTracker.diagramTitles;
    const paymentData = pages.paymentTracker.paymentData;
    const buttonsData = pages.buttons.buttonsText;
    const graphImage = pages.pagesImages.images.graphImage;

    return (
      <div className="pageContainer">
        <div className="buttonsContainer">
          <div>{buttonsData.notificationIcon} </div>
          <LanguageButton />
          <div className="logOutButton">{buttonsData.logOut}</div>
        </div>
        <div className="nameContainer">
          <div className="welcomeBack">{pageTitle}</div>
        </div>

        {/* Payment container */}
        <div className="paymentContainer">
          {paymentData.map((data) => (
            <div key={data.value} value={data.value}>
              <div className="totalContainer">
                <div className="totalTitle">
                  <div>{data.icon}</div>
                  {data.content}
                </div>
                <div className="amount">{data.data}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Diagram container */}
        <div className="diagramContainer">
          {diagramsData.map((data) => (
            <div key={data.value} value={data.value}>
              <div className="totalContainer">
                <div className="titles">
                  <div className="diagramTitles">{data.content}</div>
                  <div className="paymentData">{data.value}</div>
                </div>
              </div>
            </div>
          ))}
          <img
            src={graphImage.path}
            alt={graphImage.alt}
            className={graphImage.className}
          />
        </div>
      </div>
    );
  }
}
