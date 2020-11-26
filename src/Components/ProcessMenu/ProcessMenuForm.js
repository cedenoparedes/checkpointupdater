import React, { useState, useEffect, useContext } from 'react';
import './ProcessMenuForm.css'
import angleLocationLabel from '../../Images/SVG/icons/angleLocationLabel.png'
import GlobalContext from '../../context/globalcontext'
import { useHistory } from "react-router-dom";
import toastr from "toastr";




const CheckPointProcessMenu = () => {

    const [contextState, , contextMiddleware] = useContext(GlobalContext);
    const [home, setHome] = useState("")
    const [checkPointLabel, setCheckPointLabel] = useState("")
    const [placeHolderScanLabel, setPlaceHolderScanLabel] = useState("")



    let messageLabel = contextState.languageLabel
    useEffect(() => {

        const setMessageLabel = (messages, messageCode) => {
            if (messages === [] || messages === undefined) {
                console.log("estoy en bre")
            } else {
                const found = messages.find(element => element.messageCode === messageCode)
                if (found === undefined) {
                    return
                } else {
                    return found.message
                }
            }

        }
        setHome(setMessageLabel(messageLabel, "CHK02"))
        setCheckPointLabel(setMessageLabel(messageLabel, "CHK05"))
        setPlaceHolderScanLabel(setMessageLabel(messageLabel, "CHK07"))
    }, [messageLabel])

    const history = useHistory();


    //this function split the input's string
    const Splitter = () => {
        const Qr = document.getElementById("tb-customer").value
        const separator = "|"
        let ArrayString = Qr.split(separator);
        const params = {
            customer: ArrayString[0],
            model: ArrayString[1],
            process: ArrayString[2],
        }
        pushProcess(params)

    }

    const pushProcess = (params) => {

        if (!(params.model === undefined) && !(params.customer === undefined) && !(params.process === undefined)) {
            history.push({
                pathname: '/process',
                state: params
            })
        } else {
            document.getElementById("tb-customer").value = ""
            toastr.error("This Customer, Process or Model are not valid")

        }
    }


    return (
        <div className="h-90">
            <div className="container-fluid">
                <div className="row pl-3">
                    <div className="col-6 m-0">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="../Menu">{home}</a></li>
                                <li className="breadcrumb-item active" aria-current="page">{checkPointLabel}</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="contenedor contenedor2">
                <div className="container-fluid">
                    <div className="form-container">
                        <div className="form-group">
                            <div className="form-row">
                                <div className="col-12 d-flex justify-content-center align-self-center">
                                    <img src={angleLocationLabel} className="scanLabel" alt="" />
                                </div>
                                <div className="col d-flex justify-content-center align-self-center">
                                    <input type="text" placeholder={placeHolderScanLabel}
                                        className="form-control-lg1 input-text2" id="tb-customer"
                                        onKeyPress={(e) => e.key === 'Enter' ? Splitter() : null} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div >

    )
}

export default CheckPointProcessMenu;