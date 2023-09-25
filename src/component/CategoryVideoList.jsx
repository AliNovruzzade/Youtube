import React, { useContext } from "react";
import "remixicon/fonts/remixicon.css";
import { VideoContext } from "../context/VideoContext";
import HoverVideoPlayer from 'react-hover-video-player'


const Videoside = () => {

  const {videos , isMuted , videoRef} = useContext(VideoContext)

  return (
       <section className="videos-side-details-main">
        {
          videos.map((v , i) => (
        <div key={i} className="videos-box-details">
            <div className="videos-side-details">
            <HoverVideoPlayer 
                className="hover-video-player"
                videoSrc={v.video}
                pausedOverlay={
            <div>
            <img 
                className="video-poster-details"
                src={v.poster}
                alt=""
            />
              <p className="current-time-details"></p>
            </div>
      }

      volume={1}
      muted={isMuted}
      videoRef={videoRef}
    />
            </div>
            <div className="videos-title-details">
              <div className="videos-title-dsc-details">
                <h2>{v.des}</h2>
                <span>{v.viewers}- {v.time}</span>
              </div>
            </div>
        </div>
          )
          )
        }
        
      </section> 
  );
};

export default Videoside;
