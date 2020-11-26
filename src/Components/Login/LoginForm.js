import React, { useContext, useEffect, useState } from "react";
import GlobalContex from "../../context/globalcontext";
import Loading from '../Common/Loading';
import images from '../Common/Images/index.js'


const LoginForm = ({ employeeCodeState, loginHandler, isLoading }) => {


  const [contextState, , contextMiddleware] = useContext(GlobalContex);
  const [loginLabel, setLoginLabel] = useState("")
  let messageLabel = contextState.languageLabel

  useEffect(() => {

    const setMessageLabel = (messages, messageCode) => {
      if (messages === [] || messages === undefined) {
        console.log("estoy en bre")
      } else {
        const found = messages.find(element => element.messageCode === messageCode)
        if (found === undefined) {
          return
        } else {
          return found.message
        }
      }

    }
    setLoginLabel(setMessageLabel(messageLabel, "CHK01"))


  }, [messageLabel])




  return (
    <div className="contenedor">
      <div className="container-fluid" >

        <div className="container-fluid">
          <div className="d-flex justify-content-center">
            <img src={images.loginImage} id="login-frame-size" alt="" />
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="input-group" id="login-input-size">
            <div className="input-group-prepend">
              <span className="input-group-text" id="login-span-size">
                <img
                  className="m-auto"
                  id="login-span-icon"
                  src={images.carnetImage}
                  alt=""
                />
              </span>
            </div>
            {
              isLoading === true ? <Loading /> : null
            }

            <input
              onChange={(e) => {
                employeeCodeState.setEmployeeCode(e.target.value);
              }}
              type="text"
              aria-label="First name"
              className="form-control"
              id="login-input-border"
              autoFocus
            />
          </div>
        </div>
        <div className="container-fluid">
          <div className="d-flex justify-content-center">
            <button
              type="button"
              onClick={() => loginHandler(employeeCodeState.employeeCode)}
              className="btn btn-secondary hoverbuttons"
              id="login-button"

            >
              {loginLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;