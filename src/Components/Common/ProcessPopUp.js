import React from 'react'
import images from '../Common/Images/index'

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
                        <div className={`d-flex ${processes.length <= 3 ? "justify-content-center" : "justify-content-between"}`}>

                            {processes.map((item, i) => {
                                return (

                                    <div key={i}>
                                        <button className="modal-btn btn-client" id={item.processName} onClick={() => setProcessState(item.processName)}>
                                            <img className="format-img-process" src={images.processIcon} alt="" />
                                        </button>
                                        <p className="modal-client-text">{item.processName}</p>
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