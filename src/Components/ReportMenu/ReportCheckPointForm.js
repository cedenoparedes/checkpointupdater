import React, { useState, useContext, useEffect } from "react";
import "../Common/breadcrumb.css";
import images from '../Common/Images/index'
import CustomerPopUp from "../Common/CustomerPopUp";
import ModelPopUP from "../Common/ModelPopUp"
import ProcessPopUp from "../Common/ProcessPopUp"
import GlobalContext from "../../context/globalcontext"
import { getCustomers, getModels, getProcesses } from '../../api/menu-api'
import { Link } from "react-router-dom";
import toastr from "toastr";
import Loading from '../Common/Loading'
import DatePicker from 'react-datepicker'


const ReportCheckPointForm = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [contextState, , contextMiddleware] = useContext(GlobalContext);
  const [customers, setCustomers] = useState([])
  const [models, setModels] = useState([])
  const [processes, setProcesses] = useState([])
  const [menuVisible, setMenuVisible] = useState(true);
  const [customerVisible, setCustomerVisible] = useState(false);
  const [modelVisible, setModelVisible] = useState(false);
  const [processVisible, setProcessVisible] = useState(false);
  const [model, setModel] = useState("")
  const [customer, setCustomer] = useState("")
  const [process, setProcess] = useState("")
  const [params, setParams] = useState({})
  const [startDate, setStartDate] = useState(new Date());
  const [dateToSend, setDateToSend] = useState("")
  let token = contextMiddleware.getToken();


  //Language
  const [homeLabel, setHomeLabel] = useState("Home")
  const [ReportLabel, setReportLabel] = useState("Report")
  const [DateButton, setDateButton] = useState("Date")
  const [customerButton, setCustomerButton] = useState("Select Customer")
  const [modelButton, setModelButton] = useState("Model")
  const [processButton, setProcessButton] = useState("Prcess")
  const [back, setback] = useState("Back")
  const [refresh, setRefresh] = useState("Refresh")
  const [next, setNext] = useState("Next")



  let messageLabel = contextState.languageLabel
  useEffect(() => {

    const setMessageLabel = (messages, messageCode, stateToSet) => {
      if (messages === [] || messages === undefined) {
        console.log("estoy en bre")
      } else {
        const found = messages.find(element => element.messageCode === messageCode)
        if (found === undefined) {
          return
        } else {
          stateToSet(found.message)
        }
      }

    }

    setMessageLabel(messageLabel, "CHK02", setHomeLabel)
    setMessageLabel(messageLabel, "CHK33", setReportLabel)
    setMessageLabel(messageLabel, "CHK23", setDateButton)
    setMessageLabel(messageLabel, "CHK19", setCustomerButton)
    setMessageLabel(messageLabel, "CHK20", setModelButton)
    setMessageLabel(messageLabel, "CHK08", setProcessButton)
    setMessageLabel(messageLabel, "CHK24", setback)
    setMessageLabel(messageLabel, "CHK22", setRefresh)
    setMessageLabel(messageLabel, "CHK25", setNext)

  }, [messageLabel])



  useEffect(() => {
    setParams({
      model: model,
      process: process,
      customer: customer,
      startDate: dateToSend
    })
  }, [models, processes, customers, process, customer, model, dateToSend])

  useEffect(() => {
    getDateToSends();
  }, [startDate])

  const getDateToSends = () => {
    let dateSend = document.getElementById("tb-date")
    setDateToSend(dateSend.value)
  }

  const getDateToSend = (date) => {
    setStartDate(date)
    let dateSend = document.getElementById("tb-date")
    setDateToSend(dateSend.value)
  }

  const dateTimePicker = () => {
    let click = document.getElementById("tb-date");
    click.click()
    click.focus()

  }

  const hidePopUps = () => {
    setMenuVisible(true);
    setCustomerVisible(false);
    setModelVisible(false);
    setProcessVisible(false);
  }


  const getCustomerParams = (token) => {
    setMenuVisible(false);
    setIsLoading(true);
    getCustomers(token)
      .then((json) => {
        setCustomers(json);
        setIsLoading(false);
        setCustomerVisible(true);
      }).catch((error) => {
        console.log(error);

        setTimeout(() => {
          hidePopUps();
          setIsLoading(false);
          toastr.error("Error While Retrieving Data");
        }
          , 1000);

      })

  }
  const getModelParams = (token) => {
    setMenuVisible(false);
    setIsLoading(true);
    getModels(token)
      .then((json) => {
        setModels(json);
        setIsLoading(false);
        setModelVisible(true);
      }).catch((error) => {
        console.log(error);
        setTimeout(() => {
          hidePopUps();
          setIsLoading(false);
          toastr.error("Error While Retrieving Data");
        }
          , 1000);

      })

  }

  const getProcessParams = (token) => {
    setMenuVisible(false);
    setIsLoading(true);
    getProcesses(token)
      .then((json) => {
        setProcesses(json)
        setIsLoading(false);
        setProcessVisible(true);
      }).catch((error) => {
        console.log(error);
        setTimeout(() => {
          hidePopUps();
          setIsLoading(false);
          toastr.error("Error While Retrieving Data");
        }, 1000);
      })

  }




  toastr.options = {
    "positionClass": "toast-top-center",
    "showMethod": "slideDown",
    "hideMethod": "slideUp",
    "timeOut": "3000"
  }

  const fieldValidation = () => {
    if (model === "" || process === "" || customer === "") {
      toastr.error("Please fill all the fields")
    }
  }
  const refreshPage = () => {
    window.location.reload()
  }

  return (
    <div className="h-90">
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 pl-3">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="./menu">{homeLabel}</a></li>
                <li className="breadcrumb-item active" aria-current="page">{ReportLabel}</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <div className="contenedor">
        {isLoading === true ? <Loading /> : null}
        {customerVisible === true ? <CustomerPopUp setCustomer={setCustomer} customers={customers} hidePopUps={hidePopUps} /> : null}
        {modelVisible === true ? <ModelPopUP setModel={setModel} models={models} hidePopUps={hidePopUps} /> : null}
        {processVisible === true ? <ProcessPopUp setProcess={setProcess} processes={processes} hidePopUps={hidePopUps} /> : null}
        {menuVisible === true ?
          <div className="container-fluid" id="my-form">
            <form className="form-container">
              <div className="form-group">
                <div className="form-row">
                  <div className="input-group" id="datetimepicker">
                    <div className="col-6 d-flex justify-content-center p-0">
                      <div className="btn-menu form-control hoverbuttons" id="btn-date" onClick={dateTimePicker}>
                        <img className="icon-options" src={images.dateTimeIcon} alt="" />
                        <p className="label-btn">{DateButton}</p>
                      </div>
                    </div>
                    <div className="col-6 d-flex justify-content-center input-size p-0 ">
                      <DatePicker className="form-control  form-control-lg font-weight-bold"
                        id="tb-date" dateFormat="yyyy-MM-dd"
                        selected={startDate}
                        onChange={(date) => getDateToSend(date)}
                        minDate={new Date("2020-11-1")}
                        maxDate={new Date()}
                        showYearDropdown
                        scrollableMonthYearDropdown
                        withPortal />
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="form-row">
                  <div className="col-6 d-flex justify-content-center">
                    <div className="btn-menu hoverbuttons" id="btn-client" onClick={() => getCustomerParams(token)}>
                      <img className="icon-options" src={images.customerIcon} alt="" />
                      <p className="label-btn">{customerButton}</p>
                    </div>
                  </div>
                  <div className="col-6 d-flex justify-content-center  input-size">
                    <input type="text" className="form-control input-text form-control-lg" id="tb-customer" value={customer} disabled />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="form-row">
                  <div className="col-6 d-flex justify-content-center">
                    <div className="btn-menu hoverbuttons" id="btn-model" onClick={() => getModelParams(token)}>
                      <img className="icon-options" src={images.modelIcon} alt="" />
                      <p className="label-btn">{modelButton}</p>
                    </div>
                  </div>
                  <div className="col-6 d-flex justify-content-center  input-size">
                    <input type="text" className="form-control input-text form-control-lg" id="tb-model" value={model} disabled />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="form-row">
                  <div className="col-6 d-flex justify-content-center">
                    <div className="btn-menu hoverbuttons" id="btn-process" onClick={() => getProcessParams(token)} >
                      <img className="icon-options" src={images.processIcon} alt="" />
                      <p className="label-btn">{processButton}</p>
                    </div>
                  </div>
                  <div className="col-6 d-flex justify-content-center  input-size">
                    <input type="text" className="form-control input-text form-control-lg" id="tb-process" value={process} disabled />
                  </div>
                </div>
              </div>
            </form>
            {/* Back and Refresh Buttons */}
            <div className="back-refresh-container d-flex justify-content-center">
              <div className="col-4 d-flex justify-content-end">
                <Link to='../Menu' style={{ color: 'inherit', textDecoration: 'inherit' }}>
                  <div className="back-refresh-btn justify-content-center">
                    <img src={images.backIcon} alt="" />
                    <p className="btn-lbl">{back}</p>
                  </div>
                </Link>
              </div>
              <div className="col-4 d-flex justify-content-center">
                <Link to='/report/menu' style={{ color: 'inherit', textDecoration: 'inherit' }}>
                  <div className="back-refresh-btn justify-content-center" onClick={() => refreshPage()}>
                    <img src={images.refreshIcon} alt="" />
                    <p className="btn-lbl">{refresh}</p>
                  </div>
                </Link>
              </div>
              <div className="col-4 d-flex justify-content-start">
                <Link to={!(model === "") && !(process === "") && !(customer === "") && !(dateToSend === "") ? {
                  pathname: '../reportDark',
                  state: params
                } : {}} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                  <div className="back-refresh-btn justify-content-center" onClick={fieldValidation} >
                    <img className="btn-next-rotate" src={images.backIcon} alt="" />
                    <p className="btn-lbl">{next}</p>
                  </div>
                </Link>
              </div>
            </div>
          </div> : null
        }
      </div>
    </div>

  );
};

export default ReportCheckPointForm;
