import React from 'react'

function Popup({ selectedMovie, openPopup, closePopup }) {
  return (
    <section className='popup'>
      <div className='content'>
        <h2>
          {selectedMovie.Title} <span>{selectedMovie.Year}</span>
        </h2>

        <p className='rating'>Rating: {selectedMovie.imdb}</p>
        <div className='plot'>
          <img src={selectedMovie.Poster} alt='movie poster' />
          <p>{selectedMovie.Plot}</p>
        </div>
      </div>
    </section>
  )
}

export default Popup
