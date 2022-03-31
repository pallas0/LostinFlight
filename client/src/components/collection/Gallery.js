// import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Card from 'react-bootstrap/esm/Card'
import Col from 'react-bootstrap/esm/Col'


function Gallery( {species, region, image, date} ) {


  return (
    <div id="galleryCard">
      <Container>
          <Col>
            <Card className="text-center my-3" style={{ width: '18rem' }}>
               {image}
            <br></br>
            <h4>
              <b>Species:   </b>
               {species}
            <br></br>
              <b>Region:     </b> 
                {region}
            <br></br>
            </h4>
                 Date: {date}
          </Card>
          </Col>
      </Container> 

    </div>
  )
}

export default Gallery