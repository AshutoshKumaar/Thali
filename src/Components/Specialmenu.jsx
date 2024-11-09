import React from "react";
import LineShape from "../assest/shape.png";
import Breakfast from "../assest/BreakFast.png";
import Launch from "../assest/lauch.png";
import Dinner from "../assest/dinner.png";

function Specialmenu() {
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
    <div className="bg-[#171819] px-4 md:px-0">
      <section className="text-center">
        <div className="p-5">
          <p
            style={FontObject}
            className="uppercase text-[#F7B759] mb-3 font-[400] text-[16px] md:text-[20px]"
          >
            Delightful Menu
          </p>
          <h2
            style={YesevaFont}
            className="text-[36px] md:text-[60px] text-[#fff] leading-10 font-[400]"
          >
            Special Menu
          </h2>
        </div>
        <div>
          <img src={LineShape} alt="Shape" className="mx-auto w-[80px] md:w-auto" />
        </div>
      </section>
      <section className="py-10">
        <div className="w-full md:w-[1000px] mx-auto flex flex-col md:flex-row gap-8 md:gap-0 justify-between items-center">
          <div className="w-[280px] md:w-[300px] group border-[1px] rounded-[100px] border-[#F7B759] hover:border-none hover:bg-[#2B2C2D] duration-100 ease-in-out cursor-pointer p-4 md:p-0">
            <div className="w-[200px] md:w-[250px] h-[200px] md:h-[250px] rounded-full border-4 mx-auto border-slate-400 group-hover:border-yellow-500 my-5">
              <img
                src={Breakfast}
                alt="Breakfast"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="text-center">
              <p
                style={urbanist}
                className="text-[24px] md:text-[28px] text-[#fff] font-[500]"
              >
                Breakfast
              </p>
            </div>
            <div className="text-center my-4 md:my-8">
              <button
                style={FontObject}
                className="px-3 md:px-4 py-2 border-y-[1px] border-[#F7B759] font-[300] uppercase text-[#D19130] text-[12px] md:text-[14px]"
              >
                View Menu
              </button>
            </div>
          </div>
          <div className="w-[280px] md:w-[300px] group border-[1px] rounded-[100px] border-[#F7B759] hover:border-none hover:bg-[#2B2C2D] duration-100 ease-in-out cursor-pointer p-4 md:p-0">
            <div className="w-[200px] md:w-[250px] h-[200px] md:h-[250px] rounded-full border-4 mx-auto border-slate-400 my-5 group-hover:border-yellow-500">
              <img
                src={Launch}
                alt="Launch"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="text-center">
              <p
                style={urbanist}
                className="text-[24px] md:text-[28px] text-[#fff] font-[500]"
              >
                Lunch
              </p>
            </div>
            <div className="text-center my-4 md:my-8">
              <button
                style={FontObject}
                className="px-3 md:px-4 py-2 border-y-[1px] border-[#F7B759] font-[300] uppercase text-[#D19130] text-[12px] md:text-[14px]"
              >
                View Menu
              </button>
            </div>
          </div>
          <div className="w-[280px] md:w-[300px] group border-[1px] rounded-[100px] border-[#F7B759] hover:border-none hover:bg-[#2B2C2D] duration-100 ease-in-out cursor-pointer p-4 md:p-0">
            <div className="w-[200px] md:w-[250px] h-[200px] md:h-[250px] rounded-full border-4 mx-auto border-slate-400 my-5 group-hover:border-yellow-500">
              <img
                src={Dinner}
                alt="Dinner"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="text-center">
              <p
                style={urbanist}
                className="text-[24px] md:text-[28px] text-[#fff] font-[500]"
              >
                Dinner
              </p>
            </div>
            <div className="text-center my-4 md:my-8">
              <button
                style={FontObject}
                className="px-3 md:px-4 py-2 border-y-[1px] border-[#F7B759] font-[300] uppercase text-[#D19130] text-[12px] md:text-[14px]"
              >
                View Menu
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Specialmenu;
