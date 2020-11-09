import React, { useContext } from 'react'
import BackIcon from '../../Images/back-arrow.svg'
import FowardIcon from '../../Images/foward-arrow.svg'
import GlobalContext from '../../context/globalcontext'

const FailuresWindow = (props) => {
    const [, , contextMiddleware] = useContext(GlobalContext)
    let token = contextMiddleware.getToken();
    const { visible, setVisible, failures, setFailureToSave, failHandler, failsParams } = props
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



    const addTagToListTags = (btn) => {
        const errorList = document.querySelector('.error-list');

        const button = document.getElementById(btn);
        const tagAlreadyExist = VerifyIfThereIsATag(button.textContent);

        if (!tagAlreadyExist) {
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
        errors.forEach(error => {
            if (textContent === error.textContent) {
                exist = true;
            }
        });

        if (exist === true) {
            return true;
        }
        else {
            return false;
        }
    };

    const AddEraseFunctionality = closeTag => {

        closeTag.addEventListener('click', () => {
            let parent = closeTag.parentNode;
            let grandParent = parent.parentNode;
            grandParent.removeChild(parent);
        });
    };

    const ClearListError = () => {
        const errorList = document.querySelector('.error-list');
        setVisible("d-none");
        if (errorList.hasChildNodes()) {
            while (errorList.childNodes.length >= 1) {
                errorList.removeChild(errorList.firstChild);
            }
        }
    }

    const setFailures = () => {
        const errorTags = document.querySelectorAll('.error-list > .error-tag');
        let failures = [];

        errorTags.forEach(error => {
            setFailureToSave(error.textContent);
        });
        ClearListError();
        return console.log(failures);
    }

    async function saveFailures(failHandler, failsParams, token) {
        await setFailures()
            .then(failHandler(failsParams, token))


    };

    return (
        <div className={`${visible} failures-window `} id="failure-window">
            <div className="backdrop" onClick={ClearListError} id="backdrop"> </div>
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
                                {failures.map((failure, i) => {
                                    if (i % 2 === 0) {
                                        return <button className="button" key={i} id={i} onClick={() => addTagToListTags(i)}>{failure.FailureName}</button>
                                    }
                                })}
                            </div>

                            <div className="r-2">
                                {failures.map((failure, i) => {
                                    if (i % 2 !== 0) {
                                        return <button className="button" key={i} id={i} onClick={() => addTagToListTags(i)}>{failure.FailureName}</button>
                                    }
                                })}
                            </div>
                        </div>
                        <div type="button" className="foward-arrow">
                            <img src={FowardIcon} onClick={() => scrollHandler('right')} alt="" id="slideRight" />
                        </div>
                    </div>
                </div>
                <div className="col-12 p-2">
                    <div className="submit-btn" onClick={saveFailures(failHandler, failsParams, token)} id="submit-btn">
                        <button>Complete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FailuresWindow;