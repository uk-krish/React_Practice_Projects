import React from 'react'
import Virtual from '../assests/Virtual.jpg'
import AppleLogo from '../assests/apple-logo.png'
import PlayStoreLogo from '../assests/playstore.png'
const Contact = () => {
  return (
    <div className='bg-white'>
        <div className='max-w-[1280px] mt-28 mx-auto '>
        <div className='grid md:grid-cols-2 grid-cols-1  items-center '>
            <div className='mx-auto p-12  mt-16'>
                <img src={Virtual} alt="" />
            </div>
            <div className='  max-w-[1000px] p-8 m-5 '>
                <p className=' md:text-4xl text-2xl items-centertext-[#3c5bc7] font-extrabold'>Get the <span className='text-[#324BA3] '>Free</span></p>
                <p className=' md:text-4xl text-2xl items-centertext-[#3c5bc7] font-extrabold'>Mental Helath App!</p>
                <p className='text-[#95A4B9] mt-5 text-[18px] '>
                Doctors are available according to their time availability. Our platform is available 24/7. Any doctor can come online at any time if they want.
                </p>
             <div className='lg:!flex justify-between w-[80%] mx-auto ' >
             <button className='flex mt-5 p-2 items-center  hover:bg-[#EFF0F5] rounded-lg border-2'>
                <img className='w-[40px]' src={AppleLogo} alt="" />       
                 <div className='items-center mt-2 ml-2'>
                 <p className='text-[14px] ' >Download on the</p> 
                 <p className='font-bold text-[20px] '>App Store</p>
                 </div> 
                  </button>
                <button className='flex p-2 mt-5 items-center rounded-lg border-2  hover:bg-[#EFF0F5]'>
                <img className='w-[40px]' src={PlayStoreLogo} alt="" />       
                 <div className='items-center mt-2 ml-2'>
                 <p className='text-[14px] ' >ANDROID APP ON</p> 
                 <p className='font-bold text-[20px] '>Google Play</p>
                 </div> 
                  </button>
                
             </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Contact
