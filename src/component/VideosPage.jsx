import React,{useState , useRef , useEffect, useContext} from 'react'
import { FaPlay } from "react-icons/fa";
import { ImVolumeMedium, ImVolumeMute2 } from "react-icons/im";
import { GiPauseButton } from "react-icons/gi";
import { VideoContext } from '../context/VideoContext';



const VideosPage = ({src , muted , autoPlay}) => {

    const bufferRef = useRef(null)
    const progressRef = useRef(null)

    const {isplaying , setIsplaying , videoRef , handleMuted , isMuted} = useContext(VideoContext) 

   

    useEffect(() => {
        if(!videoRef.current) return;

        const onPlay = () => {
            setIsplaying(true);
        }
        const onPause = () => {
            setIsplaying(false);
        }
        
        const element = videoRef.current

        const onTimeUpdate = () => {
            if(!progressRef.current) return ;
            const {currentTime , duration} = element ;
            const progress = currentTime / duration ; 
            const width = progress * 97 ; 
            progressRef.current.style.width = `${width}%`
        }

        element.addEventListener("play" , onPlay)
        element.addEventListener("pause" , onPause)
        element.addEventListener("playing" , onPlay)
        element.addEventListener("timeupdate" , onTimeUpdate)

        return () => {
            element.addEventListener("play" , onPlay)
            element.addEventListener("playing" , onPlay)
            element.addEventListener("timeupdate" , onTimeUpdate)

        }
    } , [videoRef.current])

    const handlePlayPause = () => {
        if(!videoRef.current) return;
        if(isplaying) {
            videoRef.current.pause();
        } 
        else{
            videoRef.current.play()
        }
    }

  return (
    <div className='video-page'>
        <div className="video-navbar">
            {
                isplaying ? 
                <button onClick={handlePlayPause}><GiPauseButton size={20} /></button>
                :
                <button onClick={handlePlayPause}><FaPlay size={20} /></button>
            }
            {
                isMuted ? 
                <button onClick={handleMuted}><ImVolumeMute2 size={20} /></button>
                :
                <button onClick={handleMuted}><ImVolumeMedium size={20} /></button>
            }
        </div>

        <span className='progress' ref={progressRef}></span>
        <span className='buffer' ref={bufferRef}></span>

    <video
        onClick={handlePlayPause}
        src={src}
        autoPlay={autoPlay}
        muted={muted}
        ref={videoRef}
    ></video>

    </div>
  )
}

export default VideosPage