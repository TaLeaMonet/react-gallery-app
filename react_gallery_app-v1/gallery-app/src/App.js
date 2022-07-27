import apiKey from '../config';
import { BrowserRouter,
         Route,
         Switch } from "react-router-dom";
import './App.css';
import Nav from './components/Nav';
import Photos from './components/Photos';
import NotFound from './components//NotFound';
import React from 'react';


class App extends React.Component {
  render () {
  return (
   <div>
     <Nav />
   <Photos />
   <NotFound />
   </div>
  );
  }
}

export default App;
