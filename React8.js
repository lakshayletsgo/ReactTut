// React Routers 
// React Routers are used to connect pages
// React is an efficient app only because it loads the pages content without loading the page 
// It does it by just modifying the page content that is already present
// To do this it uses router 
// To use router we first download react-router-dom
// Then we import 
// import {
//     BrowserRouter as Router,
//     Routes,
//     Route,
//     // Link,
//   } from "react-router-dom";


// After this we make a Router and put our entire content in it 
// Then we use Routes inside the Router 
// We then use Route inside Routes to the page we want to load when site reach a certain link
// We then we Link where we have written anchor tag
{/* <Router>
      <Navbar title="TextConvertor" home="Home" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
        <Routes>
          <Route exact path="/about" element={<About/>}>
          </Route>
          <Route exact path="/" element={<TechBar head="Text to Upper and Lower Case" mode={mode} showAlert={showAlert}/>}>
            
          </Route>
        </Routes>
      </div>
    </Router> */}



// We use Link in the navbar and replace all the a with link and replace href with to 
// That all we want to do 