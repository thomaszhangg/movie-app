import React from 'react'

function SingleMovie({ singleMovie, openPopup }) {
    // console.log(singleMovie.imdbID)
  return (
    <div className='single-movie' onClick={() => openPopup(singleMovie.imdbID)}>
      <img src={singleMovie.Poster} alt='movie poster'></img>
      <h3>{singleMovie.Title}</h3>
    </div>
  )
}

export default SingleMovie
