import React from "react";
import "./PieChartForm.css";

const PieChartForm = () => {
  return (
    // <div className="">
    //     <canvas id="myChart"></canvas>
    // </div>
    // <div className="pieChart">
    //   {/* <div className="box-yield__fail">
    //     <p className="box-text">Pass: <span id="pass" /></p>
    //     <p className="box-text">Fails: <span id="fails" /></p>
    //   </div> */}
    <React.Fragment>
      <canvas id="pieChart1" className="ReportPieChart"></canvas>
    </React.Fragment>

    // </div>
  );
};

export default PieChartForm;
