import React from 'react'
import Loader from 'react-loader-spinner';
import './Loader.css'

const Loading = () => {

    return (
        <div className="Loader">
            <div className="Loader-backdrop"></div>
            <Loader className="Loader-style" type="TailSpin" visible={true} color="#e05d06" />
        </div>
    )
}

export default Loading;

// height={80} width={80}