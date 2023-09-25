import React, { useContext } from "react";
import "remixicon/fonts/remixicon.css";
import ScrollMenu from "./ScrollMenu";
import { VideoContext } from "../context/VideoContext";
import HoverVideoPlayer from 'react-hover-video-player'
import HoverOverlay from "./HoverOverlay";
import { AiOutlineFolderAdd } from "react-icons/ai";
import Sidebar from "./Sidebar";

const Videoside = () => {

  const {videos , isMuted , videoRef , activeVideo} = useContext(VideoContext)

  return (
    <div className="main">
      <Sidebar />
    <div className="main-wrapper">
    <ScrollMenu />

       <section>
        {
          videos.map((v , i) => !v.status && (
        <div key={i} className="section-video-card">
            <div className="video-card-video">
            <HoverVideoPlayer 
          className="hover-video-player"
          videoSrc={v.video}
          pausedOverlay={
            <>
              <img 
                className="video-poster"
                src={v.poster}
                alt=""
              />
              <p className="current-time">15:21</p>
            </>
      }

      hoverOverlay={<HoverOverlay />}
      volume={1}
      muted={isMuted}
      videoRef={videoRef}
    />
            </div>
            <div className="video-card-dsc">
              <div className="card-channel">
                <img src={v.channelphoto} alt="" />
              </div>
              <div className="card-title">
                <h2>{v.des}</h2>
                <span>{v.viewers}- {v.time}</span>
                <button onClick={() => activeVideo(i)} className="hover-block-btn"><AiOutlineFolderAdd /></button>
              </div>
            </div>
        </div>
          )
          )
        }
        
      </section> 
    </div>
    </div>
  );
};

export default Videoside;
