import React from 'react'
import Loader from 'react-loader-spinner';
import './Loader.css'

const Loading = (props) => {

    const { isLoading } = props;
    console.log(isLoading);
    return (
        <div className="Loader">
            <div className={isLoading === true ? "Loader-backdrop" : ""}></div>
            <Loader className="Loader-style" type="Rings" visible={isLoading} color="#e05d06" />
        </div>
    )
}

export default Loading;

// height={80} width={80}