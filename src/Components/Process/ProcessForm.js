import React from 'react'
import PassCheck from '../../Images/SVG/icons/check-symbol.svg'
import FailSymbol from '../../Images/SVG/icons/cancel.svg'
import BackIcon from '../../Images/SVG/icons/back.svg'
import FowardIcon from '../../Images/foward-arrow.svg'
import RefreshIcon from '../../Images/SVG/icons/refresh.svg'
import PieChart from '../PieChart'


const ProcessForm = () => {
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
            <div className="process-window " id="process-window">
                <div className="row justify-content-center align-items-center">
                <div className="col-3">
                    <div type="button" className="d-flex  justify-content-center align-self-center button-pass-fail button-pass-position-color" id="pass-btn">
                    <div>
                        <img className="icon-pass-fail" src={PassCheck} />
                    </div>
                    <div className="txt-porcentage">
                        <p id="pass-percentage">0.00%</p>
                    </div>
                    </div>
                </div>
                <div className="col-6">
                    {<PieChart />}
                </div>
                <div className="col-3">
                    {/* button fail */}
                    <div type="button" className="d-flex  justify-content-center align-self-center button-pass-fail button-fail-position-color" id="fail-btn">
                    <div>
                        <img className="icon-pass-fail" id="icon-fail-margin" src={FailSymbol} />
                    </div>
                    <div className="txt-porcentage">
                        <p id="fail-percentage">0.00%</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="d-none failures-window" id="failure-window">
                <div className="backdrop" id="backdrop"> </div>
                <div className="row justify-content-center">
                <div className="col-12 p- 2">
                    <div className="error-list " data-name="error-tags">
                    </div>
                </div>
                <div className="col-12 p-2">
                    <div className="d-flex justify-content-start flex-wrap overflow">
                    <div className="back-arrow">
                        <img src={BackIcon} alt="" id="slideLeft" />
                    </div>
                    <div className="modal-button-container" id="option-window">
                        <div className="r-1">
                        <button className="button">Missing Key</button>
                        <button className="button">Peel Off</button>
                        <button className="button">Missing Key's Support</button>
                        <button className="button">Damaged Screw Post</button>
                        <button className="button">please earase</button>
                        <button className="button">please earase</button>
                        </div>
                        <div className="r-2">
                        <button className="button">Scratched</button>
                        <button className="button">Missing Hook</button>
                        <button className="button">Missing Screw Post</button>
                        <button className="button">please earase</button>
                        <button className="button">please earase</button>
                        <button className="button">please earase</button>
                        </div>
                    </div>
                    <div className="foward-arrow">
                        <img src={FowardIcon}  alt="" id="slideRight" />
                    </div>
                    </div>
                </div>
                {/* Failure Buttons */}
                <div className="col-12 p-2">
                    <div className="submit-btn" id="submit-btn">
                    <button>Complete</button>
                    </div>
                </div>
                {/* SlideRight */}
                </div>
            </div>
            <div className="row">
                {/* Back and Refresh Buttons */}
                <div className="back-refresh-container d-flex justify-content-center">
                <div className="col-6  d-flex justify-content-end">
                    <div className="back-refresh-btn justify-content-center">
                    <img src={RefreshIcon} alt="" srcSet />
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