// Adding category and Router 
// After the pageSize we have to make the site so that we can click on a particular category and get that type of the news
// For this we first have to pass the category as a props
// And catch it in the link of the api
// For this we have done this
// https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&category=${this.props.category}&apiKey=f4d2e7ad4367421e8ee526f7e4977a82&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;

// We have also set some default props and their types
// static defaultProp={
//     pageSize:1,
//     country:"in",
//     category:"general"
// }
// static propTypes={
// pageSize: PropTypes.number,
// country: PropTypes.string,
// category:PropTypes.string,
// } 


// Adding Router 
// For this we have made so that when a link is fetched changes the category in the api link and then fetch the data 
// <Route exact path='/business' element={<News key="business" pageSize={10} country="in" category="business"/>}> </Route>

// In this when a business is there in the path it will call pass the prop category business 
// Similarly we have done this for all other pages
// Then we have used exact key word 
// So that it only at the exact link
// We have used key in the element so that it re renders the pages
// Otherwise it will only display the new data when we reloads the page manually
{/* <Link className="nav-link" to="/business">Business</Link> */}
// This is what is inside the navbar 

