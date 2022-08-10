import apiKey from './config';
import {  
         Switch,
         Route,
         withRouter,
         } from "react-router-dom";
import './App.css';
import Nav from './components/Nav';
import Search from './components/Search';
import PhotoResults from './components/PhotoResults';
import React, { Component } from 'react';

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
  
   const searchTerm = e.target[0].value
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