import React, { useEffect } from "react";
import Chart from "chart.js";


const NewChartjs = (props) => {

  const { totalFailures, failuresByGroup } = props

  useEffect(() => {

    const ctx = document.getElementById("barChart");
    let data = {
      labels: failuresByGroup,
      datasets: [
        {
          type: "line",
          label: "Fails %",
          borderColor: "#BA1E14",
          backgroundColor: "#BA1E14",
          pointBorderWidth: 5,
          fill: false,
          data: [62.5, 37.5],
          yAxisID: "y-axis-2",
        },
        {
          type: "bar",
          label: "Failures",
          borderColor: "#e63946",
          backgroundColor: "#e63946",
          data: totalFailures,
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
  }, [totalFailures]);

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
