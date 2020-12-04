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

    const sideScroll = (element, direction, speed, distance, step) => {
        let scrollAmount = 0;
        var slideTimer = setInterval(function () {
            if (direction === 'left') {
                element.scrollLeft -= step;
            } else {
                element.scrollLeft += step;
            }
            scrollAmount += step;
            if (scrollAmount >= distance) {
                window.clearInterval(slideTimer);
            }
        }, speed);
    }
    const scrollHandler = (direction) => {
        const container = document.getElementById('option-window');
        const cWidth = container.offsetWidth;
        sideScroll(container, direction, 10, cWidth, 10);
    };
    return (
        <div className={'d-block w-100'}>
            <div className="backdrop" onClick={hidePopUps} id="backdrop"></div>
            <div className="row">
                <div className="col-12">
                    <div className="modal" id="modal-client">
                        <h1 className="modal-title">{tittle}</h1>
                        <div className={`modal-model__container d-flex ${processes.length <= 3 ? "justify-content-center" : "justify-content-between"}`} id="option-window">
                            <div className={`back-arrow ${processes.length <= 3 ? "d-none" : ""}`}>
                                <img src={images.backArrow} onClick={() => scrollHandler('left')} id="slideLeft" alt="" />
                            </div>
                            {processes.map((item, i) => {
                                return (

                                    <div key={i}>
                                        <button className="modal-btn btn-client" id={item.processName} onClick={() => setProcessState(item.processName)}>
                                            <img className="format-img-process" src={images.processIcon} alt="" />
                                        </button>
                                        <p className="modal-client-text">{item.processName}</p>
                                    </div>)
                            })}
                            <div className={`foward-arrow  ${processes.length <= 3 ? "d-none" : ""}`}>
                                <img src={images.fordwarArrow} onClick={() => scrollHandler('right')} id="slideRight" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProcessPopUp;