import React from 'react'
import './menu.css'
import '../breadcrumb.css'
import CheckIcon from '../../Images/SVG/icons/check.svg'
import DataIcon from '../../Images/SVG/icons/data.svg'

const index = () => {
    return (
        <div className="container-fluid Site-content">
            <div className="row">
                <div className="col-6 m-0 pl-3">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active" aria-current="page">Home</li>
                        </ol>
                    </nav>
                </div>
                <div className="col-12 d-flex justify-content-center">
                    <h2 id="title-body">Select An Option</h2>
                </div>
            </div>
            <div className="row mt-5 mb-5">
                <div className="col-6 d-flex justify-content-center mb-5">
                    <div type="button" className="div-btn-options pt-5" id="chk-point">
                        <div className="row d-flex justify-content-center">
                            <img className="img-options align-bottom" src={CheckIcon} alt=""/>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <span className="label-btn-options" id="check-label">Check Point</span>
                        </div>
                    </div>
                </div>
                <div className="col-6 d-flex justify-content-center mb-5">
                    <div type="button" className="div-btn-options pt-5" id="d-data">
                        <div className="row d-flex justify-content-center">
                            <img className="img-options" src={DataIcon} alt="" />
                        </div>
                        <div className="row d-flex justify-content-center">
                            <span className="label-btn-options" id="daily-data-label">Daily Data</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default index;