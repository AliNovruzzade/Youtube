import React from 'react'
import WatchYourVideo from '../component/WatchYourVideo'
import VideoDescription from '../component/VideoDescription'
import ShowMore from '../component/ShowMore'
import CommentSide from './CommentSide'

const WatchVideo = () => {
  return (
    <div className='watch-video-main'>
      <WatchYourVideo />
      <VideoDescription />
      <ShowMore />
      <CommentSide />
    </div>
  )
}

export default WatchVideo