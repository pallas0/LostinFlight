import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';

function CaladriusProf() {
  return (
    <body id="caladrius"> 
    <Container className="p-3 vstack"> 
      <Container id="caladrius-title-blurb"className="p-5 mb-4 rounded-3">
      <h1 className="header"> Caladrius
         </h1>
       </Container>
     </Container>
     <br></br>
     <Container id="caladrius-main-blurb" className="p-5 mb-4 rounded-3">
       <Row>
         <Col>Profile Info</Col>
         <Col>Collection</Col>
       </Row>
     </Container>
 </body>
  )
}

export default CaladriusProf
