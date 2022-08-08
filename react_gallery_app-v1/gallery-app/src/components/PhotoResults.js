import React, { Component } from 'react';


const PhotoResults = (props) => {
  return (
    <div className="photo-container">
        <h2>{props.title}</h2>
        <ul>
          {props.images?.map(({farm, server, secret, id, title}) => {
            const url = `http://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
            return (
                <li key={id}>
                  <img src={url} alt={title} /> 
                </li>
            )
          })}
        </ul>
    </div>      
  );
}

export default PhotoResults;