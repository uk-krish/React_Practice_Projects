import React, { useState } from 'react'

import { TfiPlus} from 'react-icons/tfi';
import {BiSolidEdit} from 'react-icons/bi'

const UpdateTodoform = ({editTodo,task}) => {
  const[value,setValue]=useState(task.task);
    const handleSubmit=e=>{
      e.preventDefault();
      if(value==="")
      alert("Please Add a task.!")
      else
      editTodo(value,task.id);
      setValue("");
    }
  return (

    <div className='w-full '>
      {/* Input */}
        {/* Form */}
        <form onSubmit={handleSubmit} action="">
      <div className='flex  mt-6 w-[600px] bg-[#282A2D] p-2 mx-auto '>
        <div className=' text-white p-2 text-2xl'>
        <BiSolidEdit/> 
        </div>
        <input
        className='w-[510px] text-white bg-transparent focus:outline-none mx-auto justify-center p-2 '
        type="text"
        placeholder='Update the Task'
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

export default UpdateTodoform
