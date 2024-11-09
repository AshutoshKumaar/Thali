import React from "react";
import LineShape from "../assest/shape.png";
import ChickenChilli from "../assest/Chicken-Chilli.png";
import OnionImg from "../assest/Onion.png";
import LeafImg from "../assest/leaf.png";
import Branch from "../assest/Branch.png";

function Menu() {
  const Pmenu = [
    {
      title: "Chilli Chicken",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      oldValue: 14.99,
      newValue: 13.99,
      productImg: ChickenChilli,
    },
    {
      title: "Chilli Chicken",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      oldValue: 14.99,
      newValue: 13.99,
      productImg: ChickenChilli,
    },
    {
      title: "Chilli Chicken",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      oldValue: 14.99,
      newValue: 13.99,
      productImg: ChickenChilli,
    },
    {
      title: "Chilli Chicken",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      oldValue: 14.99,
      newValue: 13.99,
      productImg: ChickenChilli,
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
    <div className="p-10 relative">
      <section className="pb-5">
        <div className="p-5 text-center">
          <p
            style={FontObject}
            className="uppercase text-[#F7B759] mb-3 font-[400] text-[16px] sm:text-[20px]"
          >
            Our food items
          </p>
          <h2
            style={YesevaFont}
            className="text-[40px] sm:text-[60px] text-[#fff] leading-10 font-[400]"
          >
            Delicious Menu
          </h2>
        </div>
        <div>
          <img src={LineShape} alt="Shape" className="mx-auto" />
        </div>
      </section>

      {/* Menu Items Section */}
      <section className="w-full sm:w-[1100px] mx-auto p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {Pmenu.map((items, index) => (
            <div
              key={index}
              className="group border-[1px] border-[#6C6B68] p-2 hover:bg-[#F7B759] duration-75 ease-in-out cursor-pointer"
            >
              <div>
                <img
                  src={items.productImg}
                  alt="ChikenChilli"
                  className="w-full"
                />
              </div>
              <div>
                <h3
                  style={urbanist}
                  className="text-[#fff] font-[400] text-[20px] sm:text-[24px] text-center p-1 group-hover:text-[#171819] duration-75 ease-in-out"
                >
                  {items.title}
                </h3>
                <p
                  style={urbanist}
                  className="text-[#C7C7C7] text-sm sm:text-base font-normal text-center group-hover:text-[#171819] duration-75 ease-in-out"
                >
                  {items.content}
                </p>
                <div className="flex flex-row justify-center items-center py-1">
                  <span className="text-[#F7B759] mx-1 group-hover:text-[#171819] duration-75 ease-in-out">
                    ${items.newValue}
                  </span>
                  <span className="text-[#6C6B68] line-through">
                    ${items.oldValue}
                  </span>
                </div>
                <div className="text-center mt-4 mb-2">
                  <button
                    style={urbanist}
                    className="border-[#f7b759] border-[1px] group-hover:bg-[#171819] group-hover:text-[#fff] duration-75 ease-in-out text-[#F7B759] py-2 px-4 text-sm uppercase"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Decorative Images */}
      <div>
        <img
          src={OnionImg}
          alt="onion"
          className="absolute top-0  right-28 sm:right-20 sm:top-8 w-12 sm:w-32"
        />
        <img
          src={Branch}
          alt="Branch"
          className="absolute top-24 right-0 w-16 sm:w-32"
        />
        <img
          src={LeafImg}
          alt="Branch"
          className="absolute bottom-0 left-0 w-16 sm:w-32"
        />
      </div>
    </div>
  );
}

export default Menu;
