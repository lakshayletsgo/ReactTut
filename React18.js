//How to hide any important information using environment variable

// We can do this by making a file name .env.local
// This file is also ignored by git
// We have to then create a variable starting with the name REACT_APP

// Then we can use it by using process.env.REACT_APP(rest of the name )

// For example here
// Here we have used a variable name
// REACT_APP_API_KEY = 'f4d2e7ad4367421e8ee526f7e4977a82'

// We can then use it 
// apiKey = process.env.REACT_APP_API_KEY;

// I have used it in hiding my api key
// I have then send the variable apiKey to the new Component where it is renderd using function 
// this.props.apiKey