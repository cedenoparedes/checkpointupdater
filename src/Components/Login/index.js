import React, { useContext, useState, useEffect } from 'react';
import LoginForm from './LoginForm';
import { login } from '../../api/login-api';
import GlobalContext from '../../context/globalcontext';
import { useHistory } from "react-router-dom";
import toastr from "toastr";
import $ from 'jquery';
const Index = () => {

    const [employeeCode, setEmployeeCode] = useState("");
    const [isLoading, setIsLoading] = useState(false);

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

        const errorResponse = message => {
            setTimeout(() => {
                setIsLoading(false);
                toastr.error(message);
            }, 1000);
        }

        const clearInput = () => {
            const employeeCodeInput = document.getElementById("login-input-border")
            employeeCodeInput.value = ""
            employeeCodeInput.focus()

        }
        if (jEmployeeCode.employeeCode === "" || jEmployeeCode.employeeCode === null) {
            toastr.error("Please fill the employee code field")
            clearInput();

        } else {
            setIsLoading(true)
            login(jEmployeeCode)
                .then((json) => {
                    contextMiddleware.logIn(json.token);
                    toastr.success("Login Successfully.");
                    history.push("/menu");
                    setIsLoading(false);
                }).catch((error) => {
                    console.log(error);
                    const Error = error.message;
                    if (Error === 'Failed to fetch') {
                        errorResponse('Network Error')
                    }
                    else if (Error === '401: unauthorized') {
                        errorResponse('User not Found or Unauthorized')
                    }
                    else if (Error === '402: unauthorized') {
                        errorResponse('Error 402: Unauthorized')
                    }

                });
            clearInput();
        }
    }



    useEffect(() => {
        $('#login-input-border').keypress(function (e) {
            var key = e.which;
            if (key === 13)   //the enter key code
            {
                $('#login-button').click();
                return;
            }
        });

    }, [])

    return (
        <LoginForm
            employeeCodeState={{ employeeCode, setEmployeeCode }}
            loginHandler={loginHandler}
            isLoading={isLoading}
        />


    )
}
export default Index;