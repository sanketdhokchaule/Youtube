import React from 'react'
import Button from './Button';

export const ButtonList = () => {
  const list = ["All","Songs","Live","Soccer","Cricket","Cooking","Valentines","Comedy"];

  return (
    <div className='flex ml-2'>
      {list.map(list=><Button key={list} name={list}/>)}
    </div>
  )
}

export default ButtonList;
