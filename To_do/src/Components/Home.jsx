import React, { useState } from 'react'

import { TfiMenuAlt,
  TfiPlus
} from 'react-icons/tfi';

const Home = ({addTodo,date}) => {
  const[value,setValue]=useState("");
    const handleSubmit=e=>{
      e.preventDefault();
      if(value==="")
      alert("Please Add a task.!")
      else
      addTodo(value);
      setValue("");
    }
  return (

    <div className='w-full '>
      <div className='flex   mt-[10%]  justify-center'>
      <h1 className='text-[#b5bcbf] text-6xl font-black date-font italic'>{date}</h1>
      </div>
      {/* Input */}
        {/* Form */}
        <form onSubmit={handleSubmit} action="">
      <div className='flex  mt-12 w-[600px] bg-[#282A2D] p-2 mx-auto '>
        <div className=' text-white p-2 text-2xl'>
        <TfiMenuAlt/>
        </div>
        <input
        className='w-[510px] text-white bg-transparent focus:outline-none mx-auto justify-center p-2 '
        type="text"
        placeholder='Add a Task..'
        value={value}
         name=""
          id="" 
          onChange={(e)=>setValue(e.target.value)}
          />
        <div onClick={handleSubmit}  className='cursor-pointer  p-2 text-white text-2xl'>
        <TfiPlus/>
        </div>
      </div>
        </form>
        {/* Form */}


     
    </div>
  )
}

export default Home
