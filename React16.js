// How to make a single page loading site or infinite scrolling

// We can create it by using a package called infinte scrolling
// We first install that package using the 
// npm i react-infinite-scroll-component
// After that we have to add it using 
// import InfiniteScroll from "react-infinite-scroll-component";

// After we include it in the main content where we want infinite scrolling
// For example when we want to add infinite scrolling we add it in the start of main content 
// Not in the navbar
// We then
//  <InfiniteScroll
//           dataLength={this.state.articles.length}
//           next={this.fetchMoreData}
//           hasMore={this.state.articles.length <= this.state.totalResults}
//           loader={<Loading />}
//   >

// In this we have used it so that it will be scrolling untill our data is ended
// We have used the condition untill the lenght of articles is equal to total result
// We have then added loader that we have downloaded from online site
// We have then define the fetchMore function
//  fetchMoreData = async () => {
//     this.setState({ page: this.state.page + 1 });
//     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f4d2e7ad4367421e8ee526f7e4977a82&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     this.setState({
//       articles: this.state.articles.concat(parsedData.articles),
//       totalResults: parsedData.totalResults
//     })
//   };

// It is similar to upadate news function 
// Just in this we have made so that the data is concated in the already existing data