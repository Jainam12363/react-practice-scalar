import React from "react";
import Fruit from "./Fruit";

//rendering array of objects using map function
function Fruits() {
  let fruits = [
    { name: "Apple", color: "Red" },
    { name: "Banana", color: "Yellow" },
    { name: "Grapes", color: "Purple" },
    { name: "Mango", color: "Yellow" },
  ];
  return <div>
    {fruits.map((fruit)=>(
        //<li>{fruit.name} - {fruit.color}</li> //this can be done but if there are many properties then everytime we have to write fruit.propertyname
        //so it is said to create components 
        <Fruit name={fruit.name} color={fruit.color}/>
    ))}
  </div>;
}

export default Fruits;
