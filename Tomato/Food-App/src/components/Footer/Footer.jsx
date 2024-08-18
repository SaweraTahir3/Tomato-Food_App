import React from 'react'
import './Footer.css'
import { assets } from '../../Food Del Frontend Assets/assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt={assets.facebook_icon} />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, iusto! <br /> Lorem ipsum  dolor nam iusto? Corporis, suscipit laboriosam! </p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt='' />
                        <img src={assets.twitter_icon} alt='' />
                        <img src={assets.linkedin_icon} alt='' />
                    </div>

                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>home</li>
                        <li>about us</li>
                        <li>delivery</li>
                        <li>privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+1-231-111-568</li>
                        <li>contact@tomate.gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">
                copyright 2024 @ Tomato.com - all right  Reserved
            </p>

        </div>
    )
}

export default Footer
