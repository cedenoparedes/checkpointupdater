import React, { useState } from 'react'
import './ProcessMenuForm.css'
import CustomerIcon from '../../Images/SVG/icons/custumer.svg'
import ModelIcon from '../../Images/SVG/icons/model.svg'
import ProcessIcon from '../../Images/SVG/icons/process.svg'
import BackIcon from '../../Images/SVG/icons/back.svg'
import RefreshIcon from '../../Images/SVG/icons/refresh.svg'
import CustomerPopUp from "../Common/CustomerPopUp";
import ModelPopUP from "../Common/ModelPopUp"
import ProcessPopUp from "../Common/ProcessPopUp"
import { Link } from "react-router-dom";


const CheckPointProcessMenu = () => {
    const [visible, setVisible] = useState({
        contentVisibility: "",
        customerPopVisibility: "d-none",
        modelPopVisibility: "d-none",
        processPopVisibility: "d-none"
    });

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
                <div className="row pl-3">
                    <div className="col-6 m-0">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="./menu.html">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Checkpoint</li>
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
                <div className={`${visible.contentVisibility} container-fluid `}>
                    <form className="form-container">

                        <div className="form-group">
                            <div className="form-row">
                                <div className="col-md-6 d-flex justify-content-center">
                                    <div type="button" className="btn-menu" id="btn-client" onClick={() => showPopUp('Customer')}>
                                        <img className="icon-options" src={CustomerIcon} alt="" />
                                        <p className="label-btn">Customer</p>
                                    </div>
                                </div>
                                <div className="col-md-6 d-flex justify-content-center align-self-center">
                                    <input type="text" className="form-control input-text form-control-lg " id="tb-customer" disabled />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-row">
                                <div className="col-md-6 d-flex justify-content-center">
                                    <div type="button" className="btn-menu" id="btn-model" onClick={() => showPopUp('Model')}>
                                        <img className="icon-options" src={ModelIcon} alt="" />
                                        <p className="label-btn">Model</p>
                                    </div>
                                </div>
                                <div className="col-md-6 d-flex justify-content-center align-self-center">
                                    <input type="text" className="form-control input-text form-control-lg" id="tb-model" disabled />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-row">
                                <div className="col-md-6 d-flex justify-content-center">
                                    <div type="button" className="btn-menu" id="btn-process" onClick={() => showPopUp('Process')} >
                                        <img className="icon-options" src={ProcessIcon} alt="" />
                                        <p className="label-btn">Process</p>
                                    </div>
                                </div>
                                <div className="col-md-6 d-flex justify-content-center align-self-center">
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
                            <Link to='/CheckPointProcessMenu' style={{ color: 'inherit', textDecoration: 'inherit'}}>
                                <div className="back-refresh-btn justify-content-center">
                                    <img src={RefreshIcon} alt="" />
                                    <p className="btn-lbl">Refresh</p>
                                </div>
                            </Link>
                        </div>
                        <div className="col-4  d-flex justify-content-start">
                            <Link to='../Process' style={{ color: 'inherit', textDecoration: 'inherit'}}>
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

    )
}

export default CheckPointProcessMenu;