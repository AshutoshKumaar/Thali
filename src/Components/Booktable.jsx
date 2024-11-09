import React from "react";
import Mskgroup from "../assest/Mask-group-3.png";
import LineShape from "../assest/shape.png";
import Happymale from '../assest/Happy-male.png';
import ChilliBackground from '../assest/Chili.png';
import OnionImg from '../assest/Onion.png';

function Booktable() {
  const FontObject = {
    fontFamily: "Yantramanav",
  };
  const YesevaFont = {
    fontFamily: "Yeseva One",
  };
  const urbanist = {
    fontFamily: "Urbanist",
  };
  return (
    <div className="bg-[#171819] hidden md:block relative">
      <section>
        <div className="w-full h-[100%] md:h-[700px] relative">
          <img
            src={Mskgroup}
            alt="mskGroup"
            className="w-full h-full absolute object-cover mix-blend-overlay"
          />
          <div className="text-[#fff] w-[80%] sm:w-[50%] mx-auto pt-32">
            <h3
              style={YesevaFont}
              className="text-[30px] sm:text-[60px] text-center leading-[50px] sm:leading-[70px]"
            >
              The Best Food for the Best Moments
            </h3>
            <p
              style={urbanist}
              className="text-center text-[12px] sm:text-[16px] text-[#F2EDED] font-normal mt-1"
            >
              Vivamus maximus pretium lectus, ut mollis libero efficitur.
            </p>
            <div className="my-8 text-center cursor-pointer">
              <button className="outline-double py-2 px-6 uppercase outline-[#D19130] text-[#D19130] cursor-pointer">
                Book a Table
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <div className="w-full sm:w-[60%] absolute top-[330px] md:top-[400px] sm:left-72 h-[500px] flex flex-col sm:flex-row">
        <div className="w-full sm:w-[70%]  bg-[#0C0B0A] text-center p-10">
          <p style={FontObject} className="uppercase text-[#F7B759] text-sm font-medium">Online Reservation</p>
          <h2 style={YesevaFont} className="capitalize text-[30px] sm:text-[50px] text-[#fff]">
            Book A Table
          </h2>
          <div className="my-1">
            <img src={LineShape} alt="line-shape" className="mx-auto" />
          </div>
          <div className="my-5">
            <div className="w-full sm:w-[80%] flex flex-col sm:flex-row justify-between items-center mx-auto my-3">
              <input type="text" placeholder="Your Name" className="p-2 outline-none bg-[#393A3A] mb-3 sm:mb-0 w-full sm:w-[45%]" />
              <input type="number" placeholder="Your Number" className="p-2 outline-none bg-[#393A3A] w-full sm:w-[45%]" />
            </div>
            <div className="w-full sm:w-[80%] flex flex-col sm:flex-row justify-between items-center mx-auto">
              <input type="text" placeholder="1 Person" className="p-2 outline-none bg-[#393A3A] w-full sm:w-[30%] mb-2 sm:mb-0" />
              <input type="date" className="py-2 outline-none bg-[#393A3A] w-full sm:w-[30%]  mb-2 sm:mb-0" />
              <input type="time" placeholder="8:30 AM" className="py-2 outline-none bg-[#393A3A] w-full sm:w-[30%]  mb-2 sm:mb-0" />
            </div>
            <div className="w-full sm:w-[80%] mx-auto my-3">
              <textarea placeholder="Messages" className="w-full p-1 h-[100px] bg-[#393A3A] outline-none"></textarea>
            </div>
          </div>
          <div className="text-left w-full sm:w-[80%] mx-auto">
            <button className="bg-[#D19130] py-2 px-4 uppercase outline-double outline-[#fff] w-full sm:w-auto">
              Book A Table
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full sm:w-[40%] h-full bg-[#D19130]">
          <img src={Happymale} alt="Happy-male" className="w-full h-full object-cover mt-[10px]" />
        </div>
      </div>

      {/* Background Images */}
      <img src={ChilliBackground} alt="chili-background" className="absolute right-0 rotate-90 w-32 sm:w-48 hidden sm:block" />
      <img src={OnionImg} alt="Onion-img" className="absolute left-[90px] top-[800px] rotate-90 w-16 sm:w-20 hidden sm:block" />
    </div>
  );
}

export default Booktable;
