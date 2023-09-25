 import React from 'react'
import VideosPage from './VideosPage'
import IconSide from './IconSide'
import video from '../video/video.mp4'

const ShortVideo = () => {
  return (
    <div className='main-video'>
        <VideosPage src={video} />
        <IconSide />
    </div>
  )
}

export default ShortVideo