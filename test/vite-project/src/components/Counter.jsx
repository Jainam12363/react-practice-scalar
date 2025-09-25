import React, {useState} from 'react'

function Counter() {


    // 1)
    // const[count, setCount]=useState(0);

    // function incrementCount(){
    //     setCount(count+1);
    // }
    // function decrementCount(){
    //     setCount(count-1);
    // }   


    // 2)
    const[count, setCount]=useState(0);
    const[factor, setFactor]=useState(1);

    function incrementCount(){
        setCount(count+factor);
    }
    function decrementCount(){
        setCount(count-factor);
    }
    function incrementFactor(){
        setFactor(factor+1);
    }
    function decrementFactor(){
        setFactor(factor-1);
    }
    
  return (
    <div>

        {/* 1) */}
        {/* <h1>This is my counter: {count}</h1>

        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button> */}

        {/* 2) */}

        <h1>This is my counter: {count}</h1>

        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>

        <h1>Factor counter: {factor}</h1>

        <button onClick={incrementFactor}>Increment</button>
        <button onClick={decrementFactor}>Decrement</button>
    </div>
  )
}

export default Counter