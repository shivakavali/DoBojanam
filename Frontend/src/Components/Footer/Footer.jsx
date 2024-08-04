import React from "react";
import { assets } from "../../assets/frontend_assets/assets";
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
      <div className="footer-left">
        <img src={assets.logo} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nihil
          repudiandae, debitis ea non esse iure natus laborum aliquam velit
          facere, neque saepe ratione nesciunt itaque ipsum porro, temporibus
          dolorem?
        </p>
        <div className="footer-social-icons">
          <img src={assets.facebook_icon} alt="" />
          <img src={assets.twitter_icon} alt="" />
          <img src={assets.linkedin_icon} alt="" />
        </div>
      </div>
      <div className="footer-middle">
        <h2>COMPANY</h2>
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Delivery</li>
          <li>Privacy policy</li>
        </ul>
      </div>
      <div className="footer-right">
        <h2>GET IN TOUCH</h2>
        <ul>
        <li>+1-312-478-9753</li>
        <li>contact@tomato.com</li>
        </ul>
      </div>
      </div>
      <hr />
      <p>Copyright © 2024 Tomato. All rights reserved.</p>
    </div>
  );
};

export default Footer;
