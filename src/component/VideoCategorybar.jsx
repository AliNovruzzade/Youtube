import React from 'react'
import CategoryDetailsMain from '../component/CategoryDetailsMain'
import CategoryVideoList from '../component/CategoryVideoList'

const VideoCategorybar = () => {
  return (
    <div className='video-category-details-main'>
      <CategoryDetailsMain />
      <CategoryVideoList />
    </div>
  )
}

export default VideoCategorybar