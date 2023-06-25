// How to add loading bar at the top

// First install npm library known as
// npm i react-top-loading-bar

// Then import it 
// import LoadingBar from 'react-top-loading-bar'

// Then use its method where we want to display it
// <LoadingBar
// color='#f11946'
// height={3}
// progress={this.state.progress}
// />

//This determines the height, colour and progress of it
// We have made it so that it changes dynamically
// It has been in the News component
// Where it will be changed when the data is fetched and when the data is parsed and when it is completed

// async updateNews() {
//     this.props.setProgress(0);
//     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f4d2e7ad4367421e8ee526f7e4977a82&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//     this.setState({ loading: true });
//     let data = await fetch(url);
//     this.props.setProgress(30);
//     let parsedData = await data.json();
//     this.props.setProgress(70);
//     this.setState({
//       articles: parsedData.articles,
//       totalResults: parsedData.totalResults,
//       loading: false,
//     });
//     this.props.setProgress(100);
//   }

