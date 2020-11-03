import React from 'react'
import './ProcessMenuForm.css'
import CustomerIcon from '../../Images/SVG/icons/custumer.svg'
import ModelIcon from '../../Images/SVG/icons/model.svg'
import ProcessIcon from '../../Images/SVG/icons/process.svg'
import BackIcon from '../../Images/SVG/icons/back.svg'
import RefreshIcon from '../../Images/SVG/icons/refresh.svg'



const ChkMenu = () => {
    return (
        <div className="container-fluid">
            <div className="backdrop d-none" id="backdrop" />
            {/* modal Client */}
            <div className="modal d-none" id="modal-client">
                <h1 className="modal-title">Select Customer</h1>
                <div className="d-flex justify-content-center">
                    <div>
                        <button className="format-btn modal-btn btn-client" id>
                            <img className="format-img-costumer" src={CustomerIcon} alt="" /></button>
                        <p className="modal-client format-txt-icon">615</p>
                    </div>
                    <div>
                        <button className="format-btn modal-btn btn-client"><img className="format-img-costumer" src="../Images/SVG/icons/costumer.svg" /></button>
                        <p className="modal-client format-txt-icon">787</p>
                    </div>
                    <div>
                        <button className="format-btn modal-btn btn-client"><img className="format-img-costumer" src="../Images/SVG/icons/costumer.svg" /></button>
                        <p className="modal-client format-txt-icon">506</p>
                    </div>
                </div>
            </div>
            {/* modal Model*/}
            <div className="modal d-none" id="modal-model">
                <h1 className="modal-title">Select A Model</h1>
                <div className="modal-model__container" id="option-window">
                    <div className="back-arrow">
                        <img src="../Images/back-arrow.svg" alt id="slideLeft" />
                    </div>
                    <div>
                        <button className="modal-btn btn-model"><img className="format-img-model" src="../Images/SVG/icons/model.svg" /></button>
                        <p className="modal-client format-txt-icon">IP7</p>
                    </div>
                    <div>
                        <button className="modal-btn btn-model"><img className="format-img-model" src="../Images/SVG/icons/model.svg" /></button>
                        <p className="modal-client format-txt-icon">IP7P</p>
                    </div>
                    <div>
                        <button className="modal-btn btn-model"><img className="format-img-model" src="../Images/SVG/icons/model.svg" /></button>
                        <p className="modal-client format-txt-icon">IP8</p>
                    </div>
                    <div>
                        <button className="modal-btn btn-model"><img className="format-img-model" src="../Images/SVG/icons/model.svg" /></button>
                        <p className="modal-client format-txt-icon">IP8P</p>
                    </div>
                    <div>
                        <button className="modal-btn btn-model"><img className="format-img-model" src="../Images/SVG/icons/model.svg" /></button>
                        <p className="modal-client format-txt-icon">IPX</p>
                    </div>
                    <div>
                        <button className="modal-btn btn-model"><img className="format-img-model" src="../Images/SVG/icons/model.svg" /></button>
                        <p className="modal-client format-txt-icon">IPXR</p>
                    </div>
                    <div>
                        <button className="modal-btn btn-model"><img className="format-img-model" src="../Images/SVG/icons/model.svg" /></button>
                        <p className="modal-client format-txt-icon">IPXS</p>
                    </div>
                    <div>
                        <button className="modal-btn btn-model"><img className="format-img-model" src="../Images/SVG/icons/model.svg" /></button>
                        <p className="modal-client format-txt-icon">IPXSM</p>
                    </div>
                    <div>
                        <button className="modal-btn btn-model"><img className="format-img-model" src="../Images/SVG/icons/model.svg" /></button>
                        <p className="modal-client format-txt-icon">IP11</p>
                    </div>
                    <div>
                        <button className="modal-btn btn-model"><img className="format-img-model" src="../Images/SVG/icons/model.svg" /></button>
                        <p className="modal-client format-txt-icon">IP11P</p>
                    </div>
                    <div>
                        <button className="modal-btn btn-model"><img className="format-img-model" src="../Images/SVG/icons/model.svg" /></button>
                        <p className="modal-client format-txt-icon">IP11PM</p>
                    </div>
                </div>
                <div className="foward-arrow">
                    <img src="../Images/foward-arrow.svg" alt id="slideRight" />
                </div>
            </div>
            {/* modal  Process*/}
            <div className="modal d-none" id="modal-process">
                <h1 className="modal-title">Select Process</h1>
                <div className="d-flex justify-content-center">
                    <div>
                        <button className="modal-btn btn-process format-btn">
                            <img className="format-img-process" src="../../Images/SVG/icons/process.svg" alt="" />
                        </button>
                        <p className="modal-client format-txt-icon">Assemble</p>
                    </div>
                    <div>
                        <button className="modal-btn btn-process format-btn">
                            <img className="format-img-process" src="../../Images/SVG/icons/process.svg" alt="" />
                        </button>
                        <p className="modal-client format-txt-icon">Disassembly</p>
                    </div>
                </div>
            </div>
            <div className="row pl-3">
                <div className="col-6 m-0">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="./menu.html">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Checkpoint</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div className="container-fluid" id="container-body">
                <form action className="form-container">
                    {/* <div class="form-group">
  <div class="form-row">
    <div class="col-md-6 d-flex justify-content-center">
      <img type="button" class="btn-menu " src="../Images/Software Checkpoint-26.png" id="btn-client" value="Client">
    </div>
    <div class="col-md-6 d-flex justify-content-center align-self-center">
      <input type="text" class="form-control form-control-lg " id="tb-client" disabled>
    </div>
  </div>
</div> */}
                    <div className="form-group">
                        <div className="form-row">
                            <div className="col-md-6 d-flex justify-content-center">
                                <div type="button" className="btn-menu " id="btn-client" value="Client"> <img className="icon-options" src={CustomerIcon} alt="" /> Customer</div>
                            </div>
                            <div className="col-md-6 d-flex justify-content-center align-self-center">
                                <input type="text" className="form-control input-text form-control-lg " id="tb-client" disabled />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-row">
                            <div className="col-md-6 d-flex justify-content-center">
                                <div type="button" className="btn-menu" id="btn-model" value="Model"> <img className="icon-options" src={ModelIcon} alt="" /> Model</div>
                            </div>
                            <div className="col-md-6 d-flex justify-content-center align-self-center">
                                <input type="text" className="form-control input-text form-control-lg" id="tb-model" disabled />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-row">
                            <div className="col-md-6 d-flex justify-content-center">
                                <div type="button" className="btn-menu" id="btn-process" value="Process"> <img className="icon-options" src={ProcessIcon} alt="" /> Process</div>
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
                        <div className="back-refresh-btn justify-content-center">
                            <img src={BackIcon} alt="" />
                            <p className="btn-lbl">Back</p>
                        </div>
                    </div>
                    <div className="col-4 d-flex justify-content-center">
                        <div className="back-refresh-btn justify-content-center">
                            <img src={RefreshIcon} alt="" />
                            <p className="btn-lbl">Refresh</p>
                        </div>
                    </div>
                    <div className="col-4  d-flex justify-content-start">
                        <div className="back-refresh-btn justify-content-center">
                            <img className="btn-next-rotate" src={BackIcon} alt="" />
                            <p className="btn-lbl">Next</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ChkMenu;