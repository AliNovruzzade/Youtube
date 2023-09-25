import React, { useContext } from 'react'
import {AiFillLike, AiFillDislike} from "react-icons/ai";
import { VideoContext } from '../context/VideoContext';

const WriteCommentSide = () => {

    const { writeComment } = useContext(VideoContext)

  return (
    <div className='write-comment-side'>

    {
        writeComment.map((v , i) => (
        <div key={i} className="comment-message-side">
            <img src="https://picsum.photos/200/300" alt="" />
            <div className="comment-title-side">
                <p className='comment-display-name'>Ali</p>
                <p>{v.comment}</p>
                <div className="comment-btn">
                    <button><AiFillLike /></button>
                    <button className='com-btn'><AiFillDislike /></button>
                </div>
            </div>
        </div>
        ))
    }

        
    </div>
  )
}

export default WriteCommentSide