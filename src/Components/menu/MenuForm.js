import React, { useContext, useEffect, useState } from 'react';
import './menu.css';
import '../Common/breadcrumb.css';
import { Link } from "react-router-dom";
import GlobalContext from "../../context/globalcontext"
import images from '../Common/Images/index'


const MenuForm = () => {

    const [contextState, , contextMiddleware] = useContext(GlobalContext);
    const [titleLabel, setTitleLabel] = useState("")
    const [checkPointLabel, setCheckPointLabel] = useState("")
    const [dailyData, setDailyData] = useState("")





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
        setTitleLabel(setMessageLabel(messageLabel, "CHK04"))
        setCheckPointLabel(setMessageLabel(messageLabel, "CHK05"))
        setDailyData(setMessageLabel(messageLabel, "CHK06"))



    }, [messageLabel])


    return (
        <div className="container-fluid h-90">
            <div className="row">
                <div className="col-6 m-0 pl-3">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active" aria-current="page">Home</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div className="contenedor">
                <div className="container-fluid p-0 m-0">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <h2 id="title-body">{titleLabel}</h2>
                        </div>
                    </div>
                    <div className="row mt-5 mb-5">
                        <div className="col-6 d-flex justify-content-center mb-5">
                            <Link to='../ProcessMenu' style={{ color: 'inherit', textDecoration: 'inherit' }}>
                                <div className="div-btn-options pt-5" id="chk-point">
                                    <div className="row d-flex justify-content-center">
                                        <img className="img-options align-bottom" src={images.checkIcon} alt="" />
                                    </div>
                                    <div className="row d-flex justify-content-center">
                                        <span className="label-btn-options">{checkPointLabel}</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-6 d-flex justify-content-center mb-5">
                            <Link to='../report/menu' style={{ color: 'inherit', textDecoration: 'inherit' }}>
                                <div className="div-btn-options pt-5" id="d-data">
                                    <div className="row d-flex justify-content-center">
                                        <img className="img-options" src={images.dataIcon} alt="" />
                                    </div>
                                    <div className="row d-flex justify-content-center">
                                        <span className="label-btn-options">{dailyData}</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MenuForm;