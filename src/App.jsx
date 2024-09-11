import { useState } from 'react'
import { CardFront } from './Sections/CardFront'
import './App.css'

function App() {
  
  return (
    <>
      <main className='principal flex' >
        <button className='absolute left-2/4 '>Press</button>
        <CardFront></CardFront>
      </main>
    </>
  )
}

export default App
