import React, { useContext } from "react";
import logo from "../assets/image/logo.PNG";
import { AiOutlineVideoCamera, AiOutlineBell } from "react-icons/ai";
import { BiMicrophone } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { HiBars3 } from "react-icons/hi2";
import User from "./User";
import { VideoContext } from "../context/VideoContext";


const Navbar = () => {

  const {handleOpenSidebar , setVideos , videodata} = useContext(VideoContext)

  const handleSearch = (e) => {
    let search = e.target.value;
    setVideos(videodata.filter(v => v.des.toUpperCase().match(search.toUpperCase())))
  }
  
  return (
    <nav>
      <div className="leftside">
        <button onClick={handleOpenSidebar} className="bars">
            <HiBars3 className="hibars" />
        </button>
        <img src={logo} alt="logo" title="Youtube main page" />
      </div>

      <div className="middle">
        <div className="middle-search">
          <input onChange={handleSearch} placeholder="Search" type="text" />
            <button className="search" type="submit">
              <BsSearch className="bssearch" />
            </button>
        </div>
        <button className="mic">
          <BiMicrophone className="bimic" />
        </button>
      </div>

      <div className="rightside">
        <button className="videobutton">
          <AiOutlineVideoCamera className="aivideo" />
        </button>
        <button className="bellbutton">
          <AiOutlineBell className="aibell" />
        </button>
        <User />
        
      </div>

    </nav>
  );
};

export default Navbar;