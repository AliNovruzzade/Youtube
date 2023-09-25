import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import { GrFormPrevious } from "react-icons/gr"
import { MdNavigateNext } from "react-icons/md"

const keywords = [
  'All',
  'React js',
  'Angular js',
  'React Native',
  'use of API',
  'Redux',
  'Music',
  'Algorithm Art ',
  'Guitar',
  'Bengali Songs',
  'Coding',
  'Cricket',
  'Football',
  'Real Madrid',
  'Gatsby',
  'Poor Coder',
  'Shwetabh',
  'Cricket',
  'Football',
  'Real Madrid',
  'Gatsby',
  'Poor Coder',
  'Shwetabh',
  'Cricket',
  'Football',
  'Real Madrid',
  'Gatsby',
  'Poor Coder',
  'Shwetabh'
]


const ScrollMenu = () => {


  return (
    <div className='scrollmenu-main'>
      <div className="categories-bar">

        {
          keywords.map((v,i) => (
            <button key={i}>{v}</button>
          ))
        }

      </div>
    </div>
  )
}

export default ScrollMenu