import React from 'react'
import Quiz from './Quiz'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/esm/Container'

function SignUp() {
  return (
    <div>
      <Container>
        <center>
          <Form>
            <Row className="justify-content-center">
              <Col xl="auto">
                Username:
                <Form.Control placeholder="Type username here.." />
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xl="auto">
                Birthday:
                <Form.Control type="date" placeholder="Type Birthday here.." />
              </Col>
            </Row>
          </Form>
          <div>
            <button>
              Sign Up!
            </button>
            <Quiz />
          </div>
        </center>
      </Container>
    </div>
  );
}

export default SignUp