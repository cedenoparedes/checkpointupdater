import React, {useEffect} from 'react';
import Chart from 'chart.js'


const PieChart = ()=>  {


  useEffect(() => {

    // const Pass = document.getElementById('pass');
    // const fails = document.getElementById('fails');

    // Chart.plugins.register({
    
    //   beforeDraw: function(chartInstance) {
    //     let ctx = chartInstance.chart.ctx;
    //     ctx.fillStyle = "white";
    //     ctx.fillRect(0, 0, chartInstance.chart.width, chartInstance.chart.height);
    //   }
    
    // });
    
 

    let data ={
      pass: 2050,
      fails: 550
  }
  
    
//   Pass.textContent = `${((data.pass * 100) / (data.pass+data.fails)).toFixed(2)}%`
//   fails.textContent = `${((data.fails * 100) / (data.pass+data.fails)).toFixed(2)}%`

 
    
    
    const ctx = document.getElementById("myPieChart");

    new Chart(ctx, {
      type:'pie',
      data:{
          labels:['Pass', 'Fails'],
          datasets:[{
              label:'%',
              data:[
                  data.pass,
                  data.fails
              ],
              backgroundColor:[
                  '#4cc9f0',
                  '#e63946'
              ] 
          }],
      },
      options:{
          title:{
              display: true,
              text: 'Chart',
              fontSize: 25,
              fontColor:'black'
  
          },
          
      }
    });
      
  },);
    
    return (
        // <div className="">
        //     <canvas id="myChart"></canvas>
        // </div>
        <div className="pieChart">
          {/* <div className="box-yield__fail">
            <p className="box-text">Pass: <span id="pass" /></p>
            <p className="box-text">Fails: <span id="fails" /></p>
          </div> */}
          <div className="canvas">
            <canvas id="myPieChart" />
          </div>
        </div>
    )
}

export default PieChart;
