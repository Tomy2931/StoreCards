import React from 'react';
import { createContext, useState, useEffect } from 'react'


export const CardsContext = createContext()

export const CardsProvider = ({children}) => {

    const [visibleCard,setVisibleCard] = useState(false);








    return (
        <CardsContext.Provider value={{
            visibleCard,setVisibleCard,
            

        }}>{children}
        </CardsContext.Provider>
    );
};
