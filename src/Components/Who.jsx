import React from 'react';
import LineShape from "../assest/shape.png";
import Timing from '../assest/timming.png';
import Restautrant from '../assest/restaurant.png';
import ReadMore from '../assest/Read-more.png';
import VideoImg from '../assest/video.png';
import ChilliBackground from '../assest/Chili.png';
import TowelBackground from '../assest/Towel.png';

function Who() {
  const FontObject = {
    fontFamily: "Yantramanav"
  };
  const YesevaFont = {
    fontFamily: "Yeseva One"
  };
  const urbanist = {
    fontFamily: "Urbanist"
  };

  return (
    <div className="bg-[#171819] p-6 md:p-16 relative">
      <section className="text-center">
        <div className="p-5">
          <p style={FontObject} className="uppercase text-[#F7B759] mb-3 font-[400] text-[16px] md:text-[20px]">Who we are</p>
          <h2 style={YesevaFont} className="text-[30px] md:text-[60px] text-[#fff] leading-snug md:leading-10 font-[400]">Welcome to Thali</h2>
        </div>
        <div>
          <img src={LineShape} alt="Shape" className="mx-auto w-[80px] md:w-auto" />
        </div>
        <div className="w-full md:w-[800px] mx-auto my-5">
          <p style={urbanist} className="text-[#fff] text-[14px] md:text-[16px]">
            Curabitur tempor elit in sodales scelerisque. Donec eget eros ac diam gravida sodales et egestas risus. Praesent non purus lectus. Duis iaculis et orci eget dapibus. Nulla ipsum risus, lobortis quis lorem nec, ornare viverra felis. Nunc non accumsan mauris.
          </p>
        </div>
      </section>

      <section className="mt-8 md:mt-16">
        <div className="flex flex-col md:flex-row justify-between w-full md:w-[1000px] mx-auto">
          <div className="w-full md:w-[300px] h-auto md:h-[500px] mb-6 md:mb-0">
            <p style={urbanist} className="text-[#fff] text-[14px] md:text-[16px] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus pretium lectus, ut mollis libero efficitur ut. Nam sodales aliquet sapien. In lacinia lacinia dignissim. Ut eu est a odio porttitor pharetra. In eu finibus massa. Class aptent taciti sociosqu ad litora torquent per.
            </p>
            <div className="my-5 md:my-10">
              <button>
                <img src={ReadMore} alt="Read-more" className="w-[120px] md:w-[140px]" />
              </button>
            </div>
            <div className="mt-8 md:mt-[54px]">
              <img src={VideoImg} alt="Video-img" className="h-[200px] md:h-full mx-auto md:mx-0" />
            </div>
          </div>
          <div className="w-full md:w-[300px] h-auto md:h-[500px] mb-6 md:mb-0">
            <img src={Restautrant} alt="Restaurant" className="w-full h-full object-cover" />
          </div>
          <div className="w-full md:w-[300px] h-auto md:h-[500px]">
            <img src={Timing} alt="Timing" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-wrap items-center justify-between w-full md:w-[1000px] mx-auto p-5 md:p-10">
          <div className="text-center w-1/2 md:w-auto mb-6 md:mb-0">
            <p style={YesevaFont} className="text-[36px] md:text-[48px] text-[#fff]">150+</p>
            <p style={FontObject} className="text-[#F7B759] uppercase font-[300] text-[12px] md:text-[16px]">daily order</p>
          </div>
          <div className="text-center w-1/2 md:w-auto mb-6 md:mb-0">
            <p style={YesevaFont} className="text-[36px] md:text-[48px] text-[#fff]">100+</p>
            <p style={FontObject} className="text-[#F7B759] uppercase font-[300] text-[12px] md:text-[16px]">special dishes</p>
          </div>
          <div className="text-center w-1/2 md:w-auto mb-6 md:mb-0">
            <p style={YesevaFont} className="text-[36px] md:text-[48px] text-[#fff]">30+</p>
            <p style={FontObject} className="text-[#F7B759] uppercase font-[300] text-[12px] md:text-[16px]">expert chef</p>
          </div>
          <div className="text-center w-1/2 md:w-auto">
            <p style={YesevaFont} className="text-[36px] md:text-[48px] text-[#fff]">10+</p>
            <p style={FontObject} className="text-[#F7B759] uppercase font-[300] text-[12px] md:text-[16px]">awards won</p>
          </div>
        </div>
      </section>

      {/* Absolute Positioned Images */}
      <div className="absolute right-3 top-8 w-[60px] md:w-[150px]">
        <img src={TowelBackground} alt="Towel-background" className="w-full z-0" />
      </div>
      <div className="absolute w-[60px] md:w-[200px] bottom-10 left-4">
        <img src={ChilliBackground} alt="Chilli-background" className="w-full" />
      </div>
    </div>
  );
}

export default Who;
