import React, { useState, useContext, useEffect } from 'react';
import './ProcessMenuForm.css'
import ScanBarcode from '../../Images/SVG/icons/ScanBarcode.png'
import GlobalContext from "../../context/globalcontext"
import { Link } from "react-router-dom";
import Loading from '../Common/Loading'


const CheckPointProcessMenu = (props) => {

    const [isLoading, setIsLoading] = useState(false);
    const [, , contextMiddleware] = useContext(GlobalContext);
    const [model, setModel] = useState("");
    const [customer, setCustomer] = useState("");
    const [process, setProcess] = useState("");
    const token = contextMiddleware.getToken();

    //this function split the input's string


    const params = {
        model: model,
        process: process,
        customer: customer
    }

    const Splitter = () => {

        const Qr = document.getElementById("tb-customer")
        const Qr2 = Qr.value
        const separator = "|"
        const ArrayString = Qr2.split(separator);

        setCustomer(ArrayString[0])
        setModel(ArrayString[1])
        setProcess(ArrayString[2])


    }

    useEffect(() => {
        if (customer !== "" && model !== "" && process !== "") { } else {
            console.log(customer)
            console.log(model)
            console.log(process)
            DoClick()
        }

    }, [customer, model, process])


    const DoClick = () => {//evento click del boton Next
        const Dclick = document.getElementById("next-button")
        Dclick.click()

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
            <div className="contenedor contenedor2">
                {isLoading === true ? <Loading /> : null}

                <div className="container-fluid">
                    <form className="form-container">
                        <div className="form-group">
                            <div className="form-row">
                                <div className="col-12 d-flex justify-content-center align-self-center">
                                    <img src={ScanBarcode} className="scanLabel" alt="" />
                                </div>
                                <div className="col-12 d-flex justify-content-center align-self-center">
                                    <input type="text" placeholder="SCAN ANGLE LOCATION LABEL" className="form-control-lg1 input-text2" id="tb-customer" onChange={() => Splitter()} />
                                </div>
                            </div>
                        </div>

                    </form>
                    {/* Back and Refresh Buttons */}
                    <div className="back-refresh-container1 d-flex justify-content-center">
                        <div className="col-4 d-flex justify-content-end">
                            <Link to='../Menu' style={{ color: 'inherit', textDecoration: 'inherit' }}>
                                {/* <div className="back-refresh-btn justify-content-center">
                                    <img src={BackIcon} alt="" />
                                    <p className="btn-lbl">Back</p>
                                </div> */}
                            </Link>
                        </div>
                        <div className="col-4 d-flex justify-content-center">
                            <Link to='/CheckPointProcessMenu' style={{ color: 'inherit', textDecoration: 'inherit' }}>
                                {/* <div className="back-refresh-btn justify-content-center">
                                    <img src={RefreshIcon} alt="" />
                                    <p className="btn-lbl">Refresh</p>
                                </div> */}
                            </Link>
                        </div>
                        <div className="col-4  d-flex justify-content-start">



                            <Link to={customer === null || customer === "" || model === "" || process === "" ? {} : {
                                pathname: '/process',
                                state: params
                            }
                            } style={{ color: 'inherit', textDecoration: 'inherit' }}>
                                <div className="justify-content-center" id='next-button'>
                                    {/* <img className="btn-next-rotate" src={BackIcon} alt="" />
                                    <p className="btn-lbl">Next</p> */}
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