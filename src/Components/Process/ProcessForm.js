import React, { useState } from 'react'
import PassCheck from '../../Images/SVG/icons/check-symbol.svg'
import FailSymbol from '../../Images/SVG/icons/cancel.svg'
import RefreshIcon from '../../Images/SVG/icons/refresh.svg'
import PieChart from '../PieChart'
import FailuresWindows from './FailuresWindow'

const ProcessForm = () => {

    const [visible, setVisible] = useState("d-none")

    const showFailureWindows = () => {
        if (visible === "") {
            setVisible("d-none")
        } else {
            setVisible("")
        }
    }


    return (
        <div className="container-fluid Site-content">
            {/* Customer, Model and Process indicator */}
            <div className="row">
                <div className="col-6">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="./menu.html">Home</a></li>
                            <li className="breadcrumb-item"><a href="./chkpoint.html">Checkpoint</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Process</li>
                        </ol>
                    </nav>
                </div>
                <div className="col-6">
                    <div className="d-flex justify-content-end">
                        <p className="text">Customer: 506</p>
                        <p className="division"> | </p>
                        <p className="text">Model: IphoneX</p>
                        <p className="division"> | </p>
                        <p className="text">Process: DSM</p>
                    </div>
                </div>
            </div>
            <div className={`${visible === "d-none" ? "" : "d-none"} process-window `} id="process-window">
                <div className="row justify-content-center align-items-center">
                    <div className="col-3">
                        <div type="button" className="d-flex  justify-content-center align-self-center button-pass-fail button-pass-position-color" id="pass-btn">
                            <div>
                                <img className="icon-pass" src={PassCheck} />
                            </div>
                            <div className="txt-porcentage">
                                <p id="pass-percentage">0.00%</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="chart1">
                            <PieChart />
                        </div>
                    </div>
                    <div className="col-3">
                        {/* button fail */}
                        <div type="button" onClick={showFailureWindows} className="d-flex  justify-content-center align-self-center button-pass-fail button-fail-position-color" id="fail-btn">
                            <div>
                                <img className="icon-fail" id="icon-fail-margin" src={FailSymbol} />
                            </div>
                            <div className="txt-porcentage">
                                <p id="fail-percentage">0.00%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FailuresWindows visible={visible} setVisible={setVisible} />
            <div className="row">
                {/* Back and Refresh Buttons */}
                <div className="back-refresh-container d-flex justify-content-center">
                    <div className="col-6  d-flex justify-content-end">
                        <div className="back-refresh-btn justify-content-center">
                            <img src={RefreshIcon} alt="" />
                            <p className="btn-lbl">Back</p>
                        </div>
                    </div>
                    <div className="col-6 d-flex justify-content-start">
                        <div className="back-refresh-btn justify-content-center">
                            <img src={RefreshIcon} alt="" />
                            <p className="btn-lbl">Refresh</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default ProcessForm;