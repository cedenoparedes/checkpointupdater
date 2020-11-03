import React from "react";
import "../Common/breadcrumb.css";
import CustumerIcon from "../../Images/SVG/icons/custumer.svg";
import DateIcon from "../../Images/SVG/icons/datetime.svg";
import ModelIcon from "../../Images/SVG/icons/model.svg";
import ProcessIcon from "../../Images/SVG/icons/process.svg";
import BackIcon from "../../Images/SVG/icons/back.svg";
import RefreshIcon from "../../Images/SVG/icons/refresh.svg";
// import DateTime from "../DateTime";

const ReportCheckPointForm = () => {
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
      <div className="backdrop d-none" id="backdrop">
        {/* modal Client */}
        <div className="modal d-none" id="modal-client">
          <h1 className="modal-title">Select Customer</h1>
          <div className="d-flex justify-content-center">
            <div>
              <button className="format-btn modal-btn btn-client" id>
                <img className="format-img-costumer" src="{CustumerIcon}" alt="" />
              </button>
              <p className="modal-client format-txt-icon">615</p>
            </div>
            <div>
              <button className="format-btn modal-btn btn-client">
                <img className="format-img-costumer" src="../../Images/SVG/icons/custumer.svg" alt="" />
              </button>
              <p className="modal-client format-txt-icon">787</p>
            </div>
            <div>
              <button className="format-btn modal-btn btn-client">
                <img className="format-img-costumer" src="../../Images/SVG/icons/custumer.svg" alt="" />
              </button>
              <p className="modal-client format-txt-icon">506</p>
            </div>
          </div>
        </div>
        {/* modal Model*/}
        <div className="modal d-none" id="modal-model">
          <h1 className="modal-title">Select A Model</h1>
          <div className="modal-model__container" id="option-window">
            <div className="back-arrow">
              <img src="../../Images/back-arrow.svg" id="slideLeft" alt="" />
            </div>
            <div>
              <button className="modal-btn btn-model">
                <img className="format-img-model" src="../../Images/SVG/icons/model.svg" alt="" />
              </button>
              <p className="modal-client format-txt-icon">IP7</p>
            </div>
            <div>
              <button className="modal-btn btn-model">
                <img className="format-img-model" src="../../Images/SVG/icons/model.svg" alt="" />
              </button>
              <p className="modal-client format-txt-icon">IP7P</p>
            </div>
            <div>
              <button className="modal-btn btn-model">
                <img className="format-img-model" src="../../Images/SVG/icons/model.svg" alt="" />
              </button>
              <p className="modal-client format-txt-icon">IP8</p>
            </div>
            <div>
              <button className="modal-btn btn-model">
                <img className="format-img-model" src="../../Images/SVG/icons/model.svg" alt="" />
              </button>
              <p className="modal-client format-txt-icon">IP8P</p>
            </div>
            <div>
              <button className="modal-btn btn-model">
                <img className="format-img-model" src="../../Images/SVG/icons/model.svg" alt="" />
              </button>
              <p className="modal-client format-txt-icon">IPX</p>
            </div>
            <div>
              <button className="modal-btn btn-model">
                <img className="format-img-model" src="../../Images/SVG/icons/model.svg" alt="" />
              </button>
              <p className="modal-client format-txt-icon">IPXR</p>
            </div>
            <div>
              <button className="modal-btn btn-model">
                <img className="format-img-model" src="../../Images/SVG/icons/model.svg" alt="" />
              </button>
              <p className="modal-client format-txt-icon">IPXS</p>
            </div>
            <div>
              <button className="modal-btn btn-model">
                <img className="format-img-model" src="../../Images/SVG/icons/model.svg" alt="" />
              </button>
              <p className="modal-client format-txt-icon">IPXSM</p>
            </div>
            <div>
              <button className="modal-btn btn-model">
                <img className="format-img-model" src="../../Images/SVG/icons/model.svg" alt="" />
              </button>
              <p className="modal-client format-txt-icon">IP11</p>
            </div>
            <div>
              <button className="modal-btn btn-model">
                <img className="format-img-model" src="../../Images/SVG/icons/model.svg" alt="" />
              </button>
              <p className="modal-client format-txt-icon">IP11P</p>
            </div>
            <div>
              <button className="modal-btn btn-model">
                <img className="format-img-model" src="../../Images/SVG/icons/model.svg" alt="" />
              </button>
              <p className="modal-client format-txt-icon">IP11PM</p>
            </div>
          </div>
          <div className="foward-arrow">
            <img src="../../Images/foward-arrow.svg" id="slideRight" alt="" />
          </div>
        </div>
        {/* modal  Process*/}
        <div className="modal d-none" id="modal-process">
          <h1 className="modal-title">Select Process</h1>
          <div className="d-flex justify-content-center">
            <div>
              <button className="modal-btn btn-process format-btn">
                <img className="format-img-process" src="../../Images/SVG/icons/process.svg" alt="" />
              </button>
              <p className="modal-client format-txt-icon">Assemble</p>
            </div>
            <div>
              <button className="modal-btn btn-process format-btn">
                <img className="format-img-process" src="../../Images/SVG/icons/process.svg" alt="" />
              </button>
              <p className="modal-client format-txt-icon">Disassembly</p>
            </div>
          </div>
        </div>
      </div>
      <div className="contenedor">
        <div className="container-fluid">
          <form action className="form-container">
            <div className="form-group">
              <div className="form-row">
                <div className="input-group" id="datetimepicker">
                  <div className="col-6 d-flex justify-content-center p-0">
                    <div type="button" className="btn-menu form-control" onclick="myFunction();" id="btn-date" value="display">
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
                  <div type="button" className="btn-menu " id="btn-client" value="Client">
                    <img className="icon-options" src={CustumerIcon} alt="" />
                    <p className="label-btn">Custumer</p>
                  </div>
                </div>
                <div className="col-6 d-flex justify-content-center  input-size">
                  <input type="text" className="form-control input-text form-control-lg " id="tb-client" disabled />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="form-row">
                <div className="col-6 d-flex justify-content-center">
                  <div type="button" className="btn-menu" id="btn-model" value="Model">
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
                  <div type="button" className="btn-menu" id="btn-process" value="Process">
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
              <div className="back-refresh-btn justify-content-center">
                <img src={BackIcon} alt="" />
                <p className="btn-lbl">Back</p>
              </div>
            </div>
            <div className="col-4 d-flex justify-content-center">
              <div className="back-refresh-btn justify-content-center">
                <img src={RefreshIcon} alt="" />
                <p className="btn-lbl">Refresh</p>
              </div>
            </div>
            <div className="col-4 d-flex justify-content-start">
              <div className="back-refresh-btn justify-content-center">
                <img className="btn-next-rotate" src={BackIcon} alt="" />
                <p className="btn-lbl">Next</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default ReportCheckPointForm;
