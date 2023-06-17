// First React Component
//  To import react component first export it from the file using the default export and then 
// import it in the main file 
// import Navbar from './components/Navbar';
// function App() {
//   return (
//     <>
// <Navbar/>
//     </>
//   );
// }

// Props and PropTypes
// Props are used to send information and recieve it in the document and write it in the document 
// First we have to pass it in the component where we have called it like here we have written in the 8 line 
// <Navbar name="Lakshay" about="This is about "/> we can use the props name and about in the component like 
// props.name it will give "Lakshay" and we can use props.abou t to get about section
// We will never change the props information in the function 


// PropTypes 
// This is used to set the type of value we need a particular prop
// For eg:
// If we set the proptype of the name as string then we have to enter a string otherwise it will throw an error but the code will run
// There is another function called isRequired 
// If we don't pass any value to any props and it is set to isRequired then it will throw an error 
// If the name is pass through isRequire then i have to pass a value for name otherwise it will throw an error

// Default Props
// It is used to set default values to a prop 
// If we don't pass any value then it will use the default value 
// If we have passed a value in an isRequired function and we have also given it value in default props and we haven't given a value through component then it will take the value of default and don't through any error 


// Navbar.propTypes={
//     title:PropTypes.string.isRequired,
//     about:PropTypes.string,
//   }
  
//   Navbar.defaultProps={
//     title:"Lakshay",
//   };