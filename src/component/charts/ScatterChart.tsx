import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const ScatterChart: React.FC = () => {
  // Sample data
  const options: Highcharts.Options = {
    chart: {
      type: "scatter",
    },
    title: {
      text: "Product Sales vs. Price",
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      title: {
        text: "Price",
      },
      startOnTick: true,
      endOnTick: true,
      showLastLabel: true,
    },
    yAxis: {
      title: {
        text: "Sales",
      },
    },
    legend: {
      layout: "vertical",
      align: "left",
      verticalAlign: "top",
      x: 100,
      y: 70,
      floating: true,
      backgroundColor: "#FFFFFF",
      borderWidth: 1,
    },
    plotOptions: {
      scatter: {
        marker: {
          radius: 5,
          states: {
            hover: {
              enabled: true,
              lineColor: "rgb(100,100,100)",
            },
          },
        },

        tooltip: {
          headerFormat: "<b>{series.name}</b><br>",
          pointFormat: "{point.x} USD, {point.y} units",
        },
      },
    },
    series: [
      {
        type: "scatter", // Specify the type as 'scatter'
        name: "Product Sales",
        color: "rgba(223, 83, 83, .5)",
        data: [
          [50, 55000],
          [70, 65000],
          [90, 75000],
          [110, 45000],
          [130, 80000],
          [150, 60000],
          [170, 70000],
          [190, 85000],
          [210, 90000],
          [230, 95000],
          [250, 100000],
          [270, 120000],
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

export default ScatterChart;
