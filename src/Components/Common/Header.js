import React from 'react';
import WhiteLogo from '../../Images/Logo-white.svg';
import NameLogo from '../../Images/Name.svg';
import LogOutLogo from '../../Images/Log-out.svg';
import EmployeeLogo from '../../Images/Employee.svg';
import HomeLogo from '../../Images/Home.svg';



const Header = () => {
    return (
        <nav className="navigation-bar py-1">
            {/* This is the first Row */}
            <div className="container-fluid">
                <div className="row align-items-center text-white">
                    <div className="col-3">
                        <img src={WhiteLogo} className="logo-size" alt="" />
                    </div>
                    <div className="col-6">
                        <img src={NameLogo} className="title-size" alt="" />
                    </div>
                    {/* Columna de los Iconos */}
                    <div className="col-3">
                        {/* Iconos NavBar */}
                        <div className="d-flex text-center flex-row-reverse align-items-center">
                            <figure className="pl-3 m-0 item">
                                <img src={LogOutLogo} alt="" />
                                <figcaption className="caption">Log Out</figcaption>
                            </figure>
                            <figure className="pl-3 m-0 item">
                                <img src={EmployeeLogo} alt="" />
                                <figcaption className="caption">Employee</figcaption>
                            </figure>
                            <figure className="pl-3 m-0 item">
                                <img src={HomeLogo} alt="" />
                                <figcaption className="caption">Home</figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;