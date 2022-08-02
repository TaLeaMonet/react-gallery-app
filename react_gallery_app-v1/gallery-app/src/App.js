import apiKey from './config';
import { BrowserRouter, 
         Switch,
         Route,
         } from "react-router-dom";
import './App.css';
import Nav from './components/Nav';
import Search from './components/Search';
import PhotoResults from './components/PhotoResults';
import Photos from './components/Photos';
import NotFound from './components//NotFound';
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';


class App extends Component {

  state = {
    images: []

  }

 handleGetRequest = async (e) => {
   e.preventDefault()
   const searchTerm = e.target.elements.searchValue.value
   const data = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchTerm}&per_page=24&format=json&nojsoncallback=1`
   const request = await fetch(data)
   const response = await request.json()
   
   this.setState({ images: response.photos.photo})
   console.log(searchTerm);
 }

componentDidMount() {
  this.handleGetRequest();
}

  render () {
    console.log(this.state.images)
  return (
      <div>
        <Search handleGetRequest={this.handleGetRequest} />
          <Switch>
           <Nav />
              <Route exact path='/cats' component={PhotoResults} />
              <Route path='/dogs' component={PhotoResults} />
              <Route path='/computers' component={PhotoResults} />
          </Switch>
          <PhotoResults images={this.state.images} />
       </div>

       
  );
  }
}

export default App;
