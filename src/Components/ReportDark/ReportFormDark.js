import React, { useEffect, useState, useContext } from "react";
import PdfIcon from "../../Images/SVG/icons/pdf.svg";
import PieChart from "../PieChart";
import BarChart from "../BarChart";
import Chart from "chart.js";
import BackIcon from "../../Images/SVG/icons/back.svg";
import RefreshIcon from "../../Images/SVG/icons/refresh.svg";
import { getTableData } from "../../api/report-api"
import { Link, useLocation } from "react-router-dom";
import { jsPdfGenerator } from './ExportPdf';
import { Form } from "react-bootstrap";
import GlobalContex from "../../context/globalcontext"
import ReactExport from 'react-data-export';
import ExportExcel from "./ExportExcel"


const ReportForm = () => {

  const [, , contextMiddleware] = useContext(GlobalContex);
  const token = contextMiddleware.getToken()
  const [excelData, setExcelData] = useState([])
  let location = useLocation;
  let model = location().state.model;
  let customer = location().state.customer;
  let process = location().state.process;

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


  const exportExelHandler = () => {
    getTableData(customer, model, process, '2020-11-10', token)
      .then((Response) => {
        setExcelData(Response)


      })
      .catch((error) => { console.log(error) })
  }
  console.log(excelData)
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
              <ExportExcel customer={customer} model={model} process={process} token={token}/>
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
            to="../report/menu"
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
