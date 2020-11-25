import React, { useContext } from 'react';
import './menu.css';
import '../Common/breadcrumb.css';
import CheckIcon from '../../Images/SVG/icons/check.svg';
import DataIcon from '../../Images/SVG/icons/data.svg';
import { Link } from "react-router-dom";
import GlobalContext from "../../context/globalcontext"


const MenuForm = () => {
    const [contextState, , contextMiddleware] = useContext(GlobalContext);
    console.log(contextState.languageLabel)

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
                            <h2 id="title-body">Select An Option</h2>
                        </div>
                    </div>
                    <div className="row mt-5 mb-5">
                        <div className="col-6 d-flex justify-content-center mb-5">
                            <Link to='../ProcessMenu' style={{ color: 'inherit', textDecoration: 'inherit' }}>
                                <div className="div-btn-options pt-5" id="chk-point">
                                    <div className="row d-flex justify-content-center">
                                        <img className="img-options align-bottom" src={CheckIcon} alt="" />
                                    </div>
                                    <div className="row d-flex justify-content-center">
                                        <span className="label-btn-options">Check Point</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-6 d-flex justify-content-center mb-5">
                            <Link to='../report/menu' style={{ color: 'inherit', textDecoration: 'inherit' }}>
                                <div className="div-btn-options pt-5" id="d-data">
                                    <div className="row d-flex justify-content-center">
                                        <img className="img-options" src={DataIcon} alt="" />
                                    </div>
                                    <div className="row d-flex justify-content-center">
                                        <span className="label-btn-options">Daily Data</span>
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