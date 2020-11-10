import React, { useEffect, useState } from "react";
import PdfIcon from "../../Images/SVG/icons/pdf.svg";
import ExcelIcon from "../../Images/SVG/icons/excel.svg";
import PieChart from "../PieChart";
import BarChart from "../BarChart";
import Chart from "chart.js";
import BackIcon from "../../Images/SVG/icons/back.svg";
import RefreshIcon from "../../Images/SVG/icons/refresh.svg";
import { Link } from "react-router-dom";
import { jsPdfGenerator } from './ExportPdf';
import { getDailyData } from '../../api/report-api';

const ReportForm = () => {
  const [visible, setVisible] = useState({
    contentVisibility: "",
    customerPopVisibility: "d-none",
    modelPopVisibility: "d-none",
    processPopVisibility: "d-none",
  });

  const showPopUp = (button) => {
    if (button === "Customer") {
      setVisible({
        contentVisibility: "d-none",
        customerPopVisibility: "",
        modelPopVisibility: "d-none",
        processPopVisibility: "d-none",
      });
    } else if (button === "Model") {
      setVisible({
        contentVisibility: "d-none",
        customerPopVisibility: "d-none",
        modelPopVisibility: "",
        processPopVisibility: "d-none",
      });
    } else {
      setVisible({
        contentVisibility: "d-none",
        customerPopVisibility: "d-none",
        modelPopVisibility: "d-none",
        processPopVisibility: "",
      });
    }
  };
  useEffect(() => {
    Chart.plugins.register({
      beforeDraw: function (chartInstance) {
        let ctx = chartInstance.chart.ctx;
        ctx.fillStyle = "#2f2f2f";
        ctx.fillRect(
          0,
          0,
          chartInstance.chart.width,
          chartInstance.chart.height
        );
      },
    });
  });

  return (
    <div className="container-main" id="chart">
      {/* <meta charSet="utf-8" /> */}
      <div className="row">
        <div className="col-12 d-flex  justify-content-center btn-export">
          <fieldset>
            <legend>Export to:</legend>
            <div className="justify-content-center">
              <img
                type="button"
                onClick={() => {
                  jsPdfGenerator();
                }}
                className="exporticon"
                src={PdfIcon}
                alt=""
              />
              <img className="exporticon" src={ExcelIcon} alt="" />
            </div>
          </fieldset>
        </div>
      </div>
      <div className="container container-format1" id="report-container">
        <div className="row text-center">
          <div className="col-4">
            <h3 className="title1">Customer</h3>
            <a href="#" className="btn option1" id="CustomerBtn">
              506
            </a>
          </div>
          <div className="col-4">
            <h3 className="title1">Process</h3>
            <a href="#" className="btn option1" id="ProcessBtn">
              DSM
            </a>
          </div>
          <div className="col-4">
            <h3 className="title1">Model</h3>
            <a href="#" className="btn option1" id="ModelBtn">
              IPHX
            </a>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-3 d-flex justify-content-end">
            <div className="box-yield__fail1 align-self-center ">
              <div className="box-yield__fail1">
                <p className="box-text1 ">Pass: <span id="pass" />78.85%</p>
                <p className="box-text1 ">Fails: <span id="fails" />21.15%</p>
              </div>
            </div>
          </div>
          <div className="col-6 ">
            <div id="chart1 ">{<PieChart />}</div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <div className="chart1"> {<BarChart />}</div>
          </div>
        </div>
      </div>
      <div className="back-refresh-container d-flex justify-content-right">
        <div className="col-6 d-flex justify-content-end">
          <Link
            to="../ReportCheckPoint"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <div className="back-refresh-btn justify-content-center">
              <img src={BackIcon} alt="" />
              <p className="btn-lbl">Back</p>
            </div>
          </Link>
        </div>
        <div className="col-6 d-flex justify-content-left">
          <Link
            to="../Report"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <div className="back-refresh-btn justify-content-center">
              <img src={RefreshIcon} alt="" />
              <p className="btn-lbl">Refresh</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReportForm;
