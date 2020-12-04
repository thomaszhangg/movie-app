import React, { useState } from 'react'
import Search from './components/Search'
import MovieResults from './components/MovieResults'
import Popup from './components/Popup'

import axios from 'axios'

function App() {
  const [state, setState] = useState({
    movieInput: '',
    movieResults: [],
    selectedMovie: {},
    errorMessage: '',
  })

  // Base URL for API calls
  const apiURL = 'http://www.omdbapi.com/?apikey=71b07b4f'

  // handleChange
  const handleInput = (e) => {
    let input = e.target.value

    setState((prevState) => {
      return { ...prevState, movieInput: input }
    })
  }

  // handleSubmit
  async function handleEnter(e) {
    if (e.key === 'Enter') {
      // Returns a nested object, we'll find search results in []data.data.search
      let response = await axios.get(`${apiURL}&s=${state.movieInput}`)
      let movieResults = response.data.Search

      // Invalid Movie
      if (movieResults === undefined) {
        setState((prevState) => {
          return { ...prevState, errorMessage: 'Sorry, no movie...' }
        })
      } else {
        setState((prevState) => {
          return { ...prevState, movieResults: movieResults }
        })
      }
    }
  }

  async function openPopup(id) {
    console.log('ID', id)
    // Get information for this single movie
    let response = await axios.get(`${apiURL}&i=${id}`)
    let singleMovie = response.data

    setState((prevState) => {
      return { ...prevState, selectedMovie: singleMovie }
    })
  }

  const closePopup = () => {
    setState((prevState) => {
      return { ...prevState, selectedMovie: {} }
    })
  }

  return (
    <div className='App'>
      <header>
        <h1>HELLO MOVIES</h1>
      </header>

      <main>
        {/* Search Component */}
        <Search handleInput={handleInput} handleEnter={handleEnter} />

        {/* <MovieResults movieResults={state.movieResults} openPopup={openPopup} /> */}

        {/* Conditional rendering off a SelectedMovie information */}
        {state.selectedMovie.Title ? (
          <Popup selectedMovie={state.selectedMovie} closePopup={closePopup} />
        ) : (
          <MovieResults
            movieResults={state.movieResults}
            openPopup={openPopup}
          />
        )}

        {/* {state.errorMessage} */}
      </main>
    </div>
  )
}

export default App
