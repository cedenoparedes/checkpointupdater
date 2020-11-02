import React from "react";
import PdfIcon from "../../Images/SVG/icons/PdfIcon.svg";
import ExcelIcon from "../../Images/SVG/icons/ExcelIcon.png";
import PieChart from "../PieChart";
import BarChart from "../BarChart";

const ReportForm = () => {
  return (
    <div>
      <div className="row">
        <div className="col-6 d-flex justify-content-end btn-export">
          <button type="button">
            <img src={PdfIcon} alt="" style={{ width: "40px" }} />
          </button>
        </div>
        <div className="col-6 d-flex justify-content-start btn-export">
          <button type="button">
            <img src={ExcelIcon} alt="" style={{ width: "40px" }} />
          </button>
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
          </p>
          <p className="box-text">
            Fails: <span id="fails" />
          </p>
        </div>
        {<PieChart />}
        {<BarChart />}
      </div>
    </div>
  );
};

export default ReportForm;
