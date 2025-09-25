import React from 'react'

function Message() {

    function sayHello() {
        alert("Hello")
    }
  return (
    <button onClick={sayHello}>Press the button to say Hello</button>  //onClick is an event handler in React. In JS it is onclick.
  )
}

export default Message