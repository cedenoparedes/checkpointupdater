import React from "react";
import PdfIcon from "../../Images/SVG/icons/pdf.svg";
import ExcelIcon from "../../Images/SVG/icons/excel.svg";
import PieChart from "../PieChart";
import BarChart from "../BarChart";
import BackIcon from "../../Images/SVG/icons/back.svg";
import RefreshIcon from "../../Images/SVG/icons/refresh.svg";

const ReportForm = () => {
  return (
    <div className="Container">
      <div className="row">
        <div className="col-12 d-flex  justify-content-center btn-export">
          <fieldset>
            <legend>Export to:</legend>
            <div className="justify-content-center">
              <img className="exporticon" src={PdfIcon} alt="" />
              <img className="exporticon" src={ExcelIcon} alt="" />
            </div>
          </fieldset>
        </div>
      </div>
      <div className="container container-format">
        <div className="row text-center">
          <div className="col-4">
            <h3 className="title">Customer</h3>
            <a href="#" className="btn option">
              506
            </a>
          </div>
          <div className="col-4">
            <h3 className="title">Process</h3>
            <a href="#" className="btn option">
              DSM
            </a>
          </div>
          <div className="col-4">
            <h3 className="title">Model</h3>
            <a href="#" className="btn option">
              IPHX
            </a>
          </div>
        </div>
        <div className="box-yield__fail">
          <p className="box-text">
            Pass: <span id="pass" />
            78.85%
          </p>
          <p className="box-text">
            Fails: <span id="fails" />
            21.15%
          </p>
        </div>
        {<PieChart />}
        {<BarChart />}
      </div>
      <div className="back-refresh-container d-flex justify-content-right">
        <div className="col-6 d-flex justify-content-end">
          <div className="back-refresh-btn justify-content-center">
            <img src={BackIcon} alt="" />
            <p className="btn-lbl">Back</p>
          </div>
        </div>
        <div className="col-6 d-flex justify-content-left">
          <div className="back-refresh-btn justify-content-center">
            <img src={RefreshIcon} alt="" />
            <p className="btn-lbl">Refresh</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportForm;
