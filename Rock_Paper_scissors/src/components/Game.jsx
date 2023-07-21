import React, { useState } from 'react';

const Game = ({UserPoint,RobotPoint}) => {
  


  return (
    <div className='text-white w-full items-center flex flex-col'>
      <div className='mx-auto'>
        <div className='Title text-4xl mt-[10%] text-[#F6A814]'> Rock | Paper | scissors |</div>
      </div>
      <div className='score-Board   mt-[4%] h-[100px] flex items-center'>
        <h1 className='text-4xl mr-3'>You</h1>
      <div className="bg-[#2F2C61] flex p-4  items-center ">
        <h1 className='text-6xl mx-auto'>{UserPoint}<span>:</span>{RobotPoint}</h1>
      </div>
        <h1 className='text-4xl ml-3'>Robot</h1>
      </div>
     
    </div>
  );
};

export default Game;
