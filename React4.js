// State and Handling Events

// UseState is a state of a page 
// We can use it as a variable 
// It is used first by importing it 
// import React,{useState} from 'react'

// Then we declare it like an array like this 
// const [value,setValue] = useState("This is state function");

// (This is state function) value is set to value function and if we want to change the value of value then we have to use the function setValue.
// We can use the value of variable of value in the file



// import React, { useState } from "react";
// function TechBar(props) {
//     const handleUpClick= ()=>{
//         const val = value.toLowerCase();
//         setValue(val)
//     }
//     const handleOnChange =(event)=>{
//         setValue(event.target.value)
//     }
//   const [value, setValue] = useState("This is state function");
//   return (
//     <div>
//       <h1>{props.head}</h1>
//       <div className="mb-3 my-3">
//         <textarea className="form-control" value={value} id="myBox" rows="8" onChange={handleOnChange}></textarea>
//       </div>
//       <button className="btn btn-primary" onClick={handleUpClick}  >Convert to Lower  case</button>
//     </div>
//   );
// }
// export default TechBar;


// In this we have use three concepts useState, handleEvent and onChange function 
// First we have added the value(This is a state function) to the variable value 
// Then we have used it in the value of the textarea 
// Then we have put an event handleUpClick which will fire when we click the button 
// This event will change the value to the desired value we want (Here i have removed the line)
// After that we have to add another event name onChange on textarea which will fire if we add or change the value of the textarea
// It will just update the value to the value we have added 
// Then we have just use toLowerCase function on value variable and then set the value variable with the help of setValue
