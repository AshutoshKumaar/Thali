import React from "react";
import BannerImg from "../assest/Mask.png";
import BookTable from '../assest/Book.png';

function Herosection() {
  const FontObject = {
    fontFamily: "Yantramanav"
  };
   
  const urbanist = {
    fontFamily: "Urbanist"
  };

  return (
    <div 
      style={{
        backgroundImage: `url(${BannerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "86vh",
        fontFamily: "Yeseva One"
      }} 
      className="flex flex-col justify-center px-6 md:px-16 lg:px-32"
    >
      {/* Offer Section */}
      <div style={FontObject} className="flex flex-row justify-start items-center mb-2">
        <p className="w-[30px] md:w-[50px] h-[2px] bg-[#D19130]"></p>
        <p className="text-[14px] md:text-[18px] lg:text-[20px] ml-3 md:ml-5 text-[#fff] font-[300] uppercase">
          Get <span className="text-[#F7B759]">20%</span> off First Booking
        </p>
      </div>

      {/* Heading Section */}
      <div>
        <h3 className="text-[#fff] text-[32px] md:text-[50px] lg:text-[70px] font-[500] leading-[40px] md:leading-[60px] lg:leading-[70px]">
          Flavors Inspired<br />by the Seasons
        </h3>
      </div>

      {/* Subtitle */}
      <p 
        style={urbanist} 
        className="text-[14px] md:text-[16px] font-[400] text-[#fff] leading-[30px] md:leading-[50px] lg:leading-[70px] mt-2 md:mt-4"
      >
        Come with family & feel the joy of Indian food.
      </p>

      {/* Button */}
      <div className="mt-5 w-[120px] md:w-[150px] cursor-pointer">
        <button>
          <img src={BookTable} alt="button-img" className="w-full h-full" />
        </button>
      </div>
    </div>
  );
}

export default Herosection;
