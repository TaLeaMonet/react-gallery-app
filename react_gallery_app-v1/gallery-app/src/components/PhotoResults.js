import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PhotoResults = (props) => {
  return (
    <div className="photo-container">
        <h2>Results</h2>
        {props.images.map(({farm, server, secret, id, title}) => {
          const url = `http://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
          return (
            <div id="image-wrapper" key={id}>
              <Container>
              <Row>
              <Col md={4}><img src={url} alt={title} /> <h1>{title}</h1></Col>
             <Col></Col>
             <Col></Col>
              </Row>  
              </Container>
              </div> 
          )
        })}
    </div>      
  );
}

export default PhotoResults;