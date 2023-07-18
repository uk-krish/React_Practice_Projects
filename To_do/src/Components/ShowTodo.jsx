import React from 'react'
import {
    BsPatchCheck,
    BsPatchCheckFill
      } from 'react-icons/bs'
import {BiSolidEdit} from 'react-icons/bi'
import { FaDeleteLeft} from 'react-icons/fa6'

const ShowTodo = ({task,toggleCompleted,deleteTodo,updateTodo}) => {
  // alert(task.key)
  console.log(task.id);
  return (
    <div>
    <div className='flex items-center   mt-4 bg-[#282A2D] text-white text-2xl p-4 mr-5 justify-between'>
      <div onClick={()=>toggleCompleted(task.id)} className='flex items-center cursor-pointer'>
        {!task.completed?<BsPatchCheck />:<BsPatchCheckFill />}
      <h1  className={`${!task.completed?'ml-3 text-white':' ml-3 text-white line-through'}`} >{task.task}</h1>
      </div>
      <span className='flex'>
        <BiSolidEdit onClick={()=>updateTodo(task.id)} className='cursor-pointer' />
        <FaDeleteLeft onClick={()=>deleteTodo(task.id)} className='ml-4 cursor-pointer '/>
      </span>
      </div>

    </div>
  )
}

export default ShowTodo
