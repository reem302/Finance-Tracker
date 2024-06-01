import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import { fetchPageData } from "../services/fetchData";
import "chart.js/auto";

// Component to display the Doughnut chart
export default class DoughnutChart extends Component {

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
      const pageName = "categorizedDiagram";
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
      console.log("No pages data found");
      return null;
    }

    const labels = pagesData.labels;
    const amounts = pagesData.data;

    const data = {
      labels: labels,
      datasets: [
        {
          data: amounts,
          backgroundColor: [
            "#008D5E",
            "#045542",
            "#044055",
            "#5c5150",
            "#3e8776",
            "#007989",
            "#4BC0C0",
            "#FFCD56",
            "#9baaa0",
            "#81aaa0",
          ],
        },
      ],
    };

    const options = {
      plugins: {
        tooltip: {
          callbacks: {
            label: function (tooltipItem) {
              let label = tooltipItem.dataset.label || '';
              if (label) {
                label += ': ';
              }
              label += tooltipItem.raw + '₪'; // Append shekel symbol to the raw value
              return label;
            }
          },
        },
      },
    };

    return (
      <div>
        <Doughnut data={data} options={options}/>
      </div>
    );
  }
}
