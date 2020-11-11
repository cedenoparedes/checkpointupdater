import React, { useState, useContext, useEffect } from "react";
import "../Common/breadcrumb.css";
import CustumerIcon from "../../Images/SVG/icons/custumer.svg";
import DateIcon from "../../Images/SVG/icons/datetime.svg";
import ModelIcon from "../../Images/SVG/icons/model.svg";
import ProcessIcon from "../../Images/SVG/icons/process.svg";
import BackIcon from "../../Images/SVG/icons/back.svg";
import RefreshIcon from "../../Images/SVG/icons/refresh.svg";
import CustomerPopUp from "../Common/CustomerPopUp";
import ModelPopUP from "../Common/ModelPopUp"
import ProcessPopUp from "../Common/ProcessPopUp"
import GlobalContext from "../../context/globalcontext"
import { getCustomers, getModels, getProcesses } from '../../api/menu-api'
import { Link } from "react-router-dom";
import toastr from "toastr";
import Loading from '../Common/Loading'
import $ from 'jquery';
import { now } from "moment";


const ReportCheckPointForm = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [, , contextMiddleware] = useContext(GlobalContext);
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


  useEffect(() => {
    setParams({
      model: model,
      process: process,
      customer: customer
    })
  }, [models, process, customer])

  const [currentDate, setCurrentDate] = useState();
  const changedDate = () => {
    setCurrentDate(() => {
      $(function () {
        $("#tb-date").datepicker({ dateFormat: 'DD-MM-YYYY H:mmTT', autoclose: true }

        ).datepicker("setDate", new Date());
        console.log("pase por aqui")
      });
    })


  };
  useEffect(() => {
    if (currentDate === "" || currentDate !== null) {
      changedDate();
      console.log('entre')
    }
  }, [])

  $(function () {
    $("#tb-date").datepicker({ dateFormat: 'DD-MM-YYYY H:mmTT', autoclose: true, value: "xs" }

    ).datepicker("setDate", `${currentDate}`);
  });

  const dateTimePicker = () => {
    let click = document.getElementById("tb-date");

    click.click()
    click.focus()
    console.log(click.value);
    setCurrentDate(click.value)
    console.log(click.value);
  }

  const hidePopUps = () => {
    setMenuVisible(true);
    setCustomerVisible(false);
    setModelVisible(false);
    setProcessVisible(false);
  }

  let token = contextMiddleware.getTokenClaims();

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

  return (
    <div className="h-90">
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 pl-3">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="./menu">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Report</li>
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
          <div className="container-fluid">
            <form className="form-container">
              <div className="form-group">
                <div className="form-row">
                  <div className="input-group" id="datetimepicker">
                    <div className="col-6 d-flex justify-content-center p-0">
                      <div type="button" className="btn-menu form-control" id="btn-date" onClick={dateTimePicker}>
                        <img className="icon-options" src={DateIcon} alt="" />
                        <p className="label-btn">Date</p>
                      </div>
                    </div>
                    <div className="col-6 d-flex justify-content-center input-size p-0 ">
                      <input type="text" className="form-control  form-control-lg" id="tb-date" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="form-row">
                  <div className="col-6 d-flex justify-content-center">
                    <div type="button" className="btn-menu" id="btn-client" onClick={() => getCustomerParams(token)}>
                      <img className="icon-options" src={CustumerIcon} alt="" />
                      <p className="label-btn">Customer</p>
                    </div>
                  </div>
                  <div className="col-6 d-flex justify-content-center  input-size">
                    <input type="text" className="form-control input-text form-control-lg " id="tb-customer" value={customer} disabled />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="form-row">
                  <div className="col-6 d-flex justify-content-center">
                    <div type="button" className="btn-menu" id="btn-model" onClick={() => getModelParams(token)}>
                      <img className="icon-options" src={ModelIcon} alt="" />
                      <p className="label-btn">Model</p>
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
                    <div type="button" className="btn-menu" id="btn-process" onClick={() => getProcessParams(token)} >
                      <img className="icon-options" src={ProcessIcon} alt="" />
                      <p className="label-btn">Process</p>
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
                    <img src={BackIcon} alt="" />
                    <p className="btn-lbl">Back</p>
                  </div>
                </Link>
              </div>
              <div className="col-4 d-flex justify-content-center">
                <Link to='../ReportCheckPoint' style={{ color: 'inherit', textDecoration: 'inherit' }}>
                  <div className="back-refresh-btn justify-content-center">
                    <img src={RefreshIcon} alt="" />
                    <p className="btn-lbl">Refresh</p>
                  </div>
                </Link>
              </div>
              <div className="col-4 d-flex justify-content-start">
                <Link to={model === "" || process === "" || customer === "" ? {} : {
                  pathname: '../reportDark',
                  state: params
                }} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                  <div className="back-refresh-btn justify-content-center" onClick={fieldValidation} >
                    <img className="btn-next-rotate" src={BackIcon} alt="" />
                    <p className="btn-lbl">Next</p>
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
