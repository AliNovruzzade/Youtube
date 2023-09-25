import React, { useContext } from 'react'
import { VideoContext } from '../context/VideoContext'
import { ImVolumeMedium, ImVolumeMute2 } from "react-icons/im";

const HoverOverlay = () => {

    const {isMuted , handleMuted} = useContext(VideoContext)

  return (
    <>

    {
        isMuted ?
        <button className='video-muted-btn' onClick={handleMuted}><ImVolumeMute2 size={20} /></button>
        :
        <button className='video-muted-btn' onClick={handleMuted}><ImVolumeMedium size={20} /></button>
    }
    <span className='progress-hover-video'></span>
    </>
  )
}

export default HoverOverlay