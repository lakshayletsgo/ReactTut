// Adding loading animation the news app
// For this we have to first download the loading gif from the net
// Then we make a component of it   

// import React, { Component } from 'react'
// import Loadingg from './Loading.gif'

// export default class Loading extends Component {
//   render() {
//     return (
//       <div className='text-center'>
//         <img src={Loadingg} alt="Loading" />
//       </div>
//     )
//   }
// }

// We then use it where we want it  

// In this site we have used when the data is loaded and when the user click next or previous button
// {this.state.loading && <Loading/>}
// This is used to display loading whenever loading is true Loading component will be called and displayed

// We have set it true when the data is fetched from the api and when it is displayed

// After it is stored in the state loading is set false

// We have also made so that whenever we click next or previous page
// The current data gets removed and only loading is shown
// {!this.state.loading&&this.state.articles.map((element) => {

// If the loading is true it will not render the data 
// If the loading is false it will render the data 