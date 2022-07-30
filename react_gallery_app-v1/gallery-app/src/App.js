import apiKey from './config';
import { BrowserRouter as Router, 
         Switch,
         Route,
         } from "react-router-dom";
import './App.css';
import Nav from './components/Nav';
import Search from './components/Search';
import Photos from './components/Photos';
import NotFound from './components//NotFound';
import React, { Component } from 'react';


class App extends Component {

  state = {
    images: []

  }

 handleGetRequest = async (e) => {
   e.preventDefault()
   const searchTerm = e.target.elements.searchValue.value
   const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchTerm}&per_page=24&format=json&nojsoncallback=1`
   const request = await fetch(url)
   const response = await request.json()
   
   this.setState({ images: response.photos.photo})
   console.log(searchTerm);
 }
  render () {
    console.log(this.state.images)
  return (
      <div>
       <Search handleGetRequest={this.handleGetRequest} />
       <Photos images={this.state.images}/>
       </div>
  );
  }
}

export default App;
