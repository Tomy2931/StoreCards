import React from 'react';
import { createContext, useState, useEffect } from 'react'


export const CardsContext = createContext()

export const CardsProvider = ({children}) => {
    //Visibility Card ON/OFF
    const [visibleCard,setVisibleCard] = useState(false);
    const changeVisibilityCard = () => {setVisibleCard(!visibleCard)}

    return (
        <CardsContext.Provider value={{
            visibleCard,setVisibleCard,changeVisibilityCard
            

        }}>{children}
        </CardsContext.Provider>
    );
};
