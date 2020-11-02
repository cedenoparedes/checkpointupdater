import React, { useEffect } from "react";
import Chart from "chart.js";
import BarChartForm from "./BarChartForm";

const NewChartjs = () => {
  //     let data = {
  //         datasets: [{
  //             data: [10, 20, 30]
  //         }],

  //         // These labels appear in the legend and in the tooltips when hovering different arcs
  //         labels: [
  //             'Red',
  //             'Yellow',
  //             'Blue'
  //         ],

  //     };

  //    let options = {

  //     }

  //     var myPieChart = new Chart(ctx, {
  //         type: 'pie',
  //         data: data,
  //         options: options
  //     });

  useEffect(() => {
    const ctx = document.getElementById("barChart");
    let data = {
      labels: ["8", "7", "9", "11"],
      datasets: [
        {
          type: "line",
          label: "Fails %",
          borderColor: "#BA1E14",
          backgroundColor: "#BA1E14",
          pointBorderWidth: 5,
          fill: false,
          data: [34.04, 57.45, 76.6, 89.36, 100.0],
          yAxisID: "y-axis-2",
        },
        {
          type: "bar",
          label: "Failures",
          borderColor: "#e63946",
          backgroundColor: "#e63946",
          data: [21, 11, 9, 6, 5],
          yAxisID: "y-axis-1",
        },
      ],
    };

    let options = {
      scales: {
        xAxes: [
          {
            stacked: true,
            scaleLabel: {
              display: true,
              labelString: "Estaciones",
            },
          },
        ],

        yAxes: [
          {
            type: "linear",
            position: "left",
            id: "y-axis-1",
            stacked: true,
            ticks: {
              suggestedMin: 0,
            },
            scaleLabel: {
              display: true,
              labelString: "Quantity",
            },
          },
          {
            type: "linear",
            position: "right",
            id: "y-axis-2",
            ticks: {
              suggestedMin: 0,
              callback: function (value) {
                return value + "%";
              },
            },
            scaleLabel: {
              display: true,
              labelString: "Percentage",
            },
          },
        ],
      },
    };

    new Chart(ctx, {
      type: "bar",
      data: data,
      options: options,
    });
  }, []);

  return (
    // <div>
    //   <myPieChart data={data} options={options} />
    // </div>
    <div className="canvas">
      <canvas id="barChart" />
    </div>
  );
};
export default NewChartjs;
