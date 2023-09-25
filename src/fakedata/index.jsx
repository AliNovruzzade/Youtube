import {FaDollarSign, FaGamepad} from "react-icons/fa";
import {BsFillCollectionPlayFill, BsChevronDown, BsFire, BsYoutube, BsFlag} from "react-icons/bs";
import {MdOutlineVideoLibrary, MdOutlineOndemandVideo, MdOutlineWatchLater, MdSettings, MdOutlineFeedback} from "react-icons/md";
import {BiLike, BiMovie, BiNews, BiHelpCircle} from "react-icons/bi";
import {RiMusicFill} from "react-icons/ri";
import { TbMapPinShare, TbBrandYoutubeKids } from "react-icons/tb";
import { GiTrophyCup } from "react-icons/gi";
import { SiYoutubestudio, SiYoutubemusic } from "react-icons/si";
import { Link } from "react-router-dom";
import videopic1 from '../assets/image/videopic1.jpg'
import { AiOutlineHome , AiOutlineClockCircle } from "react-icons/ai";
import video1 from '../video/video1.mp4'
import video2 from '../video/video2.mp4'
import video3 from '../video/video3.mp4'
import video4 from '../video/video4.mp4'
import posterpicture from '../assets/image/videopic1.jpg'


const linkData1 = [
        {
            icon1: <AiOutlineHome  className="sidebar-icon" fontSize={18}/>,
            title1: <Link to="/">Home</Link>
        },
        {
            icon1: <FaDollarSign className="sidebar-icon" fontSize={18}/>,
            title1: <Link to="/shorts">Shorts</Link>
        },
        {
            icon1: <BsFillCollectionPlayFill className="sidebar-icon" fontSize={18}/>,
            title1: <Link>Subscriptions</Link>
        },
]

const linkdata2 = [
    {
        icon2: <MdOutlineVideoLibrary className="sidebar-icon" fontSize={18}/>,
        title2: <Link>Library</Link>

    },
    {
        icon2: <AiOutlineClockCircle className="sidebar-icon"  fontSize={18}/>,
        title2: <Link>History</Link>

    },
    {
        icon2: <MdOutlineOndemandVideo className="sidebar-icon" fontSize={18}/>,
        title2: <Link>Your Videos</Link>

    },
    {
        icon2: <MdOutlineWatchLater className="sidebar-icon" fontSize={18}/>,
        title2: <Link to='/watchlater'>Watch Later</Link>

    },
    {
        icon2: <BiLike className="sidebar-icon" fontSize={18}/>,
        title2: <Link>Liked Videos</Link>

    },
    {
        icon2: <BsChevronDown className="sidebar-icon" fontSize={18}/>,
        title2: <Link>Show More</Link>

    },
]


const linkdata3 = [
    {
        img: "https://picsum.photos/seed/picsum/200/300",
        title3: <Link>SimpleLearn</Link>
    },
    {
        img: "https://picsum.photos/seed/picsum/200/300",
        title3: <Link>Checker</Link>    
    },
    {
        img: "https://picsum.photos/seed/picsum/200/300",
        title3: <Link>Literat</Link>    
    },
    {
        img: "https://picsum.photos/seed/picsum/200/300",
        title3: <Link>Learnwithus</Link>    
    },
    {
        img: "https://picsum.photos/seed/picsum/200/300",
        title3: <Link>CBC Sport</Link>    
    },
]

const linkdata4 = [
    {
        icon3: <BsFire className="sidebar-icon" fontSize={18}/>,
        title4: <Link>Trending</Link>    
    },
    {
        icon3: <RiMusicFill className="sidebar-icon" fontSize={18}/>,
        title4: <Link>Music</Link>    
    },
    {
        icon3: <BiMovie className="sidebar-icon" fontSize={18}/>,
        title4: <Link>Movies</Link>    
    },
    {
        icon3: <TbMapPinShare className="sidebar-icon" fontSize={18}/>,
        title4: <Link>Live</Link>    
    },
    {
        icon3: <FaGamepad className="sidebar-icon" fontSize={18}/>,
        title4: <Link>Gaming</Link>    
    },
    {
        icon3: <BiNews className="sidebar-icon" fontSize={18}/>,
        title4: <Link>News</Link>    
    },
    {
        icon3: <GiTrophyCup className="sidebar-icon" fontSize={18}/>,
        title4: <Link>Sports</Link>    
    },
]

