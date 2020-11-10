import React from 'react'
import processIcon from '../../Images/SVG/icons/process.svg'

const ProcessPopUp = (props) => {

    const { setProcess, processes, hidePopUps } = props;


    const setProcessState = (id) => {
        const processButton = document.getElementById(id)
        let process = processButton.nextElementSibling.textContent;
        hidePopUps();
        setProcess(process)

    }

    let tittle = "Select Process"
    return (
        <div className={'d-block w-100'}>
            <div className="backdrop" onClick={hidePopUps} id="backdrop"></div>
            <div className="row">
                <div className="col-12">
                    <div className="modal" id="modal-client">
                        <h1 className="modal-title">{tittle}</h1>
                        <div className="d-flex justify-content-between">

                            {processes.map((item, i) => {
                                return (

                                    <div key={i}>
                                        <button className="modal-btn btn-client" id={item.ProcessName} onClick={() => setProcessState(item.ProcessName)}>
                                            <img className="format-img-process" src={processIcon} alt="" />
                                        </button>
                                        <p className="modal-client-text">{item.ProcessName}</p>
                                    </div>)
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProcessPopUp;