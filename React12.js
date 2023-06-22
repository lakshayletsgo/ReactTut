// How to load an entire array
// We have used class component 
// So to use state we define it as follow
// So to use state we define it as follow
// constructor() {
//     super();
//     console.log("Constructor is called!! from newState");
//     this.state = {
//       articles: this.article,
//       loading: false,
//     };
//   }

// Now we will iterate article array by using {this.state.articles.map((element) => {console.log(element)})
// In this we get entire article array in the console
// We can use it to iterate it in the state and from there to the props

// {this.state.articles.map((element) => {
    // return (
    //     <div className="col-md-4" key={element.url}>
    //       <NewsItem
    //         title={element.title.slice(0,50)}
    //         description={element.description.slice(0,80)}
    //         imageUrl={element.urlToImage}
    //         newUrl={element.url}
    //       />
    //     </div>
    //   );
    // })}


// We have to define a key to the element from which it can easily iterate 
// Here we have used the news link as a key
// Then we have treated element as a object and called its title and description 
// We have sliced the description and title so as to maintain a uniformity