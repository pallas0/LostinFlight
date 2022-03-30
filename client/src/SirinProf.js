import React from 'react'
import BirdCardContainer from './BirdCardContainer'
import BirdProfInfo from './BirdProfInfo'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';

function SirinProf() {
  return (
    <body id="sirin"> 
    <Container className="p-3 vstack"> 
      <Container id="sirin-title-blurb"className="p-5 mb-4 rounded-3">
      <h1 className="header"> Sirin
         </h1>
       </Container>
     </Container>
     <br></br>
     <Container id="sirin-main-blurb" className="p-5 mb-4 rounded-3">
       <Row>
         <Col>Profile Info</Col>
         <Col>Collection</Col>
       </Row>
     </Container>
 </body>
  )
}

export default SirinProf