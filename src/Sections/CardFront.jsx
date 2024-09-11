import './CardFront.css'
import '../App.css'
import React, { useContext } from 'react'
import {CardsContext} from '../Context/Index'



function CardFront (){
    const context = useContext(CardsContext)
    return(
            
            <div className={`cardBorder bg-gray-950 ${(context.visibleCard ?  'onScreen' : 'offScreen')}`}>
                <div className="cardName bg-gray-950 text-center h-10 items-center ">Nombre</div>

                <div className="cardImg w-full "><img src="https://th.bing.com/th/id/OIG2.H1VY0idA3cGHVUy8_NmE?pid=ImgGn" alt="Card Image" /></div>

                <div className="cardDesc text-center mt-2 ">Lorem ipsum t. Sint reuptas ipsam eatist ullam accusantium facere. Cum, voluptatibus deserunt.</div>
            </div>
    )
}
export {CardFront};