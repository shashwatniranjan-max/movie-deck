import React, { useEffect, useState } from 'react'
import Search from './components/search'

const App = () => {
  const [searchTerm, setsearchTerm] = useState("");

  useEffect(() => {
    
  }, [])

  return (
    <main>
      <div className='pattern' />
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="" />
          <h1>Find <span className='text-gradient'>Movies</span> You'll Love Without the Hassle</h1>
        </header>
        <Search searchTerm={searchTerm} setsearchTerm={setsearchTerm} />

      </div>
    </main>
  )
}

export default App