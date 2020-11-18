import React, { useState, useContext } from 'react';
import { getPieParams } from '../../api/process-api'
import './ProcessMenuForm.css'
import BackIcon from '../../Images/SVG/icons/back.svg'
import RefreshIcon from '../../Images/SVG/icons/refresh.svg'
import GlobalContext from "../../context/globalcontext"
import { Link } from "react-router-dom";
import toastr from "toastr";
import Loading from '../Common/Loading'


const CheckPointProcessMenu = (props) => {

    const [isLoading, setIsLoading] = useState(false);
    const [, , contextMiddleware] = useContext(GlobalContext);
    const [model, setModel] = useState("")
    const [customer, setCustomer] = useState("")
    const [process, setProcess] = useState("")
    const [totalPass, setTotalPass] = useState("")
    const [totalFail, setTotalFail] = useState("")
    const [totalProcessed, setTotalProcessed] = useState("")



    const token = contextMiddleware.getToken();

    //this function split the input's string
    const Splitter = () => {

        const Qr = document.getElementById("tb-customer")
        const Qr2 = Qr.value
        const separator = "|"

        const ArrayString = Qr2.split(separator);

        setCustomer(ArrayString[0])
        setModel(ArrayString[1])
        setProcess(ArrayString[2])

        DoClick()
    }



    const params = {
        model: model,
        process: process,
        customer: customer,
        totalPass: totalPass,
        setTotalProcessed: setTotalProcessed
    }

    //Here we are destructing the props 
    const ValidatePassFailInfo = (customer, model, process, token) => {
        //This funcion is set to receive the data from the API
        getPieParams(customer, model, process, token)
            .then((Response) => {
                if (Response === null || Response === "") {
                    toastr.error("There is no matching information.")
                } else {
                    setIsLoading(false);
                    setTotalPass(Response.totalPass)
                    setTotalFail(Response.totalFail)
                    setTotalProcessed(Response.totalProcessed)


                }
            }).catch((error) => { console.log(error) })

    }

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
            <div className="contenedor">
                {isLoading === true ? <Loading /> : null}

                <div className="container-fluid">
                    <form className="form-container">
                        <div className="form-group">
                            <div className="form-row">
                                <div className="col-12 d-flex justify-content-center align-self-center">
                                    <input type="text" placeholder="SCANN ANGLE LOCATION LABEL" className="form-control-lg1 " id="tb-customer" onChange={Splitter} />
                                </div>
                            </div>
                        </div>

                    </form>
                    {/* Back and Refresh Buttons */}
                    <div className="back-refresh-container1 d-flex justify-content-center">
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
                            <Link to={totalFail === null || totalFail === "" || totalPass === null || totalPass === "" || totalProcessed === null || totalProcessed === "" ? {} : {
                                pathname: '/process',
                                state: params
                            }} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                                <div className="back-refresh-btn justify-content-center" id='next-button' onClick={ValidatePassFailInfo(customer, model, process, token)}>

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