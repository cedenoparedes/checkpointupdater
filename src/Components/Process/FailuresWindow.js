import React from 'react'
import BackIcon from '../../Images/back-arrow.svg'
import FowardIcon from '../../Images/foward-arrow.svg'

const FailuresWindow = (props) => {

    const { visible, setVisible } = props

    const failureButtons = document.querySelectorAll('.button');

    const sideScroll = (element,direction,speed,distance,step) =>{
        console.log(failureButtons);
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

    const scrollHandler = (direction) =>{ 
        const container = document.getElementById('option-window');
        const cWidth = container.offsetWidth;
        sideScroll(container,direction,10,cWidth,10);
    };

    const prueba = [
        {
          FailureName: "Peel Off",
          FailureId: 10
        },
        {
            FailureName: "Missing Hook",
            FailuteId: 11
        }
    ]

    const addTagToListTags = (btn) => {
        const errorList = document.querySelector('.error-list');
        console.log(btn);
        
        const button = document.getElementById(btn);
        const tagAlreadyExist = VerifyIfThereIsATag(button.textContent);
    
        if(!tagAlreadyExist){
            let newTag = document.createElement('span');
            newTag.classList.add('error-tag');
            newTag.innerHTML = `${button.textContent}<span class="close-tag"></span>`;
            errorList.appendChild(newTag);

            const closeTag = newTag.querySelector('.close-tag');
            AddEraseFunctionality(closeTag);
        }
    }
    const VerifyIfThereIsATag = (textContent) => {
        const errors = document.querySelectorAll('.error-list > .error-tag');
        let exist = false;
        errors.forEach(error =>{
            if(textContent == error.textContent){
                exist = true;
            }
        });
    
        if(exist === true){
            return true;
        }
        else{
            return false;
        }
    };

    const AddEraseFunctionality = closeTag =>{
    
        closeTag.addEventListener('click', ()=> {
            let parent = closeTag.parentNode;
            let grandParent = parent.parentNode;
            grandParent.removeChild(parent);
        });
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
                        <div type="button" className="back-arrow">
                            <img src={BackIcon} onClick={() => scrollHandler('left')} alt="" id="slideLeft" />
                        </div>
                        <div className="modal-button-container" id="option-window">
                            <div className="r-1">

                                {/* { prueba.map((pruebas) => <button className="button" id={pruebas.key}>{pruebas[pruebas.key].FailureName}</button>)} */}

                                {/* <button className="button" id="Presionado" onClick={() => addTagToListTags('Presionado')}>Missing Key</button>
                                <button className="button">Peel Off</button>
                                <button className="button">Missing Key's Support</button>
                                <button className="button">Damaged Screw Post</button>
                                <button className="button">please earase</button>
                                <button className="button">please earase</button> */}
                            </div>
                            <div className="r-2">
                                <button className="button" id="">Scratched</button>
                                <button className="button">Missing Hook</button>
                                <button className="button">Missing Screw Post</button>
                                <button className="button">please earase</button>
                                <button className="button">please earase</button>
                                <button className="button">please earase</button>
                            </div>
                        </div>
                        <div type="button" className="foward-arrow">
                            <img src={FowardIcon} onClick={() => scrollHandler('right')} alt="" id="slideRight" />
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