import React, { Component } from "react";
import "./paymentTracker.css";
import { fetchPageData } from "../../services/fetchData";
import LanguageButton from "../../common/languageButton/languageButton";
import NotificationsIcon from "@mui/icons-material/Notifications";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import DoughnutChart from "../DoughnutChart";
import BarChart from "../barChart/barChart";

// Component for service page
export default class paymentTracker extends Component {
  
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
      const pageName = "paymentTracker";
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

    const title = pagesData.pageTitle;
    const paymentData = pagesData.paymentData;
    const exportButton = pagesData.exportButton;
    const discountImage = pagesData.discountImage;
    const couponImage = pagesData.couponImage;
    const barChartTitle = pagesData.barChartTitle;
    const categorizedExpanses = pagesData.categorizedExpanses;

    return (
      <div className="pageContainer">
        <div className="buttonsContainer">
          <NotificationsIcon />
          <LanguageButton />
        </div>
        <div className="welcomeBackTitle">
          <div>{title}</div>
        </div>
        <button className="exportButton">
          <FileUploadIcon /> {exportButton}
        </button>

        {/* Extract data from JSON */}
        <div className="diagramContainer">
          {paymentData.map((data) => (
            <div key={data.value} value={data.value}>
              <div className="totalContainer">
                <div className="totalTitle">{data.content}</div>
                <div className="amount">{data.data}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="advertisementContainer">
          <img
            src={discountImage.path}
            alt={discountImage.alt}
            className={discountImage.className}
          />
        </div>

        {/* Bar chart to display payments data */}
        <div className="diagramContainer">
          <div className={barChartTitle.className}>{barChartTitle.content}</div>
          <BarChart />
        </div>

        <div className="advertisementContainer">
          <img
            src={couponImage.path}
            alt={couponImage.alt}
            className={couponImage.className}
          />
        </div>

        {/* Doughnut chart to display payments data */}
        <div className="categoryDiagram">
          <div className="diagramTitles">{categorizedExpanses}</div>
          <div className="chartContainer">
            <DoughnutChart />
          </div>
        </div>
      </div>
    );
  }
}
