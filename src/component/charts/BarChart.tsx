import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const ColumnChart: React.FC = () => {
  // Sample real-world data
  const options: Highcharts.Options = {
    chart: {
      type: "column",
      height: 400, // Adjust the height as needed
    },
    title: {
      text: "Product Sales Performance",
    },
    xAxis: {
      categories: [
        "Product A",
        "Product B",
        "Product C",
        "Product D",
        "Product E",
      ],
      title: {
        text: "Product",
      },
    },
    yAxis: {
      title: {
        text: "Sales",
      },
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        type: "column",
        name: "2023",
        data: [
          { y: 55000, color: "#FFA500" },
          { y: 65000, color: "#00FF00" },
          { y: 75000, color: "#0000FF" },
          { y: 45000, color: "#FF0000" },
          { y: 80000, color: "#800080" },
        ],
      },
      {
        type: "column",
        name: "2024",
        data: [
          { y: 60000, color: "#FFA500" },
          { y: 70000, color: "#00FF00" },
          { y: 78000, color: "#0000FF" },
          { y: 48000, color: "#FF0000" },
          { y: 82000, color: "#800080" },
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

export default ColumnChart;
