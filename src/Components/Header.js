import React from 'react'

const Header = () => {
    return (
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
    )
}

export default Header;