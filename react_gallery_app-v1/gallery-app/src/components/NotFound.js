import React from 'react';

const NotFound = (props) => {
  return (
    <div className="Container">
        <ul>
          <li className="not-found">
            <h3>No Results Found</h3>
            <p>Your search did not return any results. Please try again.</p>
          </li>
        </ul>
    </div>
  );
}

export default NotFound;