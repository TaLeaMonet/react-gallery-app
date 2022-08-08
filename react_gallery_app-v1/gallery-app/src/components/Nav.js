import React, { Component } from 'react';
import { Route, NavLink, Router, Switch } from  "react-router-dom";
import PhotoResults from './PhotoResults';
import Photos from './Photos';
import Container from 'react-bootstrap/Container';

class Nav extends Component {
  render () {
  return (
    <nav className="main-nav">
        <ul>
          <li><NavLink to={'/cats'}>Cats</NavLink></li>
          <li><NavLink to={'/dogs'}>Dogs</NavLink></li>
          <li><NavLink to={'/computers'}>Computers</NavLink></li>
        </ul>  
    </nav>

   );
  }
}

export default Nav;