import React from 'react'
import '../css/search.css'

function Search({ handleInput, handleEnter }) {
  return (
    <section className='search-box-wrap'>
      <input
        type='text'
        placeholder='Search for a movie...'
        className='search-box'
        onChange={handleInput}
        onKeyPress={handleEnter}
      ></input>
    </section>
  )
}

export default Search
