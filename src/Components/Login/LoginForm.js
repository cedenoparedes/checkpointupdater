import React from "react";
import LogInIMG from "../../Images/LogIn-IMG.svg";
import CarnetIcon from "../../Images/SVG/icons/carnet.svg";
import Loader from 'react-loader-spinner'
const LoginForm = ({ employeeCodeState, loginHandler, isLouser }) => {

  return (
    <div className="contenedor">
      <div className="container-fluid" >
        <div className="container-fluid">
          <div className="d-flex justify-content-center">
            <img src={LogInIMG} id="login-frame-size" alt="" />
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="input-group" id="login-input-size">
            <div className="input-group-prepend">
              <span className="input-group-text" id="login-span-size">
                <img
                  className="m-auto"
                  id="login-span-icon"
                  src={CarnetIcon}
                  alt=""
                />
              </span>
            </div>
            <input
              onChange={(e) => {
                employeeCodeState.setEmployeeCode(e.target.value);
              }}
              type="text"
              aria-label="First name"
              className="form-control"
              id="login-input-border"
            />
          </div>
        </div>
        <div className="container-fluid">
          <div className="d-flex justify-content-center">
            <Loader type="Rings" visible={isLouser} color="#e05d06" height={80} width={80} />
            <button
              type="button"
              onClick={() => loginHandler(employeeCodeState.employeeCode)}
              className="btn btn-secondary"
              id="login-button"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;