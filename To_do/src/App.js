import React, { useState } from "react";
import Home from "./Components/Home";
import {uuid4} from 'uuid4';
import ShowTodo from "./Components/ShowTodo";
import UpdateTodoform from "./Components/UpdateTodoform";
uuid4();
function App() {
  let MonthArray=["January","February","March","April","May","June","July","August","September","October","November","December"];
  let today=new Date();
  let date=today.getDate();
  let month=today.getMonth();
  let year=today.getFullYear();
  let newd= `${(date<=9?"0"+date:date)} ${MonthArray[month]} ${year}`;

  const [todos,setTodos]=useState([]);


  const adtodo=todo=>{
  setTodos([{id:uuid4(),task:todo,completed:false,isEditing:false},...todos]);
  }
  const toggleCompleted=id=>{
    setTodos(todos.map(todo=>todo.id === id ?{
      ...todo,completed:!todo.completed}:todo ))
  }
  const deleteTodo=id=>{
    setTodos(todos.filter(todo=>todo.id!==id))
  }
  const updateTodo=id=>{
    setTodos(todos.map(todo=>todo.id===id?
      { ...todo,isEditing:!todo.isEditing}:todo))
  }
  const editTask=(task,id)=>{
    setTodos(todos.map(todo=>todo.id===id?
      {...todo,task,isEditing:!todo.isEditing}:todo))
  }
  return (
    <div className="">
      <Home  addTodo={adtodo} date={newd}  />
      <div className='mt-6 w-[600px] h-[500px] mx-auto  overflow-auto'>
      {
      todos.map((todo,index)=>(
      todo.isEditing?(<UpdateTodoform  editTodo={editTask} task={todo} />):
      ( <ShowTodo 
        task={todo}
        key={index}
        toggleCompleted={toggleCompleted}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
        />)
      ))
      }
      </div>
    </div>
  );
}

export default App;
