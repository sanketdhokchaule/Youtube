import React from 'react'
import { USER_ICON } from '../utils/constants';

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center m-2 shadow-sm'>
        <img className="w-8 h-8 " alt='user_icon' src={USER_ICON}/>
        <div className='ml-2'>
            <span className='font-bold'>{name}</span>
            <span className='px-2'>{message}</span>
        </div>
    </div>
  )
}

export default ChatMessage;
