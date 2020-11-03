import React from 'react'
import LogInIMG from '../../Images/LogIn-IMG.svg'
import CarnetIcon from '../../Images/SVG/icons/carnet.svg'
import { Link } from "react-router-dom";



const LoginForm = () => {
    return (
        <div className="contenedor">
        <div className="container-fluid" id="login-container-border">
            <div className="container-fluid">
                <div className="d-flex justify-content-center">
                    <img src={LogInIMG} id="login-frame-size" alt="" />
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <div className="input-group" id="login-input-size">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="login-span-size"> <img className="m-auto" id="login-span-icon" src={CarnetIcon} alt="" /> </span>
                    </div>
                    <input type="text" aria-label="First name" className="form-control" id="login-input-border" />
                </div>
            </div>
            <div className="container-fluid">
                <Link to='../Menu' style={{ color: 'inherit', textDecoration: 'inherit'}}>
                    <div className="d-flex justify-content-center">
                        <button type="button" className="btn btn-secondary" id="login-button">Login</button>
                    </div>
                </Link>
            </div>
        </div>
        </div>
    )
}

export default LoginForm;