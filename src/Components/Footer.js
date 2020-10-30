import React from 'react'
import LocationLogo from '../Images/location.svg'

const Footer = () => {
    return (
        <footer>
            <div className="footer-style pl-2 pt-1 d-flex text-center align-items-center">
            <figure className="location-img">
                <img src={LocationLogo} alt=""/>
                <figcaption className="caption-location text-white">Location</figcaption>
            </figure>
            </div>
        </footer>
    )
}

export default Footer;