import React from "react";
import './Footer.css'
import img1 from './Images/Amazon-Logo-Footer.jpg'
export const Footer = () => {
  return (
    <div className="Footer">
      <div className="Flex">
        <div>
          <p>Get to Know Us</p>
          <p>About Us</p>
          <p>Careers</p>
          <p>Press Releases</p>
          <p>Amazon Science</p>
        </div>
        <div>
          <p>Connect With Us</p>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>instagram</p>
        </div>
        <div>
          <p>Make Money with Us</p>
          <p>Sell on Amazon</p>
          <p>Sell under Amazon Accelerator</p>
          <p>Amazon Global Selling</p>
          <p>Become an Affiliate</p>
          <p>Fulfillment by Amazon</p>
          <p>Advertise Your Products</p>
          <p>Amazon Pay on Merchants</p>
        </div>
      </div>
      <img className="AmazonFooterLogo" src={img1} alt="" srcset="" />
    </div>
  );
};
