import React from 'react'
import modelIcon from '../../Images/SVG/icons/model.svg'
import backArrow from '../../Images/back-arrow.svg';
import fowardArrow from '../../Images/foward-arrow.svg'
const ModelPopUp = (props) => {

    const { visible, setVisible, setModelState, models } = props;

    const hidePopUp = () => {
        setVisible({
            contentVisibility: "",
            customerPopVisibility: "d-none",
            modelPopVisibility: "d-none",
            processPopVisibility: "d-none"
        })
    }

    const setModel = (id) => {
        const textClient = document.querySelector('#tb-model');
        const customerButton = document.getElementById(id)
        textClient.value = customerButton.nextElementSibling.textContent;
        setModelState(textClient.value)
        hidePopUp();
    }

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


    let tittle = "Select A Model";

    return (
        <div className={`${visible.modelPopVisibility} w-100`}>
            <div className="backdrop" onClick={hidePopUp} id="backdrop"></div>
            <div className="row">
                <div className="col-12">
                    <div className="modal" id="modal-model">
                        <h1 className="modal-title">{tittle}</h1>
                        <div className="modal-model__container" id="option-window">
                            <div className="back-arrow">
                                <img src={backArrow} onClick={() => scrollHandler('left')} id="slideLeft" alt="" />
                            </div>

                            {models.map((item, i) => {
                                return (

                                    <div key={i}>
                                        <button className="modal-btn btn-model" id={item.ModelName} onClick={() => setModel(item.ModelName)}>
                                            <img className="format-img-model" src={modelIcon} alt="" />
                                        </button>
                                        <p className="modal-client-text">{item.ModelName}</p>
                                    </div>)
                            })}
                            <div className="foward-arrow">
                                <img src={fowardArrow} onClick={() => scrollHandler('right')} id="slideRight" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModelPopUp;

