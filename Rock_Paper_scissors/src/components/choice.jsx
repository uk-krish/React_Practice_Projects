import React, { useEffect, useState } from 'react';



const Choice = ({onChoiceMade,imageSymbol}) => {
  const [usechoose,setusechoose]=useState('');
  const UserSelect=(e)=>{
    setusechoose(e);
    onChoiceMade(e);
  }
  useEffect(()=>{
    // UserSelect();
  },[usechoose]);
  return (
    <div className='w-full items-center flex flex-col'>
      <div className='flex mt-[10%]'>
      {Object.entries(imageSymbol).map(([key, value]) => (
          <img
            key={key}
            className='mr-12 w-[100px] h-[100px] p-3 bg-white rounded-full'
            src={value} 
            alt=''
            onClick={() => UserSelect(value)}
          />
        ))}
      </div>
    </div>
  );
};

export default Choice;
