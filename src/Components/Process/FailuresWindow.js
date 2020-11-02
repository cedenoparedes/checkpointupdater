import React from 'react'
import BackIcon from '../../Images/back-arrow.svg'
import FowardIcon from '../../Images/foward-arrow.svg'

const FailuresWindow = (props) => {

    const { visible, setVisible } = props

    const sideScroll = (element,direction,speed,distance,step) =>{
        let scrollAmount = 0;
        var slideTimer = setInterval(function(){
            if(direction === 'left'){
                element.scrollLeft -= step;
            } else {
                element.scrollLeft += step;
            }
            scrollAmount += step;
            if(scrollAmount >= distance){
                window.clearInterval(slideTimer);
            }
        }, speed);
    }

    const moveRight = () =>{ 
        const container = document.getElementById('option-window');
        const cWidth = container.offsetWidth;
        sideScroll(container,'right',10,cWidth,10);
    };

    const moveLeft = () =>{
        const container = document.getElementById('option-window');
        const cWidth = container.offsetWidth;
        sideScroll(container,'left',10,cWidth,10);
    };


    return (
        <div className={`${visible} failures-window `} id="failure-window">
            <div className="backdrop" onClick={() => { setVisible("d-none") }} id="backdrop"> </div>
            <div className="row justify-content-center">
                <div className="col-12 p- 2">
                    <div className="error-list " data-name="error-tags">
                    </div>
                </div>
                <div className="col-12 p-2">
                    <div className="d-flex justify-content-start flex-wrap overflow">
                        <div className="back-arrow">
                            <img src={BackIcon} onClick={moveLeft} alt="" id="slideLeft" />
                        </div>
                        <div className="modal-button-container" id="option-window">
                            <div className="r-1">
                                <button className="button">Missing Key</button>
                                <button className="button">Peel Off</button>
                                <button className="button">Missing Key's Support</button>
                                <button className="button">Damaged Screw Post</button>
                                <button className="button">please earase</button>
                                <button className="button">please earase</button>
                            </div>
                            <div className="r-2">
                                <button className="button">Scratched</button>
                                <button className="button">Missing Hook</button>
                                <button className="button">Missing Screw Post</button>
                                <button className="button">please earase</button>
                                <button className="button">please earase</button>
                                <button className="button">please earase</button>
                            </div>
                        </div>
                        <div className="foward-arrow">
                            <img src={FowardIcon} onClick={moveRight} alt="" id="slideRight" />
                        </div>
                    </div>
                </div>
                {/* Failure Buttons */}
                <div className="col-12 p-2">
                    <div className="submit-btn" onClick={() => { setVisible("d-none") }} id="submit-btn">
                        <button>Complete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FailuresWindow;