import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const Choose_Plan = () => {
  return (
    <div className=' max-w-[1280px] mx-auto '>
     <div className="Heading text-center mx-auto">
      <p className='text-[28px] font-extrabold' >Choose Your Plan</p>
      <p className='text-[#828792] font-extrabold text-[14px] '>No Contracts, No Surprise Fees.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 mt-8 w-full first-line: ">
       
        <div className='border-[#c9c9cc] hover:border-transparent hover:text-white rounded-xl hover:scale-110 price_hover border-2 mt-16  bg-transparent shadow-md mx-auto max-w-[300px] w-[500px] p-6 '>
            <h1 className='text-[#324BA3] bolder-text font-black text-[24px] text-center ' >Free</h1>
            <h1 className='text-[#D1D6ED] font-black text-[18px] text-center ' >$0/month</h1>
            <p className='text-[16px]   mt-5  '><CheckIcon className='mr-4   ' fontSize='14px' />All Doctor</p>
            <p className='text-[16px]   mt-5 '><CheckIcon className='mr-4   ' fontSize='14px' />Sreaming Health Tips</p>
            <p className='text-[16px]   mt-5 '><CheckIcon className='mr-4   ' fontSize='14px' />Any Time Call</p>
            <p className='text-[16px]   mt-5 '><CheckIcon className='mr-4   ' fontSize='14px' />Unique URL</p>
            <p className='text-[16px]   mt-5 '><CheckIcon className='mr-4   ' fontSize='14px' />Instant Prescription</p>
            <p className='text-[16px]  mt-5 text-[#888888] '><CloseIcon  className='mr-4' fontSize='14px' />Upto 40% Discount</p>
            <p className='text-[16px]  mt-5 text-[#888888] '><CloseIcon  className='mr-4' fontSize='14px' />$ 350,000 Cashback</p>
            <p className='text-[16px]  mt-5 text-[#888888] '><CloseIcon  className='mr-4' fontSize='14px' />Free 4 Consultations</p>
            <p className='text-[16px]   mt-5  text-[#888888] '><CloseIcon  className='mr-4' fontSize='14px' />Life Insurance</p>
            <button className='bg-[#3C5BC7] text-white p-3 w-full shadow-lg mt-12  rounded-xl '>Buy Package</button>
        </div>
       
        <div className='border-[#c9c9cc] mt-16  hover:border-transparent hover:text-white rounded-xl hover:scale-110 price_hover border-2  bg-transparent shadow-md mx-auto max-w-[300px] w-[500px] p-6 '>
            <h1 className='text-[#324BA3] bolder-text font-black text-[24px] text-center ' >Free</h1>
            <h1 className='text-[#D1D6ED] font-black text-[18px] text-center ' >$0/month</h1>
            <p className='text-[16px]   mt-5  '><CheckIcon className='mr-4   ' fontSize='14px' />All Doctor</p>
            <p className='text-[16px]   mt-5 '><CheckIcon className='mr-4   ' fontSize='14px' />Sreaming Health Tips</p>
            <p className='text-[16px]   mt-5 '><CheckIcon className='mr-4   ' fontSize='14px' />Custom Schedule</p>
            <p className='text-[16px]   mt-5 '><CheckIcon className='mr-4   ' fontSize='14px' />Upto 40% Discount</p>
            <p className='text-[16px]   mt-5 '><CheckIcon className='mr-4   ' fontSize='14px' />Unlimited Consultations</p>
            <p className='text-[16px]   mt-5 '><CheckIcon className='mr-4   ' fontSize='14px' />Instant Prescription</p>
            <p className='text-[16px]  mt-5 text-[#888888] '><CloseIcon  className='mr-4' fontSize='14px' />$ 350,000 Cashback</p>
            <p className='text-[16px]  mt-5 text-[#888888] '><CloseIcon  className='mr-4' fontSize='14px' />Free 4 Consultations</p>
            <p className='text-[16px]   mt-5  text-[#888888] '><CloseIcon  className='mr-4' fontSize='14px' />Life Insurance</p>
            <button className='bg-[#3C5BC7] text-white p-3 w-full shadow-lg mt-12 rounded-xl '>Buy Package</button>
        </div>
       
        
       
        <div className='border-[#c9c9cc] mt-16  hover:border-transparent hover:text-white rounded-xl hover:scale-110 price_hover border-2  bg-transparent shadow-md mx-auto max-w-[300px] w-[500px] p-6 '>
            <h1 className='text-[#324BA3] bolder-text font-black text-[24px] text-center ' >Free</h1>
            <h1 className='text-[#D1D6ED] font-black text-[18px] text-center ' >$0/month</h1>
            <p className='text-[16px]   mt-5  '><CheckIcon className='mr-4   ' fontSize='14px' />All Doctor</p>
            <p className='text-[16px]   mt-5 '><CheckIcon className='mr-4   ' fontSize='14px' />Sreaming Health Tips</p>
            <p className='text-[16px]   mt-5 '><CheckIcon className='mr-4   ' fontSize='14px' />Custom Schedule</p>
            <p className='text-[16px]   mt-5 '><CheckIcon className='mr-4   ' fontSize='14px' />Upto 40% Discount</p>
            <p className='text-[16px]   mt-5 '><CheckIcon className='mr-4   ' fontSize='14px' />Unlimited Consultations</p>
            <p className='text-[16px]   mt-5 '><CheckIcon className='mr-4   ' fontSize='14px' />Instant Prescription</p>
            <p className='text-[16px]   mt-5 '><CheckIcon className='mr-4   ' fontSize='14px' />$ 350,000 Cashback</p>
            <p className='text-[16px]  mt-5 text-[#888888] '><CloseIcon  className='mr-4' fontSize='14px' />Free 4 Consultations</p>
            <p className='text-[16px]   mt-5  text-[#888888] '><CloseIcon  className='mr-4' fontSize='14px' />Life Insurance</p>
            <button className='bg-[#3C5BC7] text-white p-3 w-full shadow-lg mt-12 rounded-xl '>Buy Package</button>
        </div>
       
        


      </div>
      
      <div className='mt-12'></div>
    </div>
  )
}

export default Choose_Plan
