import React from 'react'
import processIcon from '../../Images/SVG/icons/process.svg'

const ProcessPopUp = (props) => {

    const { visible, setVisible } = props;
    
    const hidePopUp = () => {
        setVisible({
            contentVisibility: "",
            customerPopVisibility: "d-none",
            modelPopVisibility: "d-none",
            processPopVisibility: "d-none"
        })  
    }

    const setProcess = (id) => {
        const textClient = document.querySelector('#tb-process');
        const customerButton = document.getElementById(id)
        textClient.value = customerButton.nextElementSibling.textContent;
        hidePopUp();
    }

    let tittle = "Select A Process"
    let items = [
        {
            processCode: 'ASW'
        },
        {
            processCode: 'XD'
        },
        {
            processCode: 'None'
        },
    ]
    return (
        <div className={`${visible.processPopVisibility} w-100`}>
            <div className="backdrop" onClick={hidePopUp} id="backdrop"></div>
            <div className="row">
                <div className="col-12">
                    <div className="modal" id="modal-client">
                        <h1 className="modal-title">{tittle}</h1>
                        <div className="d-flex justify-content-between">

                            {items.map((item, i) => {
                                return (

                                    <div key={i}>
                                        <button className="modal-btn btn-client" id={item.processCode} onClick={() => setProcess(item.processCode)}>
                                            <img className="format-img-process" src={processIcon} alt="" />
                                        </button>
                                        <p className="modal-client-text">{item.processCode}</p>
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