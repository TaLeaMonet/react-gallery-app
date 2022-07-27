import React from 'react';
import { Route, NavLink } from  "react-router-dom";

const Nav = (props) => {
  return (
    <div className="nav">
      <div>
        <ul>
        <li><NavLink to={`${}/`}>Cats</NavLink></li>
        <li><NavLink to={`${}/`}>Dogs</NavLink></li>
        <li><NavLink to={`${}/`}>Computers</NavLink></li>
        </ul>
        </div>
      

        <Route path={`${}/`} component={} />
        <Route path={`${}/`} component={} />
        <Route path={`${}/`} component={} />
        <Route path={`${}/`} component={} />
         </div>
  );
}

export default Nav;