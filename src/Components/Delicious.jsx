import React from "react";
import LineShape from "../assest/shape.png";
import Paneer from "../assest/Panner.png";
import VectorPng from "../assest/Vector.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Delicious() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  const arrayofObjcet = [
    {
      title: "Veg Starters",
      subtitle: "Adipisicing elit et molestias possimus.",
      img: Paneer,
      count: "07 Items +",
      Icon: VectorPng,
    },
    {
      title: "Veg Starters",
      subtitle: "Adipisicing elit et molestias possimus.",
      img: Paneer,
      count: "07 Items +",
      Icon: VectorPng,
    },
    {
      title: "Veg Starters",
      subtitle: "Adipisicing elit et molestias possimus.",
      img: Paneer,
      count: "07 Items +",
      Icon: VectorPng,
    },
    {
      title: "Veg Starters",
      subtitle: "Adipisicing elit et molestias possimus.",
      img: Paneer,
      count: "07 Items +",
      Icon: VectorPng,
    },
    {
      title: "Veg Starters",
      subtitle: "Adipisicing elit et molestias possimus.",
      img: Paneer,
      count: "07 Items +",
      Icon: VectorPng,
    },
    {
      title: "Veg Starters",
      subtitle: "Adipisicing elit et molestias possimus.",
      img: Paneer,
      count: "07 Items +",
      Icon: VectorPng,
    },
  ];
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
    <div>
      <section className="text-center">
        <div className="p-5">
          <p
            style={FontObject}
            className="uppercase text-[#F7B759] mb-3 font-[400]"
          >
            food category
          </p>
          <h2
            style={YesevaFont}
            className="text-[30px] md:text-[60px] text-[#fff] leading-10 font-[400]"
          >
            Delicious Category
          </h2>
        </div>
        <div>
          <img src={LineShape} alt="Shape" className="mx-auto" />
        </div>
      </section>
      <section className="w-full md:w-[1000px] mx-auto py-10">
        <div>
          <Slider {...settings}>
            {arrayofObjcet.map((Items, index) => (
              <div
                key={index}
                className="group border-2 border-[#444445] hover:border-[#F7B759] ease-in-out duration-75 w-1/4 p-3 rounded-2xl cursor-pointer"
              >
                <h3
                  style={urbanist}
                  className="text-[#fff] font-semibold text-[20px] group-hover:text-[#F7B759] duration-75 ease-in-out"
                >
                  {Items.title}
                </h3>
                <p style={urbanist} className="text-[#D9D9D9] text-[12px] mb-2">
                  {Items.subtitle}
                </p>
                <img src={Items.img} alt="Paneer-img" className="w-full" />
                <div className="flex flex-row justify-between items-center my-3">
                  <div
                    style={urbanist}
                    className="text-[#fff] text-[14px] group-hover:text-[#F7B759] ease-in-out duration-75"
                  >
                    <p>{Items.count}</p>
                  </div>
                  <div className="w-[40px]">
                    <img
                      src={Items.Icon}
                      alt="Vector"
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
}

export default Delicious;
