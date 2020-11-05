import React from 'react';
import Process from './ProcessForm';
import {useLocation} from 'react-router-dom';

const index = () => {

    let location = useLocation;
    // let mensaje = location().state.mensaje;
    console.log(location().state.mensaje)

    return (
        <div>
            <Process />
            <div>
            {/* <h1>{mensaje}</h1> */}
            </div>
        </div>
        
    )
}

export default index;