import React, { useContext, useState } from 'react';
import LoginForm from './LoginForm';
import { login } from '../../api/login-api';
import GlobalContext from '../../context/globalcontext';
import { useHistory } from "react-router-dom";
import toastr from "toastr";

const Index = () => {

    const [employeeCode, setEmployeeCode] = useState("");
    const [, , contextMiddleware] = useContext(GlobalContext);
    const history = useHistory();

    const loginHandler = (employeeCode) => {

        let jEmployeeCode = { "employeeCode": employeeCode }

        login(jEmployeeCode)
            .then((json) => {
                contextMiddleware.logIn(json.token);
                toastr.success("Login Successfully.");
                history.push("/menu");
            }).catch((error) => toastr.error(console.log(error), "Wrong User Name or Password."));

    }

    return (
        <LoginForm
            employeeCodeState={{ employeeCode, setEmployeeCode }}
            loginHandler={loginHandler}
        />
    )
}

export default Index;