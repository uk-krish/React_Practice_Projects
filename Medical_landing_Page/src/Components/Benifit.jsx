import React from 'react'
import  Patient from "../assests/Patient.png";
import { BsCheckCircle } from "react-icons/bs";
const Benifit = () => {
  return (
    <div className='max-w-[1280px] mt-28 mx-auto'>
        <div className="heading text-center">
        <h1 className='text-[28px] text-[#828792] font-bold '>Every In One Platfrom</h1>
        <h1 className='text-6xl font-extrabold '  >Why Chosose Us</h1>
        <p className='text-[#828792] font-extrabold text-[18px] mt-5' >Mental health doctors provide a variety of services designed to help individuals manage and overcome mental health conditions, including psychiatric...</p>
        </div>
        <div className='grid md:grid-cols-2 grid-cols-1  items-center '>
            <div className='mx-auto  mt-16'>
                <img src={Patient} alt="" />
            </div>
            <div className='mb-52 mx-auto  items-center w-full p-5 m-5 '>
                <p className=' md:text-4xl text-2xl items-centertext-[#3c5bc7] font-extrabold'>Benefits Of Talkspace</p>
                <p className='text-[#828792] mt-5 text-[18px] '>
                Eliminate Commute Time And Scheduling Hassles,Flexible Plans To Meet Your Needs And Lifestyle, Seamlessly Switch Providers, At No Extra Cost, Save Money While Receiving High-Quality Care
                </p>
                <div className="Plus_Point grid grid-cols-2 mt-5 text-[18px] w-[350px] ">
                    <div className='flex items-center mt-2'>
                        <BsCheckCircle className='text-[#3C5BC7] '/>
                        <p className='ml-3'>Asessment</p>
                    </div>
                    <div className='flex items-center mt-2'>
                        <BsCheckCircle className='text-[#3C5BC7] '/>
                        <p className='ml-3'>Underood</p>
                    </div>
                    <div className='flex items-center mt-2'>
                        <BsCheckCircle className='text-[#3C5BC7] '/>
                        <p className='ml-3'>Exterior</p>
                    </div>
                    <div className='flex items-center mt-2'>
                        <BsCheckCircle className='text-[#3C5BC7] '/>
                        <p className='ml-3'>Under Doctor</p>
                    </div>
                    <div className='flex items-center mt-2'>
                        <BsCheckCircle className='text-[#3C5BC7] '/>
                        <p className='ml-3'>Interior</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Benifit
