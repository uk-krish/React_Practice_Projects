import React from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import {FiFacebook} from 'react-icons/fi'
import {ImLinkedin2} from 'react-icons/im'
const Topnav = () => {
  return (
    <div className=''>
        <div className='flex  w-full h-2 bg-black '></div>
    <div className='mx-auto w-[1280px]  flex  justify-between'>
        <div className='flex text-[14px] ' >
            <p>Emergency Call For a Doctor</p>
            <p className='ml-3'><LocalPhoneIcon fontSize='14px'/> +91 81670 54704 </p>
        </div>
        <div className='flex h-[28px] '>
            <FiFacebook className='text-[24px]  ml-4 mt-1 text-[#595B6A] '/>
            <ImLinkedin2 className='text-[20px] ml-4 mt-1 text-[#595B6A]  '/>
            <div className='flex pentagon mr-48 bg-black text-white w-[300px] mx-auto Topnav-Nav  justify-center'>
                <p className=' ' >Individual</p>
                <p className='ml-3' >Couples</p>
                <p className='ml-3' >Teen</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Topnav
