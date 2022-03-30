import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'

function Gallery( { species, region} ) {




  // // console.log(user)
  //   // run fetch for gallery everytime a new one is added 
  //   useEffect(() => {
  //     fetch(`http://127.0.0.1:3000/users/${user.id}/collection`)
  //     .then(resp => resp.json())
  //     // .then(data => console.log(data))
  //     .then(setBirds)
  //   }, [])


console.log(species, region)

  return (
    <div>
      Hello World
      <Container>
        <Row>
          {species}
          {region}
        </Row>
      </Container> 

    </div>
  )
}

export default Gallery