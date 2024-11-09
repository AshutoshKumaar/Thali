import React from "react";
import LineShape from "../assest/shape.png";
import Dotted from '../assest/Dotted.png';
import StarImg from '../assest/star.png'
import LadyImg from '../assest/lady.png'
import PlayerImg from '../assest/Player.png'
import Branch from '../assest/Branch-two.png'
function Testimonials() {
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
    <div className="pt-60 hidden md:block relative">
      <div className="p-5 text-center">
        <p
          style={FontObject}
          className="uppercase text-[#F7B759] mb-3 font-[400]"
        >
          Testimonials
        </p>
        <h2
          style={YesevaFont}
          className="text-[60px] text-[#fff] leading-10 font-[400]"
        >
          What People are Saying
        </h2>
      </div>
      <div>
        <img src={LineShape} alt="Shape" className="mx-auto" />
      </div>
      <div className="flex flex-row w-[1100px] mx-auto my-5">
        <div className="w-[250px]  border-2 mx-2 rounded-xl border-[#D19130]  p-5 cursor-pointer">
            <div className="bg-[#D19130] w-[50px] h-[50px] rounded-full py-4 px-3">
                <img src={Dotted} alt="Dotted-alt" />
            </div>
            <div>
                <p className="text-2xl my-2 text-[#fff] font-[500]">John Doe</p>
                <div className="my-2">
                    <img src={StarImg} alt="star-img" />
                </div>
                <p style={urbanist} className="text-sm text-[#FFFFFF]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dolor magna, feugiat sit amet orci ut, lobortis elementum enim. Vestibulum ultricies convallis sodales. Fusce volutpat, dolor et tempus rhoncus, odio quam imperdiet velit.</p>
            </div>
        </div>
        <div 
        style={{
      backgroundImage: `url(${LadyImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}
        className="w-[250px] border-2 mx-2 rounded-xl border-[#D19130] flex flex-col justify-center items-center">
        <div className="w-[60px] h-[60px] border-2 border-slate-100 rounded-full flex flex-col justify-center items-center bg-slate-200 bg-opacity-20 cursor-pointer">
        <img src={PlayerImg} alt="player-img" />
        </div>
        </div>
        <div className="w-[250px]  border-2 mx-2 rounded-xl border-[#D19130] p-5 cursor-pointer">
        <div className="bg-[#D19130] w-[50px] h-[50px] rounded-full py-4 px-3">
                <img src={Dotted} alt="Dotted-alt" />
            </div>
            <div>
                <p className="text-2xl my-2 text-[#fff] font-[500]">John Doe</p>
                <div className="my-2">
                    <img src={StarImg} alt="star-img" />
                </div>
                <p style={urbanist} className="text-sm text-[#FFFFFF]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dolor magna, feugiat sit amet orci ut, lobortis elementum enim. Vestibulum ultricies convallis sodales. Fusce volutpat, dolor et tempus rhoncus, odio quam imperdiet velit.</p>
            </div>
        </div>
        <div className="w-[250px]  border-2 mx-2 rounded-xl border-[#D19130] p-5 cursor-pointer">
        <div className="bg-[#D19130] w-[50px] h-[50px] rounded-full py-4 px-3">
                <img src={Dotted} alt="Dotted-alt" />
            </div>
            <div>
                <p className="text-2xl my-2 text-[#fff] font-[500]">John Doe</p>
                <div className="my-2">
                    <img src={StarImg} alt="star-img" />
                </div>
                <p style={urbanist} className="text-sm text-[#FFFFFF]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dolor magna, feugiat sit amet orci ut, lobortis elementum enim. Vestibulum ultricies convallis sodales. Fusce volutpat, dolor et tempus rhoncus, odio quam imperdiet velit.</p>
            </div>
        </div>
      </div>
      <img src={Branch} alt="Branch" className="rotate-[360deg] absolute top-44" />
      
    </div>
  );
}

export default Testimonials;
