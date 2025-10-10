import React from 'react'

//prop drilling example

// function GrandDaughter({message}) {
//   return (
//     <div className='gdaughter'>
//         <h3>Grand daughter {message.familyName}</h3>
//     </div>
//   )
// }


//context api example

import { FamilyContext } from './FamilyContext'
import { useContext } from 'react'

function GrandDaughter() {
    const message = useContext(FamilyContext)
  return (
    <div className='gdaughter'>
        <h3>Grand daughter {message.familyName}</h3>
    </div>
  )
}

export default GrandDaughter