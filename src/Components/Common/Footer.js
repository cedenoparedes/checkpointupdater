import React from 'react'
import images from './Images/index'

const Footer = () => {
    return (
        <footer className="Footer">
            <div className="footer-style pl-2 pt-1 d-flex text-center align-items-center">
                <figure className="location-img">
                    <img src={images.locationIcon} alt="" />
                    <figcaption className="caption-location text-white">Location</figcaption>
                </figure>
            </div>
        </footer>
    )
}

export default Footer;