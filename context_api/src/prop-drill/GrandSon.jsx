import React from 'react'


//prop drilling example

// function GrandSon({message}) {
//   return (
//     <div className='gson'>
//         <h3>Grand son {message.familyName}</h3>
//     </div>
//   )
// }

//context api example
import { FamilyContext } from './FamilyContext'
import { useContext } from 'react'

function GrandSon() {
    const message = useContext(FamilyContext)
  return (
    <div className='gson'>
        <h3>Grand son {message.familyName}</h3>
    </div>
  )
}

export default GrandSon