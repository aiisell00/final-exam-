import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

import "./index.scss"
const Footer = () => {
  return (
    <footer>
    <div className="container">
      <div className="footer">
      <div className="foot">
      <h1>About Us</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
    </div>
    <div className="foot">
      <h1>Newsletter</h1>
      <p>Stay update with our latest</p>
      <div className="foot-input">
      <input type="text"  /><button><FaArrowRight /></button>
      </div>
    </div>
    <div className="foot">
      <h1>Instagram Feed</h1>
      <div className="foot-img">
      <img src="https://preview.colorlib.com/theme/shop/img/i1.jpg" alt="foot-img" />
      <img src="https://preview.colorlib.com/theme/shop/img/i2.jpg" alt="foot-img" />
      <img src="https://preview.colorlib.com/theme/shop/img/i3.jpg" alt="foot-img" />
      <img src="https://preview.colorlib.com/theme/shop/img/i4.jpg" alt="foot-img" />
      <img src="https://preview.colorlib.com/theme/shop/img/i5.jpg" alt="foot-img" />
      <img src="https://preview.colorlib.com/theme/shop/img/i6.jpg" alt="foot-img" />
      <img src="https://preview.colorlib.com/theme/shop/img/i7.jpg" alt="foot-img" />
      <img src="https://preview.colorlib.com/theme/shop/img/i7.jpg" alt="foot-img" />
      </div>
    </div>
    <div className="foot">
      <h1>Follow Us</h1>
      <p>Let us be social</p>
      <div className="foot-icons">
      <FaFacebookF />
      <FaTwitter />
      <FaFacebookF />
      <FaTwitter />
      </div>
    </div>
      </div>
    <p className='copy-foot'>Copyright ©2024 All rights reserved | This template is made with  by Colorlib</p>
    </div>
    </footer>
  )
}

export default Footer