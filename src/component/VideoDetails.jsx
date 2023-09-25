import React from 'react'
import WatchVideo from '../component/WatchVideo'
import VideoCategorybar from '../component/VideoCategorybar'

const VideoDetails = () => {
  return (
    <div className='video-details-main'>
      <div className="details-main">
        <WatchVideo />
        <VideoCategorybar />
      </div>
    </div>
  )
}

export default VideoDetails