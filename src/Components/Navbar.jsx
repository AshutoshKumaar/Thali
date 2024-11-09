import React from 'react'
import Logo from '../assest/logo 1.png'
import WishListIcon from '../assest/wishlist.png'
import CartICon from '../assest/cart.png'
import ProfileICon from '../assest/Profile.png'

function Navbar() {
    const FontObject = {
        fontFamily : "Yantramanav"
    }
  return (
    <div>
      <nav className='bg-[#141414] relative flex flex-row items-center px-5 justify-around h-[100px]' style={FontObject}>
        <div className='hidden md:block'>
            <ul className='flex flex-row items-start text-white uppercase'>
                <li className='text-[18px] font-[300] ml-5 cursor-pointer'>Home</li>
                <li className='text-[18px] font-[300] ml-10 cursor-pointer'>About us</li>
                <li className='text-[18px] font-[300] ml-10 cursor-pointer'>Our Menu</li>
                <li className='text-[18px] font-[300] ml-10 cursor-pointer'>Gallery</li>
            </ul>
        </div>
        <div className='absolute rounded-b-[50px] bg-[#141414] shadow-md top-[15px] h-[80px] md:h-[110px] py-1 px-5 left-[1/2]  border-[#F7B759] border-x-[2px]'>
            <div className='w-[80px] md:w-[130px]'>
                <img src={Logo} alt="logo" className='mt-2' />
            </div>
        </div>
       
        <div className='w-[200px] ml-[400px] hidden md:block'>
        <ul className='flex flex-row items-center justify-between text-white uppercase'>
        <li className='text-[18px] font-[300]  cursor-pointer'>Catering</li>
        <li className='text-[18px] font-[300]  cursor-pointer'>Contact</li>
        </ul>
          
        </div>
        <div>
            <ul className='hidden md:flex flex-row items-start'>
                <li className='text-[18px] font-[300] ml-0 cursor-pointer'><img src={WishListIcon} alt="WishList" /></li>
                <li className='text-[18px] font-[300] ml-4 cursor-pointer'><img src={ProfileICon} alt="ProfileIcon" /></li>
                <li className='text-[18px] font-[300] ml-4 cursor-pointer'><img src={CartICon} alt="Cart-icon" /></li>
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
