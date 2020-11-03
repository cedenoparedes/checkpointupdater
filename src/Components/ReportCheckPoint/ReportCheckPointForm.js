import React, { useState } from "react";
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
// import DateTime from "../DateTime";
import { Link } from "react-router-dom";

const ReportCheckPointForm = () => {

  const [visible, setVisible] = useState({
    contentVisibility: "",
    customerPopVisibility: "d-none",
    modelPopVisibility: "d-none",
    processPopVisibility: "d-none"
  });

  const doVisible = () => {
    setVisible({
      contentVisibility: "d-none",
      customerPopVisibility: "",
      modelPopVisibility: "d-none",
      processPopVisibility: "d-none"
    });
  }

  const showPopUp = (button) => {

    switch (button) {
      case 'Customer':
        setVisible({
          contentVisibility: "d-none",
          customerPopVisibility: "",
          modelPopVisibility: "d-none",
          processPopVisibility: "d-none"
        });
        break;
      case 'Model':
        setVisible({
          contentVisibility: "d-none",
          customerPopVisibility: "d-none",
          modelPopVisibility: "",
          processPopVisibility: "d-none"
        });
        break;
      case 'Process':
        setVisible({
          contentVisibility: "d-none",
          customerPopVisibility: "d-none",
          modelPopVisibility: "d-none",
          processPopVisibility: ""
        });
        break;
      default:
        break;
    }

  };

  return (
    <div className="h-90">
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 pl-3">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="./menu.html">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Report</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <div className="contenedor">
        {/* Modal Customer */}
        <CustomerPopUp visible={visible} setVisible={setVisible} />
        {/* modal Model*/}
        <ModelPopUP visible={visible} setVisible={setVisible} />
        {/* modal  Process*/}
        <ProcessPopUp visible={visible} setVisible={setVisible} />

        <div className={`${visible.contentVisibility} container-fluid `} >
          <form className="form-container">
            <div className="form-group">
              <div className="form-row">
                <div className="input-group" id="datetimepicker">
                  <div className="col-6 d-flex justify-content-center p-0">
                    <div type="button" className="btn-menu form-control" id="btn-date" value="display">
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
                  <div type="button" onClick={() => showPopUp('Customer')} className="btn-menu " id="btn-client" value="Client">
                    <img className="icon-options" src={CustumerIcon} alt="" />
                    <p className="label-btn">Customer</p>
                  </div>
                </div>
                <div className="col-6 d-flex justify-content-center  input-size">
                  <input type="text" className="form-control input-text form-control-lg " id="tb-customer" disabled />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="form-row">
                <div className="col-6 d-flex justify-content-center">
                  <div type="button" onClick={() => showPopUp('Model')} className="btn-menu" id="btn-model" value="Model">
                    <img className="icon-options" src={ModelIcon} alt="" />
                    <p className="label-btn">Model</p>
                  </div>
                </div>
                <div className="col-6 d-flex justify-content-center  input-size">
                  <input type="text" className="form-control input-text form-control-lg" id="tb-model" disabled />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="form-row">
                <div className="col-6 d-flex justify-content-center">
                  <div type="button" onClick={() => showPopUp('Process')} className="btn-menu" id="btn-process" value="Process">
                    <img className="icon-options" src={ProcessIcon} alt="" />
                    <p className="label-btn">Process</p>
                  </div>
                </div>
                <div className="col-6 d-flex justify-content-center  input-size">
                  <input type="text" className="form-control input-text form-control-lg" id="tb-process" disabled />
                </div>
              </div>
            </div>
          </form>
          {/* Back and Refresh Buttons */}
          <div className="back-refresh-container d-flex justify-content-center">
            <div className="col-4 d-flex justify-content-end">
              <Link to='../Menu' style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <div className="back-refresh-btn justify-content-center">
                  <img src={BackIcon} alt="" />
                  <p className="btn-lbl">Back</p>
                </div>
              </Link>
            </div>
            <div className="col-4 d-flex justify-content-center">
              <Link to='../ReportCheckPoint' style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <div className="back-refresh-btn justify-content-center">
                  <img src={RefreshIcon} alt="" />
                  <p className="btn-lbl">Refresh</p>
                </div>
              </Link>
            </div>
            <div className="col-4 d-flex justify-content-start">
              <Link to='../Report' style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <div className="back-refresh-btn justify-content-center">
                  <img className="btn-next-rotate" src={BackIcon} alt="" />
                  <p className="btn-lbl">Next</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default ReportCheckPointForm;
