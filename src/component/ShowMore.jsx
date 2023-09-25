import React, { useContext, useState } from 'react'
import { useParams } from 'react-router'
import { VideoContext } from '../context/VideoContext'

const ShowMore = () => {

  const [ collaps , setCollaps ] = useState(false)
  const {id} = useParams()
  const {videodata} = useContext(VideoContext)
  const product = videodata.find(product => product.id == id) 
  const {viewers , time } = product

  return (
    <div className='watch-video-show-more'>
      <div className="watch-show-more">
        <p style={{fontWeight: '600'}}> {viewers} views - {time}</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta dolorum maiores ad perspiciatis ullam voluptatum tempore, quas ab ratione similique.</p>
        <br />
        <p className={`long-text ${collaps ? 'show-text' : ""}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit assumenda laboriosam ut, voluptates officiis velit ab animi modi commodi iste recusandae id placeat eius dolorem ex quos? Ut delectus at eveniet exercitationem quidem asperiores beatae, quis ea! Iure error dignissimos, beatae culpa aperiam voluptatibus tempore fugit excepturi ullam enim fuga maxime nostrum. Maiores nobis minima accusamus sed mollitia quaerat cum quibusdam ut rerum quo nam, optio, obcaecati voluptas adipisci nihil corporis totam fugit illum in expedita assumenda. Neque cum totam omnis corporis, quae dolore, ut aut iure adipisci quam aliquam quibusdam commodi accusantium incidunt magnam cupiditate amet voluptatum cumque perspiciatis dolorum? Asperiores numquam accusantium repellendus atque omnis excepturi, unde facere quas culpa quos at ipsam, inventore exercitationem ad quam cumque. Et voluptate reprehenderit voluptatum, itaque inventore maiores incidunt vero commodi recusandae, placeat iure sunt porro. Enim at ipsum voluptate perspiciatis dolorem sed autem possimus molestias velit modi asperiores unde magni, architecto optio, quibusdam dignissimos delectus obcaecati saepe. Deserunt quasi vitae at quibusdam temporibus, iusto quisquam quos, sint aspernatur velit facere numquam. Aliquam laborum a tempora? Corrupti labore modi fugiat est assumenda soluta nulla repudiandae. Ad dolor vel, fuga adipisci debitis similique nobis aperiam labore magnam, ullam consequatur nemo facere nihil.</p>
        {
          collaps ? 
          <button onClick={() => setCollaps(!collaps)}>Show less</button>
          :
          <button onClick={() => setCollaps(!collaps)}>Show more</button>

        }
      </div>
    </div>
  )
}

export default ShowMore