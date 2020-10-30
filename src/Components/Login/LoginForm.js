import React from 'react'
import LogInIMG from '../../Images/LogIn-IMG.svg'



const LoginForm = () => {
    return (
        <div className="container-fluid Site-content" id="login-container-border">
            <div className="container-fluid">
                <div className="d-flex justify-content-center">
                    <img src={LogInIMG} id="login-frame-size" alt="" />
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <div className="input-group" id="login-input-size">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="login-span-size"> <img className="d-flex justify-content-center" id="login-span-icon" src="../Images/SVG/icons/carnet.svg" alt="" /> </span>
                    </div>
                    <input type="text" aria-label="First name" className="form-control" id="login-input-border" />
                </div>
            </div>
            <div className="container-fluid">
                <div className="d-flex justify-content-center">
                    <button type="button" className="btn btn-secondary" id="login-button">Login</button>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;