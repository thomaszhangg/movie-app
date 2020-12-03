import React from 'react'
import '../css/movieResults.css'
import SingleMovie from './SingleMovie'

function MovieResults({ movieResults }) {
  return (
    <section className='movie-results'>
      {movieResults.map((singleMovie) => (
        <SingleMovie singleMovie={singleMovie} key={movieResults.imdbID} />
      ))}
    </section>
  )
}

export default MovieResults
