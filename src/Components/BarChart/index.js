import React, { useEffect, useContext, useState } from "react";
import Chart from "chart.js";
import { pluginCharts } from '../Common/PlugingCharts'
import GlobalContext from "../../context/globalcontext"



const NewChartjs = (props) => {

  const { totalFailures, failuresByGroup, FailuresByGroupPer } = props
  const [contextState, , contextMiddleware] = useContext(GlobalContext);

  //Language
  const [failsLabel, setFailsLabel] = useState("Fails %")
  const [failuresLabel, setFailuresLabel] = useState("Failures")
  const [quantityLabel, setQuantityLabel] = useState("Quantity")
  const [percentageLabel, setPercentageLabel] = useState("Percentage")

  let messageLabel = contextState.languageLabel
  useEffect(() => {

    const setMessageLabel = (messages, messageCode, stateToSet) => {
      if (messages === [] || messages === undefined) {
        console.log("estoy en bre")
      } else {
        const found = messages.find(element => element.messageCode === messageCode)
        if (found === undefined) {
          return
        } else {
          stateToSet(found.message)
        }
      }

    }

    setMessageLabel(messageLabel, "CHK31", setFailsLabel)
    setMessageLabel(messageLabel, "CHK32", setFailuresLabel)
    setMessageLabel(messageLabel, "CHK34", setQuantityLabel)
    setMessageLabel(messageLabel, "CHK35", setPercentageLabel)
  }, [messageLabel])


  useEffect(() => {
    pluginCharts()
    console.log(failsLabel)
    const ctx = document.getElementById("barChart");
    let data = {
      labels: failuresByGroup,
      datasets: [
        {
          type: "line",
          label: failsLabel,
          borderColor: "#BA1E14",
          backgroundColor: "#BA1E14",
          pointBorderWidth: 5,
          fill: false,
          data: FailuresByGroupPer,
          yAxisID: "y-axis-2",
        },
        {
          type: "bar",
          label: failuresLabel,
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
              labelString: quantityLabel,
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
              labelString: percentageLabel,
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
  }, [totalFailures, failuresByGroup, FailuresByGroupPer, messageLabel]);

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
