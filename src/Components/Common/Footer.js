import React, { useEffect } from 'react'
import images from './Images/index'

const Footer = () => {

    const jpson = require('../../../package.json');
    const versionString = jpson.version
    const version = <p id="version-text"> {versionString}</p>

    console.log(version)


    return (
        <footer className="Footer">
            <div className="row">
                <div className="col-6 footer-style pl-2 pt-1 d-flex text-center align-items-center">
                    <figure className="location-img">
                        <img src={images.locationIcon} alt="" />
                        <figcaption className="caption-location text-white">Location</figcaption>
                    </figure>
                </div>
                <div className="col-6 footer-style  d-flex justify-content-end">
                    <spam> {version}</spam>
                </div>
            </div>
        </footer>
    )
}

export default Footer;