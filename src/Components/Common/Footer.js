import React from 'react'
import images from './Images/index'
const { ipcRenderer } = window.require("electron");

const Footer = () => {

    const jpson = require('../../../package.json');
    const versionString = jpson.version
    const version = <p id="version-text"> V: {versionString}</p>

   
    const notification = document.getElementById('notification');
    const message = document.getElementById('message');
    const restartButton = document.getElementById('restart-button');

    ipcRenderer.on('update_available', () => {
    ipcRenderer.removeAllListeners('update_available');
    message.innerText = 'A new update is available. Downloading now...';
    notification.classList.remove('hidden');
    });
    
    ipcRenderer.on('update_downloaded', () => {
    ipcRenderer.removeAllListeners('update_downloaded');
    message.innerText = 'Update Downloaded. It will be installed on restart. Restart now?';
    restartButton.classList.remove('hidden');
    notification.classList.remove('hidden');
    });


    return (
        <footer className="Footer container-fluid ">
            <div className="row">
                <div className="col-6 footer-style pl-2 pt-1 d-flex text-center align-items-center">
                    <figure className="location-img">
                        <img src={images.locationIcon} alt="" />
                        <figcaption className="caption-location text-white">Location</figcaption>
                    </figure>
                </div>
                <div className="col-6 footer-style  d-flex justify-content-end align-items-end">
                    <spam> {version}</spam>
                </div>
            </div>
            <div id="notification" class="hidden">
                <p id="message"></p>
                <button id="close-button" onClick="closeNotification()">
                        Close
                </button>
                <button id="restart-button" onClick="restartApp()" class="hidden">
                        Restart
                </button>
            </div>
        </footer>

    )
}

export default Footer;