import React from 'react'

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


const CategoryDetailsMain = () => {
  return (
    <div className='category-details-main'>
    <div className="categories">

      {
        keywords.map((v,i) => (
          <button key={i}>{v}</button>
        ))
      }

    </div>
  </div>
  )
}

export default CategoryDetailsMain