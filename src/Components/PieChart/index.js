import React, { useEffect } from "react";
import Chart from "chart.js";
import PieChartForm from "./PieChartForm";
import '../Common/ChartCustom';


const PieChart = (props) => {

  const { totalPass, TotalFail, TotalProcessed } = props

  useEffect(() => {


    const pieChart = document.getElementById("pieChart1").getContext("2d");

    Chart.defaults.global.defaultFontFamily = "Lato";
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = "#777";

    let displayPieChart = new Chart(pieChart, {
      type: "pie",
      data: {
        labels: ["Pass", "Fail", "Process"],
        datasets: [
          {
            label: "Amount",
            data: [totalPass, TotalFail, TotalProcessed],
            backgroundColor: ["#99cc33", "crimson", "#4cc9f0"],
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
