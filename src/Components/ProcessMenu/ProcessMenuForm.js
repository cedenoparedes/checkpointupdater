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
import Loading from '../Common/Loading'

const CheckPointProcessMenu = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [, , contextMiddleware] = useContext(GlobalContext);
    const [model, setModel] = useState("")
    const [customer, setCustomer] = useState("")
    const [process, setProcess] = useState("")
    const [customers, setCustomers] = useState([])
    const [models, setModels] = useState([])
    const [processes, setProcesses] = useState([])
    const [menuVisible, setMenuVisible] = useState(true);
    const [customerVisible, setCustomerVisible] = useState(false);
    const [modelVisible, setModelVisible] = useState(false);
    const [processVisible, setProcessVisible] = useState(false);


    const hidePopUps = () => {
        setMenuVisible(true);
        setCustomerVisible(false);
        setModelVisible(false);
        setProcessVisible(false);
    }


    let token = contextMiddleware.getTokenClaims();


    let params = {
        model: model,
        process: process,
        customer: customer
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





    // const [linkProperties, setLinkProperties] = useState({})

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
                {isLoading === true ? <Loading /> : null}
                {customerVisible === true ? <CustomerPopUp setCustomer={setCustomer} customers={customers} hidePopUps={hidePopUps} /> : null}
                {modelVisible === true ? <ModelPopUP setModel={setModel} models={models} hidePopUps={hidePopUps} /> : null}
                {processVisible === true ? <ProcessPopUp setProcess={setProcess} processes={processes} hidePopUps={hidePopUps} /> : null}




                {menuVisible === true ?
                    <div className="container-fluid">
                        <form className="form-container">

                            <div className="form-group">
                                <div className="form-row">
                                    <div className="col-md-6 d-flex justify-content-center">
                                        <div type="button" className="btn-menu" id="btn-client" onClick={() => getCustomerParams(token)}>
                                            <img className="icon-options" src={CustomerIcon} alt="" />
                                            <p className="label-btn">Customer</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 d-flex justify-content-center align-self-center">
                                        <input type="text" className="form-control input-text form-control-lg " id="tb-customer" value={customer} disabled />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-row">
                                    <div className="col-md-6 d-flex justify-content-center">
                                        <div type="button" className="btn-menu" id="btn-model" onClick={() => getModelParams(token)}>
                                            <img className="icon-options" src={ModelIcon} alt="" />
                                            <p className="label-btn">Model</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 d-flex justify-content-center align-self-center">
                                        <input type="text" className="form-control input-text form-control-lg" id="tb-model" value={model} disabled />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-row">
                                    <div className="col-md-6 d-flex justify-content-center">
                                        <div type="button" className="btn-menu" id="btn-process" onClick={() => getProcessParams(token)} >
                                            <img className="icon-options" src={ProcessIcon} alt="" />
                                            <p className="label-btn">Process</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 d-flex justify-content-center align-self-center">
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
                    </div> : null
                }

            </div>
        </div >

    )
}

export default CheckPointProcessMenu;