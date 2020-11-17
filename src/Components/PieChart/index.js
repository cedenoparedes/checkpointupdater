import React, { useEffect } from "react";
import Chart from "chart.js";
import PieChartForm from "./PieChartForm";
import { pluginCharts } from '../Common/PlugingCharts'

const PieChart = (props) => {
  pluginCharts();
  const { totalPass, TotalFail, TotalProcessed } = props

  useEffect(() => {


    let passLabel = "Pass"
    let failLabel = "Fail "

    const pieChart = document.getElementById("pieChart1").getContext("2d");

    Chart.defaults.global.defaultFontFamily = "Lato";
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = "#777";

    new Chart(pieChart, {
      type: "pie",
      data: {
        labels: [passLabel, failLabel],
        datasets: [
          {
            label: "Amount",
            data: [totalPass, TotalFail],
            backgroundColor: ["#99cc33", "crimson"],
          },
        ],
      },
      options: {
        title: {},
        legend: {
          position: "bottom",
          align: "center",

          labels: {
            fontSize: 10,
            padding: 12,
            boxWidth: 20,
            fontColor: "white",
          },
        },
      },
    });

  }, [totalPass, TotalFail, TotalProcessed]);

  return (
    <div>
      <PieChartForm />
    </div>
  );
};

export default PieChart;
