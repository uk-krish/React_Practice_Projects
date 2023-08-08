import React from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import Data from "../Data/DoctorData.json";

const Specilist = () => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <div className='max-w-[1280px] mt-36 mx-auto '>
      <div className="Heading text-center">
      <p className='text-[28px] text-[#828792] font-bold '>SPECILIST</p>
      <p className='text-[34px] font-extrabold ' >Meet Our Expert Doctor</p>
      <p className='text-[#828792] font-extrabold text-[18px] '>Our Network of Providers Cover A Range Of Specialities To Meet Your Specific Needs. Get Matched Today!</p>
      </div>
      <div className='max-w-[1280px] mx-auto justify-between ml-16 '>
  <Carousel responsive={responsive}>
  {
    Data.map(data=>(
      <div className='w-[250px] ml-3 mt-8 mb-12' key={data.id}>
        <div className=''>
        <img className='w-[250px] items-center mx-auto bg-[#3C5BC7] rounded-t-md p-2' src={`${data.profile}`}></img>
        </div>
      <div className='text-center text-white bg-[#3C5BC7] pb-5 rounded-b-md  ' >
      <div className='text-[20px] uppercase font-bold'  key={data.id} >{data.name}</div>
      <div className='text-[14px]'  key={data.id} >{data.specialist}</div>
      
      </div>
        </div>
    ))
  }
</Carousel>
    </div>
    </div>
  )
}

export default Specilist
