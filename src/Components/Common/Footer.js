import React, { useEffect } from 'react'
import images from './Images/index'

const Footer = () => {

    const jpson = require('../../../package.json');
    const versionString = jpson.version
    const version = <p id="version-text"> {versionString}</p>

    console.log(version)


    return (
        <footer className="Footer">
            <div className="footer-style pl-2 pt-1 d-flex text-center align-items-center">
                <figure className="location-img">
                    <img src={images.locationIcon} alt="" />
                    <figcaption className="caption-location text-white">Location</figcaption>
                </figure>
                <spam> {version}</spam>
            </div>
        </footer>
    )
}

export default Footer;