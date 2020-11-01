import React, {useEffect} from 'react';
import ProcessMenuForm from './ProcessMenuForm.js';


const Index = () => {
    useEffect(() => {

        return () => {
            /* eslint-disable no-undef */
            // form buttons
            const buttonClient = document.querySelector('#btn-client');
            const textClient = document.querySelector('#tb-client');
            const buttonModel = document.querySelector('#btn-model');
            const textModel = document.querySelector('#tb-model');
            const buttonProcess = document.querySelector('#btn-process');
            const textProcess = document.querySelector('#tb-process');

            // Modal
            const backdrop = document.querySelector('#backdrop');
            const modalClient = document.querySelector('#modal-client');
            const modalModel = document.querySelector('#modal-model');
            const modalProcess = document.querySelector('#modal-process');

            //Modal buttons
            const modalClientButtons = document.querySelectorAll('.btn-client');
            const modalModelButtons = document.querySelectorAll('.btn-model');
            const modalProcessButtons = document.querySelectorAll('.btn-process');

            const showModal = modal => {
                backdrop.classList.remove('d-none');
                backdrop.classList.add('d-block');
                modal.classList.remove('d-none');
                modal.classList.add('d-block');
            };
            const hideModal = () => {
                if (
                    modalClient.classList.contains('d-block') ||
                    modalModel.classList.contains('d-block') ||
                    modalProcess.classList.contains('d-block')
                ) {
                    backdrop.classList.remove('d-block');
                    backdrop.classList.add('d-none');

                    if (!modalClient.classList.contains('d-none')) {
                        modalClient.classList.remove('d-block');
                        modalClient.classList.add('d-none');
                    }
                    if (!modalModel.classList.contains('d-none')) {
                        modalModel.classList.remove('d-block');
                        modalModel.classList.add('d-none');
                    }
                    if (!modalProcess.classList.contains('d-none')) {
                        modalProcess.classList.remove('d-block');
                        modalProcess.classList.add('d-none');
                    }
                }

            }

            buttonClient.addEventListener("click", () => { showModal(modalClient); });
            buttonModel.addEventListener('click', () => { showModal(modalModel); });
            buttonProcess.addEventListener('click', () => { showModal(modalProcess); });

            backdrop.addEventListener('click', () => { hideModal(); });

            for (const button of modalClientButtons) {
                button.addEventListener('click', () => {
                    textClient.value = button.nextElementSibling.textContent;
                    hideModal();
                })
            }
            for (const button of modalModelButtons) {
                button.addEventListener('click', () => {
                    textModel.value = button.nextElementSibling.textContent;
                    hideModal();
                })
            }
            for (const button of modalProcessButtons) {
                button.addEventListener('click', () => {
                    textProcess.value = button.nextElementSibling.textContent;
                    hideModal();
                })
            }

            const buttonRight = document.getElementById('slideRight');
            const buttonLeft = document.getElementById('slideLeft');

            buttonRight.addEventListener('click', () => {
                console.log('nothing');
                let container = document.getElementById('option-window');
                cWidth = container.offsetWidth;
                sideScroll(container, 'right', 10, cWidth, 10);
            });
            buttonLeft.addEventListener('click', () => {
                console.log('nothing');
                let container = document.getElementById('option-window');
                cWidth = container.offsetWidth;
                sideScroll(container, 'left', 10, cWidth, 10);
            });

            function sideScroll(element, direction, speed, distance, step) {
                scrollAmount = 0;
                var slideTimer = setInterval(function () {
                    if (direction == 'left') {
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
        }
    }, [])



    return (
        <ProcessMenuForm />
    )
}

export default Index;