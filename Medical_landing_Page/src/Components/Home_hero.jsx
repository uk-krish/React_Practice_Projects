import React from 'react'
import RightImage from '../assests/Right.png'
import Elekta from '../assests/elekta.svg'
import ucla from '../assests/ucla-health-logo.svg'
import CVS from '../assests/CVS_Health_logo.png'
import medineed from '../assests/medineed.png'
const Home_hero = () => {
  return (
    <div className='max-w-[1280px] mx-auto grid mt-[50px] '>
        <div className='grid md:grid-cols-2 grid-cols-1  items-center '>
            <div className=' mx-auto md:order-1 order-2 items-center w-full p-5 m-5 '>
                <p className='md:text-6xl text-4xl items-center '>Skip The <span className='text-[#3c5bc7] font-extrabold'>Travel!</span></p>
                <p className='md:text-6xl text-4xl items-center '>Take Online Doctor</p>
                <p className='md:text-6xl text-4xl items-center '>Consultation</p>
                <p className='text-[#828792] mt-5 text-[18px] '>
                Mental Health Consultation Equips Caregivers To Facilitate Children's Healthy Growth And Development. It Starts From The Premise That All Relationships In A Child's Life Matter
                </p>
                <button className='bg-[#3c5bc7] p-4 mt-5 justify-center rounded text-white'>Consult Now</button>
            </div>
            <div className='mx-auto md:order-2 order-1 '>
                <img src={RightImage} alt="" />
            </div>
        </div>
        <div className='mt-16 p-3 '>
          <h1 className='text-4xl '>Top Certficates</h1>
          <ul className='grid md:grid-cols-4 grid-cols-2'>
            <li className='ml-12 mt-8'><img className='w-[150px] ' src={Elekta} alt="" /></li>
            <li className='ml-12 mt-8'><img className='w-[150px] ' src={ucla} alt="" /></li>
            <li className='ml-12 mt-8'><img className='w-[150px] ' src={CVS} alt="" /></li>
            <li className='ml-12 mt-8'><img className='w-[150px] ' src={medineed} alt="" /></li>
          </ul>
        </div>
    </div>
  )
}

export default Home_hero
