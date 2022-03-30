import React from 'react'
import Container from 'react-bootstrap/Container';
// import Toast from 'react-bootstrap/Toast';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function AlkonistProf() {
  return (
    <body id="alkonist"> 
       <Container className="p-3 vstack"> 
         <Container id="alkonist-title-blurb"className="p-5 mb-4 rounded-3">
         <h1 className="header"> Alkonist
            </h1>
          </Container>
        </Container>
        <br></br>
        <Container id="alkonist-main-blurb" className="p-5 mb-4 rounded-3">
          <Row>
            <Col>Profile Info</Col>
            <Col>Collection</Col>
          </Row>
        </Container>
    </body>
  )
}

export default AlkonistProf
