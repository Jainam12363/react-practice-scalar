import React, {useState} from 'react'

function Form() {

    // 1)
    // const[text, setText]=useState("");

    // 2)  Handle multiple inputs in React
    // const[firstName, setfirstName]=useState("");
    // const[lastName, setlastName]=useState("");
    //the above 2 lines can be written in single line as below:

    const[name, setName]=useState({firstName:"", lastName:""});

    //3) Submit form in react
    function handleSubmit(e){
        e.preventDefault   //this prevents the page reload when submit is pressed
        console.log(name)
    }




  return (
    <div>
        
        {/* 1) */}
        
        {/* <form>
            <input onChange={(e)=>setText(e.target.value)} type='text' value={text} />  
            // a seperate function can also be created for onChange event by passing e as parameter
            <h1>{text}</h1>
        </form> */}



        {/* 2) */}
        {/* Handle multiple inputs in React */}
        
        
        <form>
            <label>First Name</label>
            <input onChange={(e)=>setName({...name, firstName : e.target.value})} type='text' value={name.firstName} />  
            <label>Last Name</label>
            <input onChange={(e)=>setName({...name, lastName : e.target.value})} type='text' value={name.lastName} />  
            //...name is used to retain the previous value of name object. it is spread operator
        </form>
        <h1> {name.firstName} - {name.lastName}</h1>

        {/* 3) Submit form in react */}
        <button onClick={(e)=>handleSubmit(e)}>Submit</button>

    </div>
  )
}

export default Form