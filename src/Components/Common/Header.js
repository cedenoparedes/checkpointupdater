import React, { useContext } from 'react';
import WhiteLogo from '../../Images/Logo-white.svg';
import NameLogo from '../../Images/Name.svg';
import LogOutLogo from '../../Images/Log-out.svg';
import EmployeeLogo from '../../Images/Employee.svg';
import HomeLogo from '../../Images/Home.svg';
import LangugaeIcon from '../../Images/global.svg'
import GlobalContext from "../../context/globalcontext";
import { Link, useHistory } from "react-router-dom";
import context from 'react-bootstrap/esm/AccordionContext';


const Header = () => {

  const [contextState, , contextMiddleware] = useContext(GlobalContext)
  const history = useHistory()
  let token = contextMiddleware.getTokenClaims();

  const logOutHandler = () => {
    contextMiddleware.logOut()
    history.push("/")
  }

  const langeuageHandler = () => {

    contextState.language === 'ZH' ? contextMiddleware.changeLanguage("EN") : contextMiddleware.changeLanguage("ZH")

  }

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
              {token !== null ?
                <figure onClick={() => { logOutHandler() }} className="pl-3 m-0 item  hoverbuttons">
                  <img src={LogOutLogo} alt="" />
                  <figcaption className="caption">Log Out</figcaption>
                </figure>
                : null
              }
              <figure onClick={langeuageHandler} className="pl-3 m-0 item">
                <img src={LangugaeIcon} alt="" />
                <figcaption className="caption">{contextState.language === 'EN' ? '普通话' : 'English'}</figcaption>
              </figure>
              {token !== null ? <>
                <figure className="pl-3 m-0 item">
                  <img src={EmployeeLogo} alt="" />
                  <figcaption className="caption">{token === null ? "employee" : token.userName}</figcaption>
                </figure>
                <Link to='../Menu' style={{ color: 'inherit', textDecoration: 'inherit' }}>
                  <figure className="pl-3 m-0 item">
                    <img src={HomeLogo} alt="" />
                    <figcaption className="caption">Home</figcaption>
                  </figure>
                </Link>
              </>
                : null
              }


            </div>

          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header;