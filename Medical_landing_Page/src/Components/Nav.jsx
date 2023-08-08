import React, { useState } from 'react'
import logo from "../assests/Main_logo.png"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';const Nav = () => {
  const[change,Setchange]=useState(true);
  const ChangeValue=()=>{
    Setchange(!change);
  }
  return (
    <div className='max-w-[1280px] mx-auto flex justify-between '>
        <div className='image w-[250px] mt-3'>
        <img src={logo} alt="" />
        </div>
        <div className='lg:flex hidden'>
          <ul className='flex mt-3 mr-3'>
            <li className='ml-2 mt-3'>Home</li>
            <li className='ml-2 mt-3'>About</li>
            <li className='ml-2 mt-3'>How it works?</li>
            <li className='ml-2 mt-3'>Advice</li>
            <li className='ml-2 mt-3'>Contact</li>
            <li className='ml-2 mt-3'>Login</li>
            <li className='flex ml-2 items-center justify-center  bg-blue-400 rounded-lg w-[100px] h-[50px] ' >Sign up</li>
          </ul>
        </div>

        <div className='block mr-24 lg:hidden'>
          <div className='mt-5 mr-2 flex' onClick={ChangeValue}>
            {
            (change)?<MenuIcon  />:<CloseIcon  />
            }
          </div>
        <div className={ `fixed right-0 w-[60%] ${(change)?'hidden':'block'} `}>
          <ul className=' mt-3 bg-[#EFF0F5]  h-screen  text-black'>
            <li className='mt-12 ml-[31%]'>Home</li>
            <li className='mt-12 ml-[31%]'>About</li>
            <li className='mt-12 ml-[31%]'>How it works?</li>
            <li className='mt-12 ml-[31%]'>Advice</li>
            <li className='mt-12 ml-[31%]'>Contact</li>
            <li className='mt-12 ml-[31%]'>Login</li>
            <li className='ml-[31%] ' >
              <span className='flex items-center text-center justify-center  bg-blue-400 rounded-lg w-[100px] h-[50px] mt-5 mr-12'>
              Sign up
              </span>
              </li>
          </ul>
        </div>
        </div>
    </div>
  )
}

export default Nav
