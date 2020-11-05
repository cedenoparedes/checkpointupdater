import React, { useState } from 'react';
import Process from './ProcessForm';
import { useLocation } from 'react-router-dom';

const Index = () => {

    let location = useLocation;
    // let mensaje = location().state.mensaje;
    let modelState = location().state.model
    let customerState = location().state.customer
    let processState = location().state.process




    return (
        <div>
            <Process model={modelState} process={processState} customer={customerState} />
            <div>
                {/* <h1>{mensaje}</h1> */}
            </div>
        </div>

    )
}

export default Index;