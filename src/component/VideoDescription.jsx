import React, { useContext, useState } from 'react'
import { useParams } from 'react-router'
import { VideoContext } from '../context/VideoContext'
import { AiFillLike, AiFillDislike, AiOutlineHeart } from "react-icons/ai";
import { FaShare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { BsThreeDots } from "react-icons/bs";


const VideoDescription = () => {

    const [ isSub , setIsSub ] = useState(false)
    const {id} = useParams()
    const {videodata} = useContext(VideoContext)
    const product = videodata.find(product => product.id == id) 
    const {channelphoto , des } = product

  return (
    <div className='video-description-main'> 
      <h2>{des}</h2>
      <div className="video-description-button">
        <div className="video-description-channel">
          <div className="channel-description">
            <img src={channelphoto} alt="" />
            <p>{des}</p>
          </div>
          {
            isSub ? 
            <button className='btn-unsubscribe' onClick={() => setIsSub(!isSub)}>Unsubscribe</button>
            :
            <button className='btn-subscribe' onClick={() => setIsSub(!isSub)}>Subscribe</button>
          }
        </div>
        <div className="video-description-like">
          <button><AiFillLike /></button>
          <button><AiFillDislike /></button>
          <button><AiOutlineHeart /></button>
          <button><FaShare /></button>
          <button><HiDownload /></button>
          <button><BsThreeDots /></button>
        </div>
      </div>
    </div>
  )
}

export default VideoDescription