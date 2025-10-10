import React from 'react'
import GrandDaughter from './GrandDaughter'
import GrandSon from './GrandSon'

//prop drilling example

// function Child({message}) {
//   return (
//     <div className='children'>
//         <h2>Child {message.familyName}</h2>
//         <GrandDaughter message={message}/>
//         <GrandSon message={message}/>
//     </div>
//   )
// }

//context api example

import { FamilyContext } from './FamilyContext'
import { useContext } from 'react'

function Child() {
    const message = useContext(FamilyContext)
  return (
    <div className='children'>
        <h2>Child {message.familyName}</h2>
        <GrandDaughter />
        <GrandSon />
    </div>
  )
}

export default Child