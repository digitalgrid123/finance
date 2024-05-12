import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const DonutChart: React.FC = () => {
  // Sample data
  const options: Highcharts.Options = {
    chart: {
      type: "pie",
      options3d: {
        enabled: true,
        alpha: 45,
        beta: 0,
      },
    },
    title: {
      text: "Product Sales Distribution",
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        depth: 35,
        dataLabels: {
          enabled: true,
          format: "{point.name}: {point.percentage:.1f}%",
        },
      },
    },
    series: [
      {
        type: "pie",
        name: "Sales",
        data: [
          { name: "Product A", y: 10000 },
          { name: "Product B", y: 20000 },
          { name: "Product C", y: 30000 },
          { name: "Product D", y: 40000 },
          { name: "Product E", y: 50000 },
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

export default DonutChart;
