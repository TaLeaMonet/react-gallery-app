import React, { Component } from 'react';

const Photos = (props) => {
  return (
    <div className="photo-container">
        <h2>Results</h2>
        {props.images.map(({id, title}) => {
          return (
            <div key={id}>
              <img src={title} alt={title} />
              </div> 
          )
        })}
    </div>      
  );
}

export default Photos;