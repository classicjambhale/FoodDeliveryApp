import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                 <img src={assets.logo} alt="" />
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sed aut, deserunt debitis libero quos odit dolorum nulla quae dicta maxime reprehenderit, ad aspernatur perferendis reiciendis temporibus dolor molestiae? Ducimus!</p>
                 <div className="footer-social-icon">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                 </div>
            </div>
            <div className="footer-content-center">
                  <h2>COMPANY</h2>
                  <li>Home</li>
                  <li>About us</li>
                  <li>Delivery</li>
                  <li>Privacy policy</li>
            </div>
            <div className="footer-content-right">
                 <h2>GET IN TOUCH</h2>
                 <ul>
                    <li>+91876545678</li>
                    <li>contact@tomato.com</li>
                 </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer