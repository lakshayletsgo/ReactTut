// We can multiple useState function like this
// In this we have use setState in a object and we have make a dark mode toggle 


// import React, { useState } from "react";

// export default function About() {
//     const [myStyle, setMyStyle]=  useState({

//         color:'black',
//         backgroundColor:'white',
//     })

//     const [btntxt, setBtnTxt]= useState('Enable Dark Mode');

    
//     const toggleStyle=()=>{
//         if(myStyle.color==='black'){
//             setMyStyle({
//                 color:'white',
//                 backgroundColor:'black', 
//             })
//             setBtnTxt('Enable Light Mode');
//         }else{
//             setMyStyle({
//                 color:'black',
//                 backgroundColor:'white',
//             })
//             setBtnTxt('Enable Dark Mode')
//         }
//     }
    
//   return (
//     <div className="container border border-1 border-black" style={myStyle} >
//       <h1>About Us</h1>
//       <div className="accordion" id="accordionExample">
//         <div className="accordion-item">
//           <h2 className="accordion-header">
//             <button
//               className="accordion-button"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#collapseOne"
//               aria-expanded="true"
//               aria-controls="collapseOne"
//               style={myStyle}
//             >
//               Accordion Item #1
//             </button>
//           </h2>
//           <div
//             id="collapseOne"
//             className="accordion-collapse collapse show"
//             data-bs-parent="#accordionExample"
//             style={myStyle}
//           >
//             <div className="accordion-body">
//               <strong>This is the first item's accordion body.</strong> It is
//               shown by default, until the collapse plugin adds the appropriate
//               classes that we use to style each element. These classes control
//               the overall appearance, as well as the showing and hiding via CSS
//               transitions. You can modify any of this with custom CSS or
//               overriding our default variables. It's also worth noting that just
//               about any HTML can go within the <code>.accordion-body</code>,
//               though the transition does limit overflow.
//             </div>
//           </div>
//         </div>
//         <div className="accordion-item">
//           <h2 className="accordion-header">
//             <button
//               className="accordion-button collapsed"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#collapseTwo"
//               aria-expanded="false"
//               aria-controls="collapseTwo"
//               style={myStyle}
//             >
//               Accordion Item #2
//             </button>
//           </h2>
//           <div
//             id="collapseTwo"
//             className="accordion-collapse collapse"
//             data-bs-parent="#accordionExample"
//             style={myStyle}
//           >
//             <div className="accordion-body">
//               <strong>This is the second item's accordion body.</strong> It is
//               hidden by default, until the collapse plugin adds the appropriate
//               classes that we use to style each element. These classes control
//               the overall appearance, as well as the showing and hiding via CSS
//               transitions. You can modify any of this with custom CSS or
//               overriding our default variables. It's also worth noting that just
//               about any HTML can go within the <code>.accordion-body</code>,
//               though the transition does limit overflow.
//             </div>
//           </div>
//         </div>
//         <div className="accordion-item">
//           <h2 className="accordion-header">
//             <button
//               className="accordion-button collapsed"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#collapseThree"
//               aria-expanded="false"
//               aria-controls="collapseThree"
//               style={myStyle}
//             >
//               Accordion Item #3
//             </button>
//           </h2>
//           <div
//             id="collapseThree"
//             className="accordion-collapse collapse"
//             data-bs-parent="#accordionExample"
//             style={myStyle}
//           >
//             <div className="accordion-body">
//               <strong>This is the third item's accordion body.</strong> It is
//               hidden by default, until the collapse plugin adds the appropriate
//               classes that we use to style each element. These classes control
//               the overall appearance, as well as the showing and hiding via CSS
//               transitions. You can modify any of this with custom CSS or
//               overriding our default variables. It's also worth noting that just
//               about any HTML can go within the <code>.accordion-body</code>,
//               though the transition does limit overflow.
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="container my-3">

//       <button type="button" onClick={toggleStyle} class="btn btn-info">{btntxt}</button>
//       </div>
//     </div>
//   );
// }
