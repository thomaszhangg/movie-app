import React from 'react'
import Search from './components/Search'

function App() {
  return (
    <div className='App'>
      <header>
        <h1>HELLO MOVIES</h1>
      </header>

      <main>
        {/* Search Component */}
        <Search />
      </main>
    </div>
  )
}

export default App
