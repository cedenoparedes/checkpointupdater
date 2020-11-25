import React, { useState, useContext } from 'react';
import Process from './ProcessForm';
import { useLocation } from 'react-router-dom';
import { getPieParams } from '../../api/process-api';
import toastr from 'toastr';
import { useHistory } from 'react-router-dom';
import GlobalContext from "../../context/globalcontext"


const Index = () => {
    const [totalPass, setTotalPass] = useState("")
    const [totalFail, setTotalFail] = useState("")
    const [totalProcessed, setTotalProcessed] = useState("")
    const history = useHistory();
    const [contextState, , contextMiddleware] = useContext(GlobalContext);


    //getting State via Link
    let location = useLocation;
    let model = location().state.model
    let customer = location().state.customer
    let process = location().state.process

    const errorResponse = message => {
        setTimeout(() => {
            toastr.error(message);
        }, 1000);
    }
    //This funcion is set to receive the data from the API
    const fillPieParams = (customer, model, process, token) => {
        getPieParams(customer, model, process, token)
            .then((data) => {
                setTotalPass(data.TotalPass);
                setTotalFail(data.TotalFail);
                setTotalProcessed(data.TotalProcessed);

            }).catch((error) => {
                history.push("/processMenu");
                console.log(error)
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
                else if (Error === '404: not found') {
                    errorResponse('Error 404: Not Found')
                }
            })
    }


    return (
        <Process model={model}
            process={process}
            customer={customer}
            fillPieParams={fillPieParams}
            totalPass={totalPass}
            totalFail={totalFail}
            totalProcessed={totalProcessed}
            setTotalPass={setTotalPass}
            setTotalFail={setTotalFail}
            setTotalProcessed={setTotalProcessed}
        />
    )
}

export default Index;