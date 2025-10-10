import React from 'react'
import Parent from './Parent'

//prop drilling example

// function Family({message}) {

//     console.log(message);
//   return (
//     <div className='family'>
//         <Parent message={message}/>
//     </div>
//   )
// }


function Family() {

  return (
    <div className='family'>
        <Parent />
    </div>
  )
}

export default Family