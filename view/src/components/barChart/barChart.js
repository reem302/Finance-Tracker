import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import "./barChart.css";
import { fetchPageData } from "../../services/fetchData";

// Component for bar chart
export default class BarChart extends Component {

  // Initialize the component state
  constructor(props) {
    super(props);
    // State holds the data that needs to be rendered
    this.state = {
      selectedPeriod: "1m",
      paymentData: {
        labels: ["January"],
        paymentHistory: [150],
        nextPayment: [200],
      },
      pagesData: null,
    };
  }

  async componentDidMount() {
    try {
      const pageName = "barChart";
      const pagesData = await fetchPageData(pageName);
      if (pagesData) {
        this.setState({ pagesData });
      }
    } catch (error) {
      console.error("Failed to fetch pages data:", error);
    }
  }

  // Handles period filter
  handlePeriodChange = (event) => {
    let paymentData;
    const { pagesData } = this.state;
    const selectedPeriod = event.target.value; // Newly selected period

    if (selectedPeriod === "1m") {
      paymentData = {
        labels: pagesData.labels.slice(0, 1),
        paymentHistory: pagesData.paymentHistory.slice(0, 1),
        nextPayment: pagesData.nextPayment.slice(0, 1),
      };
    } else if (selectedPeriod === "3m") {
      paymentData = {
        labels: pagesData.labels.slice(0, 3),
        paymentHistory: pagesData.paymentHistory.slice(0, 3),
        // Fills the array with the same value repeated 3 times
        nextPayment: Array(3).fill(pagesData.nextPayment[0]),
      };
    } else if (selectedPeriod === "6m") {
      paymentData = {
        labels: pagesData.labels.slice(0, 6),
        paymentHistory: pagesData.paymentHistory.slice(0, 6),
        // Fills the array with the same value repeated 6 times
        nextPayment: Array(6).fill(pagesData.nextPayment[0]),
      };
    }
    this.setState({ selectedPeriod, paymentData }); // Updates the component's state
  };

  render() {
    const { selectedPeriod, paymentData, pagesData } = this.state;
    if (!pagesData) {
      return null;
    }

    const chartData = {
      labels: paymentData.labels,
      datasets: [
        {
          label: "Payment History",
          data: paymentData.paymentHistory,
          backgroundColor: "rgba(54, 118, 103, 0.6)",
          borderColor: "rgba(54, 118, 103)",
          borderWidth: 1,
        },
        {
          label: "Next Payment",
          data: paymentData.w
          backgroundColor: "rgba(129, 170, 160, 0.6)",
          borderColor: "rgba(129, 170, 160)",
          borderWidth: 1,
        },
      ],
    };

    const options = {
      maintainAspectRatio: false,
      plugins: {
        tooltip: {
          callbacks: {
            title: function () {
              return ""; // Set title to empty string
            },
            label: function (tooltipItem) {
              let label = tooltipItem.dataset.label;
              if (label) {
                label += ": ";
              }
              label += tooltipItem.raw + "₪"; // Append shekel symbol to the raw value
              return label;
            },
          },
        },
      },
    };

    return (
      <div className="barChartContainer">
        <div className="filterContainer">
          <label htmlFor="periodSelect">{pagesData.filterLabel}</label>
          <select
            id="periodSelect"
            value={selectedPeriod}
            onChange={this.handlePeriodChange}
          >

            {/* Extract months from JSON */}
            {pagesData.months.map((month) => (
              <option key={month.value} value={month.value}>
                {month.content}
              </option>
            ))}
          </select>
        </div>
        <div className="chartWrapper">
          <Bar data={chartData} options={options} />
        </div>
      </div>
    );
  }
}
