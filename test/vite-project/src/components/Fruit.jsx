import React from 'react'

function Fruit({name, color}) {
  return (
    //<li>The color of {name} is {color}</li> //this is creating components for object properties

    //we can apply conditional rendering also
    <li>{color==="Yellow" ? <h3>The color of {name} is {color}</h3> : ""}</li>
  )
}

export default Fruit