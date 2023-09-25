import React from 'react'
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import ShortVideo from './ShortVideo';
import Sidebar from './Sidebar';

const Shorts = () => {
  return (
    <div className='main'>
      <Sidebar />
    <div className='short-side'>
      <ShortVideo />
      <button className='up-btn btn'><AiOutlineArrowUp size={20} /></button>
      <button className='down-btn btn'><AiOutlineArrowDown size={20} /></button>
    </div>
    </div>
  )
}

export default Shorts