const linkdata5 = [
    {
        icon5: <BsYoutube className="sidebar-icon" color='red' fontSize={18}/>,
        title5: <Link>Youtube Premium</Link>    
    },
    {
        icon5: <SiYoutubestudio className="sidebar-icon" color='red' fontSize={18}/>,
        title5: <Link>Youtube Studio</Link>    
    },
    {
        icon5: <SiYoutubemusic className="sidebar-icon" color='red' fontSize={18}/>,
        title5: <Link>Youtube Movies</Link>    
    },
    {
        icon5: <TbBrandYoutubeKids className="sidebar-icon" color='red' fontSize={18}/>,
        title5: <Link>Youtube Kids</Link>    
    }
]


const linkdata6 = [
    {
        icon6: <MdSettings className="sidebar-icon" fontSize={18}/>,
        title6: <Link>Settings</Link> 
    },
    {
        icon6: <BsFlag className="sidebar-icon" fontSize={18}/>,
        title6: <Link>Report History</Link> 
    },
    {
        icon6: <BiHelpCircle className="sidebar-icon" fontSize={18}/>,
        title6: <Link>Help</Link> 
    },
    {
        icon6: <MdOutlineFeedback className="sidebar-icon" fontSize={18}/>,
        title6: <Link>Feedback</Link> 
    }
]


const videodata = [
    {   
        id: 1 ,
        status: true ,
        poster: posterpicture ,
        video: video1 , 
        channelphoto: videopic1 ,
        des: "Mix - Matthew Koma - Kisses Back" ,
        viewers: 150 ,
        time: "2 hours ago"  ,
        duration: '2:43'
    },
    {   
        id: 2 ,
        status: true ,
        poster: posterpicture ,
        video: video2 , 
        channelphoto: videopic1 ,
        des: "SÜREKLİ DİZİ | Duvar Arkadaşı | TAM BÖLÜM | Cartoon Network Türkiye" ,
        viewers: 150 ,
        time: "2 hours ago" ,
        duration: '11:02'
    },
    {   
        id: 3 ,
        status: true ,
        poster: posterpicture ,
        video: video3 , 
        channelphoto: videopic1 ,
        des: "Mix - Tamino - Habibi (Live)" ,
        viewers: 150 ,
        time: "2 hours ago" ,
        duration: '5:59'
    },
    {   
        id: 4 ,
        status: true ,
        poster: posterpicture ,
        video: video4 , 
        channelphoto: videopic1 ,
        des: "Mix" ,
        viewers: 150 ,
        time: "2 hours ago" ,
        duration: '2:22'
    },
    {   
        id: 5 ,
        status: true ,
        poster: posterpicture ,
        video: video1 , 
        channelphoto: videopic1 ,
        des: "Habibi (Live)" ,
        viewers: 150 ,
        time: "2 hours ago" ,
        duration: '5:41'
    },
    {   
        id: 6 ,
        status: true ,
        poster: posterpicture ,
        video: video2 , 
        channelphoto: videopic1 ,
        des: "la leçon particulière " ,
        viewers: 150 ,
        time: "2 hours ago" ,
        duration: '1:43'
    },
    {   
        id: 7 ,
        status: true ,
        poster: posterpicture ,
        video: video1 , 
        channelphoto: videopic1 ,
        des: "la  (slowed & reverb)" ,
        viewers: 150 ,
        time: "2 hours ago" ,
        duration: '12:39'
    },
    {   
        id: 8 ,
        status: true ,
        poster: posterpicture ,
        video: video3 , 
        channelphoto: videopic1 ,
        des: "las menos" ,
        viewers: 150 ,
        time: "2 hours ago" ,
        duration: '9:48'
    },
    {   
        id: 9 ,
        status: true ,
        poster: posterpicture ,
        video: video4 , 
        channelphoto: videopic1 ,
        des: "(reverb)" ,
        viewers: 150 ,
        time: "2 hours ago" ,
        duration: '23:32'
    },
    {   
        id: 10 ,
        status: true ,
        poster: posterpicture ,
        video: video1 , 
        channelphoto: videopic1 ,
        des: "la leçon reverb 202" ,
        viewers: 150 ,
        time: "2 hours ago" ,
        duration: '55:35'
    },
    {   
        id: 11 ,
        status: true ,
        poster: posterpicture ,
        video: video2 , 
        channelphoto: videopic1 ,
        des: "la leçon reverb 202" ,
        viewers: 150 ,
        time: "2 hours ago"  ,
        duration: '23:33'
    },
    {   
        id: 12 ,
        status: true ,
        poster: posterpicture ,
        video: video3 , 
        channelphoto: videopic1 ,
        des: "la leçon reverb 202" ,
        viewers: 150 ,
        time: "2 hours ago" ,
        duration: '3:21'
    }
]



export {linkData1 , linkdata2 , linkdata3 , linkdata4 , linkdata5 , linkdata6 , videodata}