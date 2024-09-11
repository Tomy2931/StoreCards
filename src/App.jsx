import { useState } from 'react'
import React, { useContext } from 'react'
import { CardFront } from './Sections/CardFront'
import {CardsContext} from './Context/Index'
import {CardsProvider} from './Context/Index'
import './App.css'

function App() {
    return (
        <CardsProvider>
            <main className='principal flex'>
                <MainContent />
            </main>
        </CardsProvider>
    );
}
function MainContent() {
    // Aquí puedes acceder al contexto correctamente
    const context = useContext(CardsContext)

    return (
        <>
            <button onClick={() => context.changeVisibilityCard()}  className='absolute left-2/4'>Press</button>    
            <CardFront/>
        </>
    );
}
export default App
