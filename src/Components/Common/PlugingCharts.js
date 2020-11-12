import Chart from 'chart.js'

export function pluginCharts() {
    Chart.plugins.register({
        beforeDraw: function (chartInstance) {
            var ctx = chartInstance.chart.ctx;
            ctx.fillStyle = "#1d1b1c";
            ctx.fillRect(0, 0, chartInstance.chart.width, chartInstance.chart.height);
        }
    })
}



