import React, { useContext, useState } from 'react'
import { BsEmojiSmile } from "react-icons/bs";
import { VideoContext } from '../context/VideoContext';

const WriteComment = () => {

    const {sendCom , setSendCom , setShowCommentBtn , showCommentBtn , writeComment , setWriteComment } 
    = useContext(VideoContext)

    const handlesendcomment = async () => {
        if(sendCom.length > 0 ) {
            await writeComment.push({
                comment: sendCom ,
                statusUser: 2 ,
                chatId: 0
            });
            await setWriteComment([...writeComment])
            setSendCom('')
        }
    }

  return (
    <div className='write-comment-input'>
        <div className="write-input-side">
            <img src="https://picsum.photos/200/300" alt="" />
            <input
             type="text" 
             placeholder='Add a comment...'
             value={sendCom}
             onChange={(e) => setSendCom(e.target.value)}
             onFocus={() => setShowCommentBtn(true)}
             />
        </div>

    <div className={showCommentBtn ? 'write-input-btn' : 'hidden-write-input'}>
        <button className='emoji-btn'><BsEmojiSmile /></button>
        <div className="comment-send-btn">
            <button onClick={() => setShowCommentBtn(!true)}>Cancel</button>
            <button onClick={handlesendcomment}>Comment</button>
        </div>
    </div>

    </div>
  )
}

export default WriteComment