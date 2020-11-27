import React from 'react'
import fowardArrow from '../../Images/foward-arrow.svg'
import images from '../Common/Images/index'
const ModelPopUp = (props) => {

    const { setModel, models, hidePopUps } = props;

    const setModelState = (id) => {
        const customerButton = document.getElementById(id)
        let model = customerButton.nextElementSibling.textContent;
        hidePopUps();
        setModel(model)
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


    let tittle = "Select Model";

    return (
        <div className="d-block w-100">
            <div className="backdrop" onClick={hidePopUps} id="backdrop"></div>
            <div className="row">
                <div className="col-12">
                    <div className="modal" id="modal-model">
                        <h1 className="modal-title">{tittle}</h1>
                        <div className="modal-model__container" id="option-window">
                            <div className="back-arrow">
                                <img src={images.backArrow} onClick={() => scrollHandler('left')} id="slideLeft" alt="" />
                            </div>

                            {models.map((item, i) => {
                                return (

                                    <div key={i}>
                                        <button className="modal-btn btn-model" id={item.modelName} onClick={() => setModelState(item.modelName)}>
                                            <img className="format-img-model" src={images.modelIcon} alt="" />
                                        </button>
                                        <p className="modal-client-text">{item.modelName}</p>
                                    </div>)
                            })}
                            <div className="foward-arrow">
                                <img src={images.fordwarArrow} onClick={() => scrollHandler('right')} id="slideRight" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ModelPopUp;

