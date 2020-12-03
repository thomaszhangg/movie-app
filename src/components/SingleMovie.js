import React from 'react'

function SingleMovie({ singleMovie }) {
  return (
    <div className='single-movie'>
      <img src={singleMovie.Poster} alt='movie poster'></img>
      <h3>{singleMovie.Title}</h3>
    </div>
  )
}

export default SingleMovie
