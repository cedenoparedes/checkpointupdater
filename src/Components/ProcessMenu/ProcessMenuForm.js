import React, { useState, useContext } from 'react'
import './ProcessMenuForm.css'
import CustomerIcon from '../../Images/SVG/icons/custumer.svg'
import ModelIcon from '../../Images/SVG/icons/model.svg'
import ProcessIcon from '../../Images/SVG/icons/process.svg'
import BackIcon from '../../Images/SVG/icons/back.svg'
import RefreshIcon from '../../Images/SVG/icons/refresh.svg'
import CustomerPopUp from "../Common/CustomerPopUp";
import ModelPopUP from "../Common/ModelPopUp"
import ProcessPopUp from "../Common/ProcessPopUp"
import GlobalContext from "../../context/globalcontext"
import { getCustomers, getModels, getProcesses } from '../../api/menu-api'
import { Link } from "react-router-dom";
import toastr from "toastr";


const CheckPointProcessMenu = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [, , contextMiddleware] = useContext(GlobalContext);
    const [visible, setVisible] = useState({
        contentVisibility: "",
        customerPopVisibility: "d-none",
        modelPopVisibility: "d-none",
        processPopVisibility: "d-none"
    });
    const [customers, setCustomers] = useState([])
    const [models, setModels] = useState([])
    const [processes, setProcesses] = useState([])

    let token = contextMiddleware.getTokenClaims();

    const getCustomerParams = (token) => {

        setIsLoading(true);
        getCustomers(token)
            .then((json) => {
                setCustomers(json)
                setIsLoading(false);
            }).catch((error) => { console.log(error) })

    }
    const getModelParams = (token) => {

        getModels(token)
            .then((json) => {
                setModels(json)
            }).catch((error) => { console.log(error) })

    }

    const getProcessParams = (token) => {

        getProcesses(token)
            .then((json) => {
                setProcesses(json)
            }).catch((error) => { console.log(error) })

    }


    const showPopUp = (button, token) => {

        switch (button) {
            case 'Customer':
                setVisible({
                    contentVisibility: "d-none",
                    customerPopVisibility: "",
                    modelPopVisibility: "d-none",
                    processPopVisibility: "d-none"
                });
                getCustomerParams(token);
                break;
            case 'Model':
                setVisible({
                    contentVisibility: "d-none",
                    customerPopVisibility: "d-none",
                    modelPopVisibility: "",
                    processPopVisibility: "d-none"
                });
                getModelParams(token);
                break;
            case 'Process':
                setVisible({
                    contentVisibility: "d-none",
                    customerPopVisibility: "d-none",
                    modelPopVisibility: "d-none",
                    processPopVisibility: ""
                });
                getProcessParams(token);
                break;
            default:
                break;
        }

    };

    const [model, setModel] = useState("")
    const [customer, setCustomer] = useState("")
    const [process, setProcess] = useState("")
    // const [linkProperties, setLinkProperties] = useState({})


    let params = {
        model: model,
        process: process,
        customer: customer
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
                <div className="row pl-3">
                    <div className="col-6 m-0">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="../Menu">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Checkpoint</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="contenedor">
                {/* Modal Customer */}
                <CustomerPopUp visible={visible} setVisible={setVisible} setCustomerState={setCustomer} customers={customers} isLoading={isLoading} />
                {/* modal Model*/}
                <ModelPopUP visible={visible} setVisible={setVisible} setModelState={setModel} models={models} />
                {/* modal  Process*/}
                <ProcessPopUp visible={visible} setVisible={setVisible} setProcessState={setProcess} processes={processes} />
                <div className={`${visible.contentVisibility} container-fluid `}>
                    <form className="form-container">

                        <div className="form-group">
                            <div className="form-row">
                                <div className="col-md-6 d-flex justify-content-center">
                                    <div type="button" className="btn-menu" id="btn-client" onClick={() => showPopUp('Customer', token)}>
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
                                    <div type="button" className="btn-menu" id="btn-model" onClick={() => showPopUp('Model', token)}>
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
                                    <div type="button" className="btn-menu" id="btn-process" onClick={() => showPopUp('Process', token)} >
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
                            <Link to='../Menu' style={{ color: 'inherit', textDecoration: 'inherit' }}>
                                <div className="back-refresh-btn justify-content-center">
                                    <img src={BackIcon} alt="" />
                                    <p className="btn-lbl">Back</p>
                                </div>
                            </Link>
                        </div>
                        <div className="col-4 d-flex justify-content-center">
                            <Link to='/CheckPointProcessMenu' style={{ color: 'inherit', textDecoration: 'inherit' }}>
                                <div className="back-refresh-btn justify-content-center">
                                    <img src={RefreshIcon} alt="" />
                                    <p className="btn-lbl">Refresh</p>
                                </div>
                            </Link>
                        </div>
                        <div className="col-4  d-flex justify-content-start">
                            <Link to={model === "" || process === "" || customer === "" ? {} : {
                                pathname: '/process',
                                state: params
                            }} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                                <div className="back-refresh-btn justify-content-center" onClick={fieldValidation} >
                                    <img className="btn-next-rotate" src={BackIcon} alt="" />
                                    <p className="btn-lbl">Next</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default CheckPointProcessMenu;