import React,{useState} from 'react'
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { FaShare } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

const IconSide = () => {

    let [like , setLike] = useState(15)
    let [dislike , setDislike] = useState(2)

    let [likeactive , setLikeactive] = useState(false)
    let [dislikeactive , setDislikeactive] = useState(false)


    const likefn = () => {
        if(likeactive) {
            setLikeactive(false)
            setLike(like - 1)
        }
        else{
            setLikeactive(true)
            setLike(like + 1)

            if(dislikeactive) {
                setDislikeactive(false)
                setLike(like + 1)
                setDislike(dislike - 1)
            }

        }
    }

    const dislikefn = () => {
        if(dislikeactive) {
            setDislikeactive(false)
            setDislike(dislike - 1)
        }
        else{
            setDislikeactive(true)
            setDislike(dislike + 1)

            if(likeactive) {
                setLikeactive(false)
                setDislike(dislike + 1)
                setLike(like - 1)
            }

        }
    }


  return (

    <div className='icon-side'>
        <div className="icon-btn-side">
            <button onClick={likefn}><AiFillLike size={20} /></button>
            <p>{like}</p>
        </div>
        <div className="icon-btn-side">
            <button onClick={dislikefn}><AiFillDislike size={20}/></button>
            <p>{dislike}</p>
        </div>
        <div className="icon-btn-side">
            <button><BiCommentDetail size={20} /></button>
            <p>300k</p>
        </div>
        <div className="icon-btn-side">
            <button><FaShare size={20} /></button>
            <p>Share</p>
        </div>
        <div className="icon-btn-side">
            <button><BsThreeDots size={20} /></button>
        </div>
        <div className="add-side">
            <img src="https://picsum.photos/200/300" alt="" />
        </div>
    </div>
  )
}

export default IconSide