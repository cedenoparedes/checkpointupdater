import React, { useEffect, useState, useContext } from "react";
import { useHistory } from 'react-router-dom';
import PdfIcon from "../../Images/SVG/icons/pdf.svg";
import PieChart from "../PieChart";
import BarChart from "../BarChart";
import Chart from "chart.js";
import BackIcon from "../../Images/SVG/icons/back.svg";
import RefreshIcon from "../../Images/SVG/icons/refresh.svg";
import { getPieCharData } from "../../api/report-api"
import { Link, useLocation } from "react-router-dom";
import { jsPdfGenerator } from './ExportPdf';
import GlobalContex from "../../context/globalcontext"
import ExportExcel from "./ExportExcel";
import Loading from '../Common/Loading';
import toastr from 'toastr';


const ReportForm = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const [contextState, , contextMiddleware] = useContext(GlobalContex);
  const token = contextMiddleware.getToken()
  const [chartsData, setChartsData] = useState({})
  let location = useLocation;
  let model = location().state.model;
  let customer = location().state.customer;
  let process = location().state.process;
  let date = location().state.startDate

  toastr.options = {
    "positionClass": "toast-top-center",
    "showMethod": "slideDown",
    "hideMethod": "slideUp",
    "timeOut": "3000"
  }


  //Language
  const [processLabel, setProcessLabel] = useState("")
  const [customerLabel, setCustomerLabel] = useState("")
  const [modelLabel, setModelLabel] = useState("")
  const [refreshLabel, setRefresh] = useState("")
  const [exportTo, setExportto] = useState("")
  const [passLabel, setPassLabel] = useState("")
  const [failLabel, setFailLabel] = useState("")
  const [backLabel, setBackLabel] = useState("")


  let messageLabel = contextState.languageLabel
  useEffect(() => {

    const setMessageLabel = (messages, messageCode) => {
      if (messages === [] || messages === undefined) {
        console.log("estoy en bre")
      } else {
        const found = messages.find(element => element.messageCode === messageCode)
        if (found === undefined) {
          return
        } else {
          return found.message
        }
      }

    }

    setProcessLabel(setMessageLabel(messageLabel, "CHK08"))
    setCustomerLabel(setMessageLabel(messageLabel, "CHK28"))
    setModelLabel(setMessageLabel(messageLabel, "CHK20"))
    setRefresh(setMessageLabel(messageLabel, "CHK22"))
    setExportto(setMessageLabel(messageLabel, "CHK29"))
    setPassLabel(setMessageLabel(messageLabel, "CHK29"))
    setFailLabel(setMessageLabel(messageLabel, "CHK10"))
    setBackLabel(setMessageLabel(messageLabel, "CHK24"))

  }, [messageLabel])

  useEffect(() => {
    Chart.plugins.register({
      beforeDraw: function (chartInstance) {
        let ctx = chartInstance.chart.ctx;
        // ctx.fillStyle = "#2f2f2f";
        ctx.fillRect(
          0,
          0,
          chartInstance.chart.width,
          chartInstance.chart.height
        );
      },
    });

    getDataCharts()


  }, [customer, process, model, date]);

  const getDataCharts = () => {
    console.log(token)
    getPieCharData(customer, model, process, date, token)
      .then((Response) => {
        if (Response.TotalQtyFail === 0 && Response.TotalQtyPass === 0) {
          history.push("/report/menu");
          toastr.error("There is no data for the info provided");

          setTimeout(() => {
            setIsLoading(false);
          }, 1000);
        }
        else {
          setChartsData(Response)
          setTimeout(() => {
            setIsLoading(false)
          }, 1000);
        }

      })
      .catch((error) => {
        history.push("/report/menu");

        console.log(error)
        const Error = error.message;
        if (Error === 'Failed to fetch') {
          errorResponse('Network Error')
        }
        else if (Error === '401: unauthorized') {
          errorResponse('User not Found or Unauthorized')
        }
        else if (Error === '402: unauthorized') {
          errorResponse('Error 402: Unauthorized')
        }
        else if (Error === '404: not found') {
          errorResponse('Error 404: Not Found')
        }
      })

  }
  const errorResponse = message => {
    toastr.error(message);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }
  const exportToPDF = () => {
    setIsLoading(true);
    jsPdfGenerator();
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (

    <div className="container-main" id="chart">
      {isLoading === true ? <Loading /> : null}
      {/* <meta charSet="utf-8" /> */}
      {isLoading === true ? null :
        <>
          <div className="row">
            <div className="col-12 d-flex  justify-content-center btn-export">
              <fieldset>
                <legend>{exportTo}</legend>
                <div className="d-flex justify-content-start">
                  <img
                    onClick={exportToPDF}
                    className="exporticon hoverbuttons"
                    src={PdfIcon}
                    alt=""
                  />
                  <ExportExcel customer={customer} model={model} process={process} date={date} token={token} />
                </div>
              </fieldset>
            </div>
          </div>

          <div className="container container-format1" id="report-container">
            <div className="row text-center">
              <div className="col-4">
                <h3 className="title1">{customerLabel}</h3>
                <span className="option1" id="CustomerBtn">
                  {chartsData.customerCode}
                </span>
              </div>
              <div className="col-4">
                <h3 className="title1">{processLabel}</h3>
                <span className="option1" id="ProcessBtn">
                  {chartsData.processName}
                </span>
              </div>
              <div className="col-4">
                <h3 className="title1">{modelLabel}</h3>
                <span className="option1" id="ModelBtn">
                  {chartsData.modelName}
                </span>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-3 d-flex justify-content-end">
                <div className="box-yield__fail1 align-self-center ">
                  <div className="box-yield__fail1">
                    <p className="box-text1 ">{passLabel + ' :'} <span id="pass" />{chartsData.totalPassPct + "%"}</p>
                    <p className="box-text1 ">{failLabel + ' :'} <span id="fails" />{chartsData.totalFailsPct + "%"}</p>
                  </div>
                </div>
              </div>
              <div className="col-6 ">
                <div id="chart1 ">{<PieChart
                  TotalPass={chartsData.totalQtyPass}
                  TotalFail={chartsData.totalQtyFail} />}</div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-12">
                <div className="chart1"> {<BarChart
                  totalFailures={chartsData.totalFailures}
                  failuresByGroup={chartsData.failuresByGroup}
                  FailuresByGroupPer={chartsData.failuresByGroupPer}
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
                  <p className="btn-lbl">{backLabel}</p>
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
                  <p className="btn-lbl">{refreshLabel}</p>
                </div>
              </Link>
            </div>
          </div>
        </>
      }
    </div>
  );
};

export default ReportForm;
