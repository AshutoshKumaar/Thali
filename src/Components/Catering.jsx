import React from 'react'
import Linetwo from '../assest/line-two.png'
import FindMoreButton from '../assest/Find-more.png'
import Chef from '../assest/Group.png'


function Catering() {
  const FontObject = {
    fontFamily : "Yantramanav"
}
const YesevaFont = {
    fontFamily : "Yeseva One"
}
const urbanist = {
    fontFamily: "Urbanist"
}
  return (
    <div className='py-5'>
        <section className='bg-[#D19130] w-[90%] md:w-[1020px] mx-auto h-auto md:h-[500px] rounded-xl flex flex-col md:flex-row justify-between items-center my-5'>
        <div className='w-full md:w-[600px] text-left ml-0 md:ml-10 p-5 md:p-0'>
            <p style={FontObject} className='uppercase text-[#fff] text-[16px] font-[400] leading-2'>why choose us</p>
            <h3 style={YesevaFont} className='text-[55px] text-[#fff] leading-[70px]'>Catering</h3>
            <div>
                <img src={Linetwo} alt='Line-shape'></img>
            </div>
            <p style={urbanist} className='text-[14px] my-5 text-[#fff]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus pretium lectus, ut mollis libero efficitur ut. Nam sodales aliquet sapien. In lacinia lacinia dignissim. Ut eu est a odio porttitor pharetra. In eu finibus massa.</p>
            <div className='my-5'>
              <button className='w-[120px] cursor-pointer'>
                  <img src={FindMoreButton} alt='find-more' className='w-full' />
              </button>
            </div>
        </div>
        <div className='h-[420px] mt-20'>
          <img src={Chef} alt="Chef-img" className='w-full h-full' />
        </div>

        </section>
    </div>
  )
}

export default Catering
