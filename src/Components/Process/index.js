import React from 'react';
import Process from './ProcessForm';
import { useLocation } from 'react-router-dom';
// import { getPieParams } from '../../api/process-api';


const Index = () => {

    // const [totalPass, setTotalPass] = useState("")
    // const [TotalFail, setTotalFail] = useState("")
    // const [TotalProcessed, setTotalProcessed] = useState("")

    //getting State via Link
    let location = useLocation;
    let model = location().state.model
    let customer = location().state.customer
    let process = location().state.process

    let totalPass = location().state.totalPass
    let totalFail = location().state.totalFail
    let totalProcessed = location().state.totalProcessed

    let setTotalPass = location().state.setTotalPass
    let setTotalFail = location().state.setTotalFail
    let setTotalProcessed = location().state.setTotalProcessed

    //This funcion is set to receive the data from the API
    // const fillPieParams = (customer, model, process, token) => {
    //     getPieParams(customer, model, process, token)
    //         .then((data) => {
    //             setTotalPass(data.TotalPass);
    //             setTotalFail(data.TotalFail);
    //             setTotalProcessed(data.TotalProcessed);

    //         }).catch((error) => { console.log(error) })
    // }




    return (
        <Process model={model}
            process={process}
            customer={customer}
            // fillPieParams={fillPieParams}
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