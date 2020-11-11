import React, { useEffect, useState, useContext } from "react";
import PdfIcon from "../../Images/SVG/icons/pdf.svg";
import PieChart from "../PieChart";
import BarChart from "../BarChart";
import Chart from "chart.js";
import BackIcon from "../../Images/SVG/icons/back.svg";
import RefreshIcon from "../../Images/SVG/icons/refresh.svg";
import { getTableData, getPieCharData } from "../../api/report-api"
import { Link, useLocation } from "react-router-dom";
import { jsPdfGenerator } from './ExportPdf';
import GlobalContex from "../../context/globalcontext"
import ReactExport from 'react-data-export';
import ExportExcel from "./ExportExcel";
import Loading from '../Common/Loading';


const ReportForm = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [, , contextMiddleware] = useContext(GlobalContex);
  const token = contextMiddleware.getToken()
  const [excelData, setExcelData] = useState([])
  const [chartsData, setChartsData] = useState({})
  let location = useLocation;
  let model = location().state.model;
  let customer = location().state.customer;
  let process = location().state.process;
  let date = location().state.startDate



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

    getDataCharts()


  }, []);

  const getDataCharts = () => {

    getPieCharData(customer, model, process, date, token)
      .then((Response) => {
        setChartsData(Response)
      })
      .catch((error) => { console.log(error) })

  }
  const exportToPDF = () => {
    setIsLoading(true);
    jsPdfGenerator();
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }
  const exportExelHandler = () => {
    getTableData(customer, model, process, date)
      .then((Response) => {
        setExcelData(Response)


      })
      .catch((error) => { console.log(error) })
  }
  return (
    <div className="container-main" id="chart">
      {/* <meta charSet="utf-8" /> */}
      <div className="row">
        <div className="col-12 d-flex  justify-content-center btn-export">
          <fieldset>
            <legend>Export to:</legend>
            <div className="d-flex justify-content-start">
              <img
                type="button"
                onClick={exportToPDF}
                className="exporticon"
                src={PdfIcon}
                alt=""
              />
              <ExportExcel customer={customer} model={model} process={process} token={token} />
            </div>
          </fieldset>
        </div>
      </div>
      {isLoading === true ? <Loading /> : null}
      <div className="container container-format1" id="report-container">
        <div className="row text-center">
          <div className="col-4">
            <h3 className="title1">Customer</h3>
            <a href="#" className="btn option1" id="CustomerBtn">
              {chartsData.CustomerCode}
            </a>
          </div>
          <div className="col-4">
            <h3 className="title1">Process</h3>
            <a href="#" className="btn option1" id="ProcessBtn">
              {chartsData.ProcessName}
            </a>
          </div>
          <div className="col-4">
            <h3 className="title1">Model</h3>
            <a href="#" className="btn option1" id="ModelBtn">
              {chartsData.ModelName}
            </a>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-3 d-flex justify-content-end">
            <div className="box-yield__fail1 align-self-center ">
              <div className="box-yield__fail1">
                <p className="box-text1 ">Pass: <span id="pass" />{chartsData.TotalPassPct + "%"}</p>
                <p className="box-text1 ">Fails: <span id="fails" />{chartsData.TotalFailsPct + "%"}</p>
              </div>
            </div>
          </div>
          <div className="col-6 ">
            <div id="chart1 ">{<PieChart
              totalPass={chartsData.TotalQtyPass}
              TotalFail={chartsData.TotalQtyFail} />}</div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <div className="chart1"> {<BarChart
              totalFailures={chartsData.TotalFailures}
              failuresByGroup={chartsData.FailuresByGroup}
              FailuresByGroupPer={chartsData.FailuresByGroupPer}
            />}</div>
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
