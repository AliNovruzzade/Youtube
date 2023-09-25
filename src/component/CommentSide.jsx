import React from 'react'
import WriteComment from './WriteComment'
import WriteCommentSide from './WriteCommentSide'

const CommentSide = () => {
  return (
    <div className='comment-main-side'>
        <WriteComment />
        <WriteCommentSide />
    </div>
  )
}

export default CommentSide