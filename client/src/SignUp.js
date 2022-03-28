import React from 'react'
import Quiz from './Quiz'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/esm/Container'

function SignUp() {
  return (
    <div >
      <Container>
        <center> 
        <Form>
            <Row className="justify-content-center">
              <Col xs="auto">
              Username:
                <Form.Control placeholder="Type username here.." />
              </Col>
              </Row>
              <Row className="justify-content-center">
              <Col xs="auto">
              Birthday:
                <Form.Control type="date" placeholder="Type Birthday here.." />
              </Col>
            </Row>
        </Form>
        <div >
        {/* <button type="button" class="btn btn-outline-primary" style={{ color: '#e2eafcff' }} >Sign Up!</button> */}
        <button className="btn btn-primary" type="submit" style={{ color: '#e2eafcff' }}>Button</button>

      <Button  >SignUp</Button>
      </div>
      </center>

      </Container>
        </div>
  )
}

export default SignUp