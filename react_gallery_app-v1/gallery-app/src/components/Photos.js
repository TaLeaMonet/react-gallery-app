import React, { Component } from 'react';

const Photos = (props) => {
  return (
    <div className="photo-container">
        <h2>Results</h2>
        {props.images.map(({farm, server, secret, id, title}) => {
          const url = `http://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
          return (
            <div key={id}>
              <img src={url} alt={title} />
              </div> 
          )
        })}
    </div>      
  );
}

export default Photos;