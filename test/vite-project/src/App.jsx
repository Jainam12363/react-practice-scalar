import Hello from "./components/Hello";
import Bye from "./components/Bye";
import Hello1 from "./components/Hello1";
import Animals from "./components/Animals";
import Fruits from "./components/Fruits";
import Message from "./components/Message";
import Counter from "./components/Counter";
import Form from "./components/Form";

function App() {
  const seatNumbers=[1,4,7];  //for Hello1.jsx  //this is passing array as prop  //the array elements will be printed without comma
  return (
    <>
      <Hello/>
      <Bye/>
      <Hello1 name="Ravi" phone='9282912399' seatNumbers={seatNumbers}/>
      <Hello1 name="Kumar" phone='923232299' seatNumbers={seatNumbers}/>
      <Hello1 name="Ajay" phone='8239992199' seatNumbers={seatNumbers}/>
      <Hello1 name="Vijay" phone='9772192399' seatNumbers={seatNumbers}/>

      <Animals/>
      <Fruits/>


      {/* MODULE 4 */}
      <Message/>

      <Counter/>
      

      <Form/>

    </>
    
    
  )
}

export default App
