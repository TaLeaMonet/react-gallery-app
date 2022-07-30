import React, { Component } from 'react';
import { Route, NavLink } from  "react-router-dom";

class Nav extends Component {
  render () {
  return (
    <div className="nav">
        <ul>
        <li><NavLink to={'/photos'}>Cats</NavLink></li>
        <li><NavLink to={'/photos'}>Dogs</NavLink></li>
        <li><NavLink to={'/photos'}>Computers</NavLink></li>
        </ul>
    </div>
   );
  }
}

export default Nav;