import React from 'react';
import Process from './ProcessForm';
import { useLocation } from 'react-router-dom';
import { getPieParams } from '../../api/process-api';


const Index = () => {

    //getting State via Link
    let location = useLocation;
    let model = location().state.model
    let customer = location().state.customer
    let process = location().state.process


    //This funcion is set to receive the data from the API
    const fillPieParams = (model, customer, process, token) => {
        getPieParams(model, customer, process, token)
            .then((data) => {
                console.log(data.TotalPass);
                console.log(data.TotalFail);
                console.log(data.TotalProcessed);
                console.log(token);
            })
    }


    return (
        <Process model={model} process={process} customer={customer}
            fillPieParams={fillPieParams}
        />
    )
}

export default Index;