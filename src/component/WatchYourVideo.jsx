import React, { useContext, useState , useEffect } from 'react'
import { useParams } from 'react-router'
import {VideoContext} from '../context/VideoContext'
<script src="https://cdn.fluidplayer.com/v3/current/fluidplayer.min.js"></script>

const WatchYourVideo = () => {

  const {id} = useParams()

  const {videodata} = useContext(VideoContext)

  const product = videodata.find(product => product.id == id)

  const [ prevVideo , setPrevVideo] = useState(product.video)

  return (
    <div className='watch-your-video'>
      <video 
      src={prevVideo}
      controls
      id='video-id'
      type="video/mp4"
      >
      </video>
    </div>
  )
}




export default WatchYourVideo