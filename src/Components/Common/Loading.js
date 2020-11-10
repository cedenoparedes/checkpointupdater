import React from 'react'
import Loader from 'react-loader-spinner';
import './Loader.css'

const Loading = (props) => {

    const { isLoading } = props;
    console.log(isLoading);
    return (
        <div className="Loader">
            <div className="Loader-backdrop"></div>
            <Loader className="Loader-style" type="TailSpin" visible={isLoading} color="#e05d06" />
        </div>
    )
}

export default Loading;

// height={80} width={80}