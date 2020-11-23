import React, { useState, useContext, useEffect } from 'react';
import './ProcessMenuForm.css'
import angleLocationLabel from '../../Images/SVG/icons/angleLocationLabel.png'
import GlobalContext from "../../context/globalcontext"
import { Link, useHistory } from "react-router-dom";
import toastr from "toastr";
import Loading from '../Common/Loading'


const CheckPointProcessMenu = (props) => {

    const [isLoading, setIsLoading] = useState(false);
    const [, , contextMiddleware] = useContext(GlobalContext);
    const [model, setModel] = useState("");
    const [customer, setCustomer] = useState("");
    const [process, setProcess] = useState("");
    const [totalPass, setTotalPass] = useState("");
    const [totalFail, setTotalFail] = useState("");
    const [totalProcessed, setTotalProcessed] = useState("");
    const history = useHistory();
    const token = contextMiddleware.getToken();

    //this function split the input's string

    let ArrayString = []
    const params = {
        model: model,
        process: process,
        customer: customer
    }

    useEffect(() => {
        if (!(customer === "") && !(model === "") && !(process === "")) {
            // DoClick();


        }

    }, [customer, model, process])

    const Splitter = () => {

        const Qr = document.getElementById("tb-customer")
        const Qr2 = Qr.value
        const separator = "|"
        ArrayString = Qr2.split(separator);
        setCustomer(ArrayString[0])
        setModel(ArrayString[1])
        setProcess(ArrayString[2])
        const params = {
            customer: ArrayString[0],
            model: ArrayString[1],
            process: ArrayString[2],
        }
        pushProcess(params);


    }


    // //Here we are destructing the props 
    // const ValidatePassFailInfo = (customer, model, process, token) => {
    //     // console.log(customer, model, process, totalPass, totalFail, totalProcessed)
    //     //This funcion is set to receive the data from the API
    //     console.log("API call")
    //     console.log(customer, model, process)
    //     getPieParams(customer, model, process, token)
    //         .then((Response) => {
    //             params.totalPass = Response.TotalPass
    //             params.totalFail = Response.TotalFail
    //             params.totalProcessed = Response.TotalProcessed

    //         })

    //         .catch(
    //             (error) => {
    //                 console.log(error);
    //                 setTimeout(() => {
    //                     toastr.error("Call failed.");
    //                 }, 1000);

    //                 //document.getElementById("tb-customer").value = ""
    //             }
    //         )



    // }

    // const DoClick = () => {//evento click del boton Next
    //     // console.log("estoy aqui")
    //     // ValidatePassFailInfo(customer, model, process, token)
    //     const Dclick = document.getElementById("next-button")
    //     // Dclick.click()
    //     pushProcess()

    //     // console.log(params)

    // }

    const pushProcess = (params) => {
        history.push({
            pathname: '/process',
            state: params
        })

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
                                    <img src={angleLocationLabel} className="scanLabel" alt="" />
                                </div>
                                <div className="col-12 d-flex justify-content-center align-self-center">
                                    <input type="text" placeholder="SCAN ANGLE LOCATION LABEL" className="form-control-lg1 input-text2" id="tb-customer" onKeyDown={(e) => e.key === 'Enter' ? Splitter() : null} />
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
                            <div className="justify-content-center" id='next-button'>
                                {/* <img className="btn-next-rotate" src={BackIcon} alt="" />
                                    <p className="btn-lbl">Next</p> */}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div >

    )
}

export default CheckPointProcessMenu;