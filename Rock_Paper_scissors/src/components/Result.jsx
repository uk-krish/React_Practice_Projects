import React, { useEffect, useState } from 'react'
import Question from '../assests/images/Confuess.png'

const Result = ({imagepass,robotpass,resultannounce}) => {
  return (
    <div className='w-full items-center flex flex-col mx-auto mt-14'>
      <div className='flex w-full items-center '>
      

      <div className={` ${(resultannounce>=0)?((resultannounce==0)?'border-green-300':'border-green-300'):'border-red-300'} w-[200px] h-[200px] User-Choice  bg-[#3D26AB]  border-8 p-5 mx-auto rounded-lg`}>
            <img className='' src={imagepass} alt="" />
        </div>
        <div className='text-[#F6A814] text-6xl'>
          {(resultannounce>=0)?((resultannounce==0)?"TIE":"YOU WIN"):"YOU LOOSE"}
        </div>
        <div className={` ${(resultannounce>=0)?((resultannounce==0)?'border-green-300':'border-red-300'):'border-green-300'} w-[200px] h-[200px] User-Choice  bg-[#3D26AB]  border-8 p-5 mx-auto rounded-lg`}>
            <img className='' src={robotpass} alt="" />
        </div>
    
      </div>
    </div>
  )
}

export default Result
