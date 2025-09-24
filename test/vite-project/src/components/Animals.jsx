import React from 'react'
//rendering array elements using map function
function Animals() {
    let animals= ['Dog','Cat','Elephant','Tiger'];
  return (
    //<div><h1>{animals}</h1></div> //this will print array elements without comma

    <div>
        {animals.map((animal)=>(
        <h1>{animal}</h1>
        ))}
    </div>
  )
}

export default Animals