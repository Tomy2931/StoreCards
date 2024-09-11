import { useState } from 'react'
import { CardFront } from './Sections/CardFront'
import {CardsProvider} from './Context/Index'
import './App.css'

function App() {
  
  return (
    
    <main className='principal flex' >

          <CardsProvider>
            <button className='absolute left-2/4 '>Press</button>
            <CardFront></CardFront>
          </CardsProvider>
          
        </main>

  )
}

export default App
