import './App.css';
import InputContainer from './components/InputContainer';
import TodoContainer from './components/TodoContainer';
import { useState } from 'react';

function App() {

  const[inputVal, setInputVal] = useState("");
  const[todos, setTodos] = useState([]);

  function writeTodo(e){
    setInputVal(e.target.value);
  }
  function addTodo(){
    if(inputVal!=''){
      setTodos((prevTodos)=>[...prevTodos, inputVal]); //...prevTodos is used to keep the previous todos and add the new one
      setInputVal(''); //clear the input field after adding the todo
    }
  }
  function delTodo(todoIndex){
    setTodos((prevTodos)=> prevTodos.filter((prevTodos, prevTodosIndex)=>{
      return prevTodosIndex!=todoIndex;
    }) 
    )
  }

  return (
    <main>
      <h1>To Do List</h1>
      <InputContainer inputVal={inputVal} writeTodo={writeTodo} addTodo={addTodo} todos={todos}/>


      <TodoContainer todos={todos} delTodo={delTodo}/>
      
    </main>
  )
}

export default App
