import React from "react";
import Chart from "chart.js";


const ChartCustom = () => {

    return (Chart.plugins.register({
        beforeDraw: function (chartInstance) {
            var ctx = chartInstance.chart.ctx;
            ctx.fillStyle = "#1D1B1C";
            ctx.fillRect(0, 0, chartInstance.chart.width, chartInstance.chart.height);
        }
    }))

}

export default ChartCustom;