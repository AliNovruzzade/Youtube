import React, { useContext } from "react";
import "remixicon/fonts/remixicon.css";
import ScrollMenu from "./ScrollMenu";
import { VideoContext } from "../context/VideoContext";
import HoverVideoPlayer from 'react-hover-video-player'
import HoverOverlay from "./HoverOverlay";
import { BiBlock } from "react-icons/bi";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";


const Videoside = () => {

  const {videos , isMuted , videoRef , deactiveVideo} = useContext(VideoContext)

  return (
    <div className="main">
      <Sidebar />
    <div className="main-wrapper">
    <ScrollMenu />

       <section>
        {
          videos.map((v , i) => v.status && (
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
              <p className="current-time">{v.time}</p>
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
                <Link to={`details/${v.id}`}>
                <img src={v.channelphoto} alt="" />
                </Link>
              </div>
              <div className="card-title">
                <h2>{v.des}</h2>
                <span>{v.viewers}- {v.time}</span>
                <button onClick={() => deactiveVideo(i)} className="hover-block-btn"><BiBlock /></button>
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
