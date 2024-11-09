import React from "react";
import FooterBack from "../assest/Footer-back.png";
import Fastdelivery from "../assest/f-delivery.png";
import SecurePayment from "../assest/s-payment.png";
import VarietyMenu from "../assest/v-menus.png";
import Logo from "../assest/logo 1.png";
import SocialImg from "../assest/social.png";
import PaymentIcon from '../assest/Payment-icon.png'

function Footer() {
    const urbanist = {
    fontFamily: "Urbanist",
  };
  return (
    <div className="w-full h-[1500px] md:h-[700px] relative border-t-[1px] border-yellow-600">
      {/* Background image */}
      <img
        src={FooterBack}
        alt="footer-back"
        className="w-full h-full object-cover absolute mix-blend-overlay"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="absolute w-full md:w-[80%] border-b-[1px] border-dashed flex flex-col md:flex-row justify-between items-center top-10 py-5 px-10 left-1/2 transform -translate-x-1/2">
        <div>
          <img src={Fastdelivery} alt="fast-delivery" />
        </div>
        <div>
          <img src={SecurePayment} alt="secure-payment" />
        </div>
        <div>
          <img src={VarietyMenu} alt="variety-menu" />
        </div>
      </div>
      <div className="absolute w-full md:w-[80%] top-[500px] md:top-[240px] left-1/2 transform -translate-x-1/2 flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-[25%] p-5 text-center md:text-left">
          <h3 style={urbanist} className="text-[#fff] text-xl font-[500]">Quick Links</h3>
          <p className="w-[40px] h-[2px] bg-yellow-600 my-2 mx-auto sm:mx-0"></p>
          <ul>
            <li style={urbanist} className="text-sm text-[#fff] my-4 font-[500] cursor-pointer">Home</li>
            <li style={urbanist} className="text-sm text-[#fff] my-4 font-[500] cursor-pointer">About Us</li>
            <li style={urbanist} className="text-sm text-[#fff] my-4 font-[500] cursor-pointer">Our Menu</li>
            <li style={urbanist} className="text-sm text-[#fff] my-4 font-[500] cursor-pointer">Gallery</li>
            <li style={urbanist} className="text-sm text-[#fff] my-4 font-[500] cursor-pointer">Catering</li>
            <li style={urbanist} className="text-sm text-[#fff] my-4 font-[500] cursor-pointer">Contact</li>
          </ul>
        </div>

        <div className="w-full md:w-[50%] border-x-[1px] border-dashed p-5 flex flex-col justify-center items-center">
          <div className="w-[200px] sm:w-[150px] mb-4">
            <img src={Logo} alt="Logo" className="w-full" />
          </div>
          <div className="w-[80%] sm:w-[50%] mx-auto">
            <div className="w-full">
              <input type="Email" placeholder="Enter Your Email.." className="w-full px-1 py-2 bg-transparent outline-none border-[1px]" />
            </div>
            <div className="w-full">
              <button className="w-full bg-[#D19130] uppercase px-1 py-2 my-3 hover:opacity-65 hover:text-[#fff]">Subscribe</button>
            </div>
          </div>
          <div className="w-[50%] mx-auto my-2">
            <img src={SocialImg} alt="Social-img" className="mx-auto" />
          </div>
        </div>
        <div className="w-full md:w-[25%]  py-5 px-10 text-center md:text-left">
          <h3 style={urbanist} className="text-[#fff] text-xl font-[500]">Catering Services</h3>
          <p className="w-[40px] h-[2px] bg-yellow-600 my-2 mx-auto sm:mx-0"></p>
          <ul>
            <li style={urbanist} className="text-sm text-[#fff] my-4 font-[500] cursor-pointer">Corporate Events</li>
            <li style={urbanist} className="text-sm text-[#fff] my-4 font-[500] cursor-pointer">Wedding Events</li>
            <li style={urbanist} className="text-sm text-[#fff] my-4 font-[500] cursor-pointer">Social Events</li>
            <li style={urbanist} className="text-sm text-[#fff] my-4 font-[500] cursor-pointer">Private Events</li>
            <li style={urbanist} className="text-sm text-[#fff] my-4 font-[500] cursor-pointer">Birthday Party</li>
            <li style={urbanist} className="text-sm text-[#fff] my-4 font-[500] cursor-pointer">Anniversary</li>
          </ul>
        </div>
      </div>
      <div className="absolute w-full md:w-[80%] bottom-0 border-t-[1px] border-dashed  left-1/2 transform -translate-x-1/2 flex flex-col md:flex-row items-center justify-between px-20 py-5">
      <div>
        <p className="text-[10px] sm:text-sm font-[300] text-[#fff]">Copyright © 2024 Thali. All rights reserved.</p>
      </div>
      <div className="hidden sm:block">
        <img src={PaymentIcon} alt="payment-icon" />
      </div>

      </div>
    </div>
  );
}

export default Footer;
