import React, { useEffect, useState } from 'react';
import Process from './ProcessForm';
import { useLocation } from 'react-router-dom';
import { getPieParams } from '../../api/process-api';


const Index = () => {

    const [totalPass, setTotalPass] = useState("")
    const [TotalFail, setTotalFail] = useState("")
    const [TotalProcessed, setTotalProcessed] = useState("")

    //getting State via Link
    let location = useLocation;
    let model = location().state.model
    let customer = location().state.customer
    let process = location().state.process

    //This funcion is set to receive the data from the API
    const fillPieParams = (customer, model, process, token) => {
        getPieParams(customer, model, process, token)
            .then((data) => {
                setTotalPass(data.TotalPass);
                setTotalFail(data.TotalFail);
                setTotalProcessed(data.TotalProcessed);

            }).catch((error) => { console.log(error) })
    }




    return (
        <Process model={model}
            process={process}
            customer={customer}
            fillPieParams={fillPieParams}
            totalPass={totalPass}
            TotalFail={TotalFail}
            TotalProcessed={TotalProcessed}
            setTotalPass={setTotalPass}
            setTotalFail={setTotalFail}
            setTotalProcessed={setTotalProcessed}
        />
    )
}

export default Index;