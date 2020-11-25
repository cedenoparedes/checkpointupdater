import React, { useContext, useState } from 'react'
import BackIcon from '../../Images/back-arrow.svg'
import FowardIcon from '../../Images/foward-arrow.svg'
import GlobalContext from '../../context/globalcontext'
import { saveProcess } from '../../api/process-api.js'
import toastr from "toastr";

const FailuresWindow = (props) => {
    const [, , contextMiddleware] = useContext(GlobalContext)
    const userInfo = contextMiddleware.getTokenClaims();
    // const [failsParams, setFailsParams] = useState({
    //     CustomerCode: "",
    //     ProcessName: "",
    //     ModelName: "",
    //     Result: "",
    //     EmployeeCode: "",
    //     FailureName: []
    // })
    const [failuresToSave, setFailuresToSave] = useState([]);
    const token = contextMiddleware.getToken();
    const {
        visible,
        setVisible,
        failures,
        model,
        process,
        customer,
        setTotalPass,
        setTotalFail,
        setTotalProcessed
    } = props


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
            setFailuresToSave([...failuresToSave, button.textContent]);
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
            setFailuresToSave(() => {
                let fails = [...failuresToSave];
                fails = fails.filter((n) => n !== parent.textContent)
                return fails;
            });
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


    /// fail method handler
    const failHandler = (failsParams, token) => {
        saveProcess(failsParams, token)
            .then((Response) => {
                setTotalPass(Response.totalPass)
                setTotalFail(Response.totalFail)
                setTotalProcessed(Response.totalProcessed)
            }).catch((error) => {
                console.log(error);
                setTimeout(() => {
                    toastr.error("Call failed.");
                }, 1000);
            })
    }

    const setFailures = (failHandler, token) => {

        const obj = {
            CustomerCode: customer,
            ProcessName: process,
            ModelName: model,
            Result: "fail",
            EmployeeCode: userInfo.employeeCode,
            FailureName: failuresToSave
        }
        ClearListError();
        setFailuresToSave([]);
        failHandler(obj, token);

    }

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
                        <div className="back-arrow hoverbuttons">
                            <img src={BackIcon} onClick={() => scrollHandler('left')} alt="" id="slideLeft" />
                        </div>
                        <div className="modal-button-container" id="option-window">

                            <div className="r-1">
                                {failures.map((failure, i) => {
                                    if (i % 2 === 0) {
                                        return <button className="button" key={i} id={i} onClick={() => addTagToListTags(i)}>{failure.failureName}</button>
                                    }
                                })}
                            </div>

                            <div className="r-2">
                                {failures.map((failure, i) => {
                                    if (i % 2 !== 0) {
                                        return <button className="button" key={i} id={i} onClick={() => addTagToListTags(i)}>{failure.failureName}</button>
                                    }
                                })}
                            </div>
                        </div>
                        <div className="foward-arrow hoverbuttons">
                            <img src={FowardIcon} onClick={() => scrollHandler('right')} alt="" id="slideRight" />
                        </div>
                    </div>
                </div>
                <div className="col-12 p-2">
                    <div className="submit-btn" onClick={() => setFailures(failHandler, token)} id="submit-btn">
                        <button>Complete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FailuresWindow;