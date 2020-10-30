import React from 'react'
import whiteLogo from '../../Images/Logo-white.svg'
import nameLogo from '../../Images/Name.svg'


const LoginForm = () => {
    return (
        <div>
        <nav className="navigation-bar py-1">
            {/* This is the first Row */}
            <div className="container-fluid">
            <div className="row align-items-center text-white">
                <div className="col-3 col-md-3 col-lg-3 col-xl-3">
                <img src={whiteLogo}  className="logo-size" />
                </div>
                <div className="col-6 col-md-6 col-lg-6 col-xl-6">
                <img src={nameLogo} className="title-size" />
                </div>
                {/* Columna de los Iconos */}
                <div className="col-3 col-md-3 col-lg-3 col-xl-3">
                {/* Iconos NavBar */}
                <div className="d-flex text-center flex-row-reverse align-items-center">
                    <figure className="pl-3 m-0 item">
                    <img src="../Images/Log-out.svg" />
                    <figcaption className="caption">Log Out</figcaption>
                    </figure>
                    <figure className="pl-3 m-0 item">
                    <img src="../Images/Employee.svg" />
                    <figcaption className="caption">Employee</figcaption>
                    </figure>
                    <figure className="pl-3 m-0 item">
                    <img src="../Images/Home.svg" />
                    <figcaption className="caption">Home</figcaption>
                    </figure>
                </div>
                </div>     
            </div>
            </div></nav>
        <div className="container-fluid Site-content" id="login-container-border">
            <div className="container-fluid">
            <div className="d-flex justify-content-center"> 
                <img src="../Images/SVG/icons/QRSCS 61 -60.svg" id="login-frame-size" alt />
            </div>
            </div>
            <div className="d-flex justify-content-center">
            <div className="input-group" id="login-input-size">
                <div className="input-group-prepend">
                <span className="input-group-text" id="login-span-size"> <img className="d-flex justify-content-center" id="login-span-icon" src="../Images/SVG/icons/carnet.svg" /> </span>
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
        <footer className>
            <div className="footer-style pl-2 pt-1 d-flex text-center align-items-center">
            <figure className="location-img">
                <img src="../Images/location.svg" />
                <figcaption className="caption-location text-white">Location</figcaption>
            </figure>
            </div>
        </footer>
        </div>

    )
}

export default LoginForm;