import React, { useContext } from 'react';
import images from '../Common/Images/index'
import GlobalContext from "../../context/globalcontext";
import { Link, useHistory } from "react-router-dom";


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
            <img src={images.logoWhite} className="logo-size" alt="" />
          </div>
          <div className="col-6">
            <img src={images.nameLogo} className="title-size" alt="" />
          </div>
          {/* Columna de los Iconos */}
          <div className="col-3">
            {/* Iconos NavBar */}

            <div className="d-flex text-center flex-row-reverse align-items-center">
              {token !== null ?
                <figure onClick={() => { logOutHandler() }} className="pl-3 m-0 item  hoverbuttons">
                  <img src={images.logOutIcon} alt="" />
                  <figcaption className="caption">Log Out</figcaption>
                </figure>
                : null
              }
              <figure onClick={langeuageHandler} className="pl-3 m-0 item hoverbuttons">
                <img src={images.languageIcon} alt="" />
                <figcaption className="caption">{contextState.language === 'EN' ? '普通话' : 'English'}</figcaption>
              </figure>
              {token !== null ? <>
                <figure className="pl-3 m-0 item">
                  <img src={images.employeeIcon} alt="" />
                  <figcaption className="caption">{token === null ? "employee" : token.userName}</figcaption>
                </figure>
                <Link to='../Menu' style={{ color: 'inherit', textDecoration: 'inherit' }}>
                  <figure className="pl-3 m-0 item ">
                    <img src={images.homeIcon} alt="" />
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