// This is the textUtils with Dark Mode
// This is how u can make a textUtils site with dark mode 
// Here we have just used the objects in the useState function


// NavBar
// import React from 'react'
// import PropTypes from 'prop-types'
// export default function Navbar(props) {
//   return (
//     <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
//   <div className="container-fluid">
//     <a className="navbar-brand" href="/">{props.title}</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="/">{props.home}</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="/">About</a>
//         </li>
//         </ul>
      
//     </div>
//   </div>
//   <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
//   <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
//   <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> Dark Mode</label>
// </div>
// </nav>
//   )
// }

// Navbar.propTypes={
//   title:PropTypes.string.isRequired,
//   about:PropTypes.string,
// }

// Navbar.defaultProps={
//   title:"Lakshay",
// };




// App
// import logo from './logo.svg';
// import React from 'react'

// import { useState } from "react";
// import "./App.css";
// import About from "./components/About";
// import Navbar from "./components/Navbar";
// import TechBar from "./components/TechBar";

// function App() {
//   const[mode, setMode] = useState('light');
//   const toggleMode=()=>{
//     if(mode==='light'){
//       setMode('dark');
//       document.body.style.backgroundColor='black';

//     }
//     else{
//       setMode('light');
//       document.body.style.backgroundColor = 'white';
//     }
//   }
//   return (
//     <>
//       <Navbar title="TextConvertor" home="Home" mode={mode} toggleMode={toggleMode}/>
//       <div className="container">
//         <TechBar head="Text to Upper and Lower Case" mode={mode}/>
//         {/* <div className="my-5">
//       <About/>
//         </div> */}
//       </div>
//     </>
//   );
// }

// export default App;





// TechBar
// import React, { useState } from "react";

// function TechBar(props) {
//   const handleUpClick = () => {
//     const val = value.toLowerCase();
//     setValue(val);
//   };
//   const handleLowClick = () => {
//     const val2 = value.toUpperCase();
//     setValue(val2);
//   };
//   const handleClearClick = () => {
//     const val = "";
//     setValue(val);
//   };
//   const handleCopyText = () => {
//     const txt = document.getElementById("myBox");
//     txt.select();
//     navigator.clipboard.writeText(txt.value);
//   };

//   const handleOnChange = (event) => {
//     console.log("There is some value the user has put in ");
//     setValue(event.target.value);
//   };
//   const [value, setValue] = useState("");
//   return (
//     <div className="container" 
//     style={{color:props.mode==='dark'?'white':'black'}}>
//       <h1>{props.head}</h1>
//       <div className="mb-3 my-3">
//         <textarea
//           className="form-control"
//           value={value}
//           id="myBox"
//           rows="8"
//           onChange={handleOnChange}
//           style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}}
//         ></textarea>
//       </div>
//       <button className="btn btn-primary mx-2" onClick={handleUpClick}>
//         Convert to Lower case
//       </button>
//       <button className="btn btn-primary mx-2" onClick={handleLowClick}>
//         Convert to Upper case
//       </button>
//       <button className="btn btn-primary mx-2" onClick={handleCopyText}>
//         Copy Text
//       </button>
//       <button className="btn btn-primary mx-2" onClick={handleClearClick}>
//         Clear Text
//       </button>
//       <h3 className="mt-5">You have entered </h3>
//       <h5>No of letters: {value.length}</h5>
//       <h5>No of words: {value.split(" ").length}</h5>
//       <h4 className="mt-4">
//         You can read this entire paragraph in {0.008 * value.split(" ").length}{" "}
//         min
//       </h4>
//       <h3 className="mt-3">Preview</h3>
//       <p>{value.length>0?value:"Enter something to preview"}</p>
//     </div>
//   );
// }

// export default TechBar;
