import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';

function PhoenixProf() {
  return (
    <body id="phoenix"> 
    <Container className="p-3 vstack"> 
      <Container id="phoenix-title-blurb"className="p-5 mb-4 rounded-3">
      <h1 className="header"> Phoenix
         </h1>
       </Container>
     </Container>
     <br></br>
     <Container id="phoenix-main-blurb" className="p-5 mb-4 rounded-3">
       <Row>
         <Col>Profile Info</Col>
         <Col>Collection</Col>
       </Row>
     </Container>
 </body>
  )
}

export default PhoenixProf