import React from "react";
import MaskGroupImg from "../assest/Mask group.png";
import LineShape from "../assest/shape.png";
import BookNowButton from "../assest/Book-now.png";
import WineTable from "../assest/Wine.png";
import Balcony from "../assest/Balcony.png";
import Garden from "../assest/Garden.png";

function OurCatering() {
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
    <div className="py-10 px-4 md:px-0">
      <section className="w-full flex flex-col lg:flex-row">
        <div className="w-full lg:w-2/4 h-[400px] lg:h-[800px] relative mb-8 lg:mb-0">
          <img
            src={MaskGroupImg}
            alt="Mask-Group"
            className="w-full h-full absolute object-cover mix-blend-overlay"
          />
          <div className="z-10 mx-auto lg:ml-40 mt-20 lg:mt-40">
            <p
              style={FontObject}
              className="uppercase text-[#F7B759] mb-3 font-[500] text-[16px] lg:text-[20px]"
            >
              Our Services
            </p>
            <h2
              style={YesevaFont}
              className="text-[30px] lg:text-[60px] text-[#fff] leading-[40px] lg:leading-[70px] font-[400]"
            >
              Our Catering Services
            </h2>
            <div>
              <img src={LineShape} alt="Shape" className="mx-auto" />
            </div>
          </div>
        </div>

        {/* Corporate Events Section */}
        <div className="w-full lg:w-1/4 bg-[#131313] h-[400px] lg:h-[800px] mb-8 lg:mb-0">
          <div className="w-full h-1/2 flex flex-col justify-center items-center">
            <h3
              style={urbanist}
              className="text-2xl lg:text-3xl font-semibold text-[#fff] mb-5"
            >
              Corporate Events
            </h3>
            <p
              style={urbanist}
              className="text-[#F2EDED] font-light text-center text-[14px] lg:text-[15px]"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              maximus pretium lectus, ut mollis libero efficitur.
            </p>
            <div className="mt-8 w-[120px]">
              <button>
                <img src={BookNowButton} alt="Book_now" className="w-full" />
              </button>
            </div>
          </div>
          <div className="w-full h-1/2">
            <img src={WineTable} alt="wine" className="w-full h-full" />
          </div>
        </div>

        {/* Wedding Events Section */}
        <div className="w-full lg:w-1/4 bg-[#131313] h-[400px] lg:h-[800px] mb-8 lg:mb-0">
          <div className="w-full h-1/2">
            <img src={Balcony} alt="wine" className="w-full h-full" />
          </div>
          <div className="w-full h-1/2 flex flex-col justify-center items-center">
            <h3
              style={urbanist}
              className="text-2xl lg:text-3xl font-semibold text-[#fff] mb-5"
            >
              Wedding Events
            </h3>
            <p
              style={urbanist}
              className="text-[#F2EDED] font-light text-center text-[14px] lg:text-[15px]"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              maximus pretium lectus, ut mollis libero efficitur.
            </p>
            <div className="mt-8 w-[120px]">
              <button>
                <img src={BookNowButton} alt="Book_now" className="w-full" />
              </button>
            </div>
          </div>
        </div>

        {/* Birthday Party Section */}
        <div className="w-full lg:w-1/4 bg-[#131313] h-[400px] lg:h-[800px]">
          <div className="w-full h-1/2 flex flex-col justify-center items-center">
            <h3
              style={urbanist}
              className="text-2xl lg:text-3xl font-semibold text-[#fff] mb-5"
            >
              Birthday Party
            </h3>
            <p
              style={urbanist}
              className="text-[#F2EDED] font-light text-center text-[14px] lg:text-[15px]"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              maximus pretium lectus, ut mollis libero efficitur.
            </p>
            <div className="mt-8 w-[120px]">
              <button>
                <img src={BookNowButton} alt="Book_now" className="w-full" />
              </button>
            </div>
          </div>
          <div className="w-full h-1/2">
            <img src={Garden} alt="wine" className="w-full h-full" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurCatering;
