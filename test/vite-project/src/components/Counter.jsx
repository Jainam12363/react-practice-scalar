import React, {useEffect, useState} from 'react'

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
    

    // 3)
    // useEffect runs after every render
    // component Mounting and component Updating
    //look at title of the screen
    //here effect runs after every element update

    // useEffect(()=>{
    //     console.log("use effect runs")
    //     document.title = `Count is ${count}`
    // })


    //but by using dependency array we can control when to run the effect
    //there is only component mounting and no component updating
    useEffect(()=>{
        console.log("use effect runs")
        document.title = `Count is ${count}`
    },[count]) // here effect runs only when count changes


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