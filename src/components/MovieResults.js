import React from 'react'
import '../css/movieResults.css'
import SingleMovie from './SingleMovie'

function MovieResults({ movieResults, openPopup }) {
  return (
    <section className='movie-results'>
      {movieResults.map((singleMovie) => (
        <SingleMovie
          singleMovie={singleMovie}
          key={singleMovie.imdbID}
          openPopup={openPopup}
        />
      ))}
    </section>
  )
}

export default MovieResults
