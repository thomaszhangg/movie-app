import React, { useState } from 'react'
import Search from './components/Search'
import axios from 'axios'

function App() {
  const [state, setState] = useState({
    movieInput: '',
    movieResults: [],
    selectedMovie: {},
  })

  // Base URL for API calls
  const apiURL = 'http://www.omdbapi.com/?i=tt3896198&apikey=71b07b4f'

  // handleChange
  const handleInput = (e) => {
    let input = e.target.value

    setState((prevState) => {
      return { ...prevState, movieInput: input }
    })
  }

  async function handleEnter(e) {
    if (e.key === 'Enter') {

      // Returns a nested object, we'll find search results in []data.data.search
      let data = await axios(`${apiURL}&s=${state.movieInput}`)
      console.log(data)
    }
  }

  return (
    <div className='App'>
      <header>
        <h1>HELLO MOVIES</h1>
      </header>

      <main>
        {/* Search Component */}
        <Search handleInput={handleInput} handleEnter={handleEnter}/>
      </main>
    </div>
  )
}

export default App
