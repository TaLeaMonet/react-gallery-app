import apiKey from './config';
import { BrowserRouter, 
         Switch,
         Route,
         withRouter,
         } from "react-router-dom";
import './App.css';
import Nav from './components/Nav';
import Search from './components/Search';
import PhotoResults from './components/PhotoResults';
import Photos from './components/Photos';
import NotFound from './components//NotFound';
import React, { Component } from 'react';




/* Fetching data current approach drawbacks and potential approach 

Currently the handleGetRequest function is set up to take in an event object.
 This causes it to not be very reusable and only usable in search upon 
 submitting the search request, so when calling it in componentDidMount 
 lifecycle method on line 29 e is undefined.

Strip this function down a bit so that it takes in a searchTerm parameter
 instead of an event. Then when calling the function in componentDidMount, 
 pass it a string with a searchTerm.

To get the search functionality working, create a new function in Search 
component that does use the event object to prevent the default and then 
makes a call to the handleGetRequest function while passing it the value 
that the user has provided.
*/

class App extends Component {

  state = {
    images: [],
    cats: [],
    dogs:[],
    computers:[],
    searchTitle: ""

  }

 handleGetRequest = async (e) => {
  if(e) {
   e.preventDefault()
  
   const searchTerm = e.target.elements.searchValue.value
   this.setState({searchTitle: searchTerm})
   const data = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchTerm}&per_page=24&format=json&nojsoncallback=1`
   const request = await fetch(data)
   const response = await request.json()
   
   this.setState({ images: response.photos.photo})
   this.props.history.push(`/${searchTerm}`);
   console.log(searchTerm);
  }
 }


 handleDefaultRequest = async (searchTerm) => {
   if(searchTerm === 'cats' ) {
  const data = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchTerm}&per_page=24&format=json&nojsoncallback=1`;
  const request = await fetch(data);
  const response = await request.json();

  this.setState({ cats: response.photos.photo });
  console.log(searchTerm);
   } else if(searchTerm === 'dogs') {
    const data = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchTerm}&per_page=24&format=json&nojsoncallback=1`;
    const request = await fetch(data);
    const response = await request.json();
  
    this.setState({ dogs: response.photos.photo });
   } else if(searchTerm === 'computers') {
    const data = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchTerm}&per_page=24&format=json&nojsoncallback=1`;
    const request = await fetch(data);
    const response = await request.json();
  
    this.setState({ computers: response.photos.photo });
   }
};


componentDidMount() {
  this.handleGetRequest();
  this.handleDefaultRequest("cats");
  this.handleDefaultRequest("dogs");
  this.handleDefaultRequest("computers");
}

  render () {
    console.log(this.state.images)
  return (
      <div className="container">
        <Search handleGetRequest={this.handleGetRequest} />
        <Nav onClick={this.handleCatRequest}/>
          <Switch>
              <Route exact path='/cats' render={() => (<PhotoResults images={this.state.cats} title='Cats'/>)} />
              <Route exact path='/dogs' render={() => (<PhotoResults images={this.state.dogs} title='Dogs' />)} />
              <Route exact path='/computers' render={() => (<PhotoResults images={this.state.computers} title='Computers' />)} />
              <Route path='/:id'  render={() => (<PhotoResults images={this.state.images} title={this.state.searchTitle} />)}/>
          </Switch>
       </div>

       
  );
  }
}

export default withRouter(App);