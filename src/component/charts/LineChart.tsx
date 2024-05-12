import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const LineChart: React.FC = () => {
  // Sample real-world data
  const options: Highcharts.Options = {
    chart: {
      type: "line",
      height: 400, // Adjust the height as needed
    },
    title: {
      text: "Product Sales Trend",
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      title: {
        text: "Month",
      },
    },
    yAxis: {
      title: {
        text: "Sales",
      },
    },
    series: [
      {
        type: "line",
        name: "2023",
        data: [
          { y: 55000, color: "#FFA500" },
          { y: 65000, color: "#00FF00" },
          { y: 75000, color: "#0000FF" },
          { y: 45000, color: "#FF0000" },
          { y: 80000, color: "#800080" },
          { y: 60000, color: "#FFA500" },
          { y: 70000, color: "#00FF00" },
          { y: 85000, color: "#0000FF" },
          { y: 90000, color: "#FF0000" },
          { y: 95000, color: "#800080" },
          { y: 100000, color: "#FFA500" },
          { y: 120000, color: "#00FF00" },
        ],
      },
      {
        type: "line",
        name: "2024",
        data: [
          { y: 60000, color: "#FFA500" },
          { y: 70000, color: "#00FF00" },
          { y: 78000, color: "#0000FF" },
          { y: 48000, color: "#FF0000" },
          { y: 82000, color: "#800080" },
          { y: 64000, color: "#FFA500" },
          { y: 72000, color: "#00FF00" },
          { y: 87000, color: "#0000FF" },
          { y: 92000, color: "#FF0000" },
          { y: 97000, color: "#800080" },
          { y: 105000, color: "#FFA500" },
          { y: 125000, color: "#00FF00" },
        ],
      },
    ],
  };

  return (
    <div className="max-w-md mt-4 bg-white shadow-md overflow-hidden rounded-lg mx-4">
      <div className="px-4 py-5 sm:p-6">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
};

export default LineChart;
