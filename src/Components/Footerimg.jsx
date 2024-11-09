import React from 'react';
import MaskThree from '../assest/Mask-three.png';
import MaskFour from '../assest/Mask-four.png';
import MaskFive from '../assest/Mask-five.png';
import MaskSix from '../assest/Mask-six.png';
import InstaIcon from '../assest/Insta-icon.png';

function Footerimg() {
  return (
    <div className="flex flex-col sm:flex-row items-start pt-5">
      {[MaskThree, MaskFour, MaskFive, MaskSix, MaskFour].map((mask, index) => (
        <div 
          key={index} 
          className="w-full md:w-[20%] relative group cursor-pointer mb-1"
        >
          {/* Background image with blur effect on hover */}
          <img 
            src={mask} 
            alt={`mask-${index + 1}`} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:opacity-30"
          />
          {/* Instagram icon, centered and visible on hover */}
          <img 
            src={InstaIcon} 
            alt="instagram-icon" 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      ))}
    </div>
  );
}

export default Footerimg;
