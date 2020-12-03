import React from 'react'
import '../css/search.css'

function Search() {
  return (
    <section className='search-box-wrap'>
      <input
        type='text'
        placeholder='Search for a movie...'
        className='search-box'
      ></input>
    </section>
  )
}

export default Search
