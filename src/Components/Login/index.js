import React, { useContext, useState } from 'react';
import LoginForm from './LoginForm';
import { login } from '../../api/login-api';
import GlobalContext from '../../context/globalcontext';
import { useHistory } from "react-router-dom";
import toastr from "toastr";


const Index = () => {

    const [employeeCode, setEmployeeCode] = useState("");
    const [isLouser, setIsLouder] = useState(true);

    const [, , contextMiddleware] = useContext(GlobalContext);
    const history = useHistory();

    const loginHandler = (employeeCode) => {
        toastr.options = {
            "positionClass": "toast-top-center",
            "showMethod": "slideDown",
            "hideMethod": "slideUp",
            "timeOut": "3000"
        }
        let jEmployeeCode = { employeeCode: employeeCode }


        const clearInput = () => {
            const employeeCodeInput = document.getElementById("login-input-border")
            employeeCodeInput.value = ""

        }
        if (jEmployeeCode.employeeCode === "" || jEmployeeCode.employeeCode === null) {
            toastr.error("Please fill the employee code field")
            clearInput();
        } else {
            setIsLouder(true)
            login(jEmployeeCode)
                .then((json) => {
                    contextMiddleware.logIn(json.token);
                    toastr.success("Login Successfully.");
                    history.push("/menu");
                    setIsLouder(false)
                }).catch((error) => { toastr.error(console.log(error), "Wrong Employee Code.") });
            clearInput();
            setIsLouder(false)



        }
    }
    return (
        <LoginForm
            employeeCodeState={{ employeeCode, setEmployeeCode }}
            loginHandler={loginHandler}
            isLouser={isLouser}

        />
    )
}
export default Index;