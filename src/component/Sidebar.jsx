import React, { useContext } from "react";
import { linkData1, linkdata2, linkdata3, linkdata4, linkdata5, linkdata6 } from "../fakedata";
import { VideoContext } from "../context/VideoContext";


const Sidebar = () => {

    const {openSidebar} = useContext(VideoContext)

  return (
    
    <div className={openSidebar ? 'res-sidebar' : 'sidebar'}>

      <ul className="sidebar-links">
        <div className="border-side">
          {
            linkData1.map(( v , i ) => (
                <li key={"link1" + i}>
                  {v.icon1}
                  <a href="#">{v.title1}</a>
                </li>
            ))
          }
        </div>
        <div className="middle-line-straight"></div>

        <div style={{display: openSidebar ? 'none' : 'block'}} className="border-side">
          {
            linkdata2.map(( v , i ) => (
                <li key={"link2" + i}>
                  {v.icon2}
                  <a href="#">{v.title2}</a>
                </li>
            ))
          }
        </div>
        <div className="middle-line-straight"></div>

        <div style={{display: openSidebar ? 'none' : 'block'}} className="border-side">
          <p>Subscriptions</p>
          {
            linkdata3.map(( v , i ) => (
                <li key={"link3" + i}>
                  <img src={v.img} alt="" />
                  <a href="#">{v.title3}</a>
                </li>
            ))
          }
        </div>
        <div className="middle-line-straight"></div>

        <div style={{display: openSidebar ? 'none' : 'block'}} className="border-side">
          <p>Explore</p>
          {
            linkdata4.map(( v , i ) => (
                <li key={"link4" + i}>
                  {v.icon3}
                  <a href="#">{v.title4}</a>
                </li>
            ))
          }
        </div>
        <div className="middle-line-straight"></div>

        <div style={{display: openSidebar ? 'none' : 'block'}} className="border-side">
          <p>More from YouTube</p>
          {
            linkdata5.map(( v , i ) => (
                <li key={"link5" + i}>
                  {v.icon5}
                  <a href="#">{v.title5}</a>
                </li>
            ))
          }
        </div>
        <div className="middle-line-straight"></div>

        <div style={{display: openSidebar ? 'none' : 'block'}} className="border-side">
          {
            linkdata6.map(( v , i ) => (
                <li key={"link1" + i}>
                  {v.icon6}
                  <a href="#">{v.title6}</a>
                </li>
            ))
          }
        </div>
      </ul>
     
    </div>
  );
};

export default Sidebar;
