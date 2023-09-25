import { useState , useRef , useEffect } from 'react';
import FluidPlayer from 'fluid-player'
import '../src/App.css'
import Navbar from './component/Navbar';
import Videoside from './component/Videoside';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Shorts from './component/Shorts';
import { videodata } from './fakedata';
import {VideoContext} from './context/VideoContext.jsx'
import WatchLater from './component/WatchLater'
import VideoDetails from './component/VideoDetails';




function App() {
  
  const [videos , setVideos] = useState(videodata) 
  const [openSidebar , setOpenSidebar] = useState(false)
  const [isplaying , setIsplaying] = useState(false)
  const [ sendCom , setSendCom ] = useState('')
  const [ writeComment , setWriteComment ] = useState([])
  const [ showCommentBtn , setShowCommentBtn ] = useState(false)
  const [isMuted , setIsMuted] = useState(false)
  const videoRef = useRef(null)


  const handleMuted = () => {
    setIsMuted(!isMuted)
    videoRef.current.muted = !isMuted
  }

  const handleOpenSidebar = () => {
    setOpenSidebar(!openSidebar)
  }

  const deactiveVideo = (i) =>{
    videos[i].status = false
    setVideos([...videos])
  }

  const activeVideo = (i) =>{
    videos[i].status = true
    setVideos([...videos])
  }

  let self = useRef(null);
  let player = null;



  return (
    <VideoContext.Provider value={{ sendCom , setSendCom , writeComment , showCommentBtn  , setWriteComment , setShowCommentBtn ,activeVideo , deactiveVideo , handleMuted , isplaying , setIsplaying , isMuted , setIsMuted , videoRef , handleOpenSidebar , videos , setVideos , videodata , openSidebar , setOpenSidebar }}>
    <BrowserRouter >
      <Navbar />
        <Routes>
          <Route path='/' element={<Videoside />} />
          <Route path='/shorts' element={<Shorts />} />
          <Route path='/watchlater' element={<WatchLater />} />
          <Route path='details/:id' element={<VideoDetails />} />
        </Routes>
    </BrowserRouter>
      
    
      
    </VideoContext.Provider>
  );
}

export default App;
