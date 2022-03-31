// import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Card from 'react-bootstrap/esm/Card'
import Col from 'react-bootstrap/esm/Col'


function Gallery( {species, region, image, date} ) {


  return (
    <div>
      <Container>
          <Col>
               <Card class='sm'>
               Image: {image}
               <br></br>
                Species: {species}
               <br></br>
               Region: {region}
               <br></br>
               Date: {date}
               </Card>
          </Col>
      </Container> 

    </div>
  )
}

export default Gallery