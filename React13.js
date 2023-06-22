// How to fetch data from a api key
// We can fetch data using the the fetch function

// async componentDidMount(){
//     let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=f4d2e7ad4367421e8ee526f7e4977a82&page=1&pageSize=20";
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     this.setState({articles:parsedData.articles, totalResults:parsedData.totalResults})
//   }

// This is componentDidMount function which executes after the render function
// In this we have first fetch the data nd store it in the data variable and then parse it into json format

// We have then set the state of the data article to the parsed data 
// Rest is same as previous one of displaying data


// How to make so that we do next page it don't show blank page
// Either it don't show next page or it doesn't show the next page option

// Here we have made two button next and previous
// Previous will work normally we can easily make to do that it wont show page by disabled={this.state.page<=1}
// It will make the icon fade 

// For next we have used of pageSize where we have to set the page size i.e no. of articles it will display on a page
// We have selected 20 articles/page

// handleNextPage=async()=>{
//     if(this.state.page+1>Math.ceil(this.state.totalResults/20)){}
//     else{
//       let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=f4d2e7ad4367421e8ee526f7e4977a82&page=${this.state.page+1}&pageSize=20`;
//       let data = await fetch(url);
//       let parsedData = await data.json();
//       this.setState({
//         page:this.state.page+1,
//         articles:parsedData.articles
//       })
//     }
//   }

// We have used this function onClick property of the button 
// We have done that if the number of articles fetched divided by number by 20 
// If it is greater than the current page then it will display the data rest it wont show the data 

// We have similar in the previous button 
// handlePrevPage= async ()=>{
//     let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=f4d2e7ad4367421e8ee526f7e4977a82&page=${this.state.page-1}&pageSize=20`;
//     let data = await fetch(url);
//       let parsedData = await data.json();
//       this.setState({
//           page:this.state.page-1,
//           articles:parsedData.articles
//       })
//     }

