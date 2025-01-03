import React from 'react'
import Home from './pages/Home'
import AnimatedCursor from 'react-animated-cursor'

function App() {

  return (
    <>
      <AnimatedCursor color='0,0,1' />
      <div className='overflow-auto scrollbar-hidden'>
        <Home />
      </div>
    </>
  )
}

export default App

