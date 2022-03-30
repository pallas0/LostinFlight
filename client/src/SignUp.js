import React from 'react'
import Quiz from './Quiz'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card';

function SignUp() {
  return (
    <div>
      <Container>
          <Form>
           Username:
           <Form.Control placeholder="Type username here.." />
           Birthday:
           <Form.Control type="date" placeholder="Type Birthday here.." />
            <button>
           Sign Up!
           </button>
          </Form>
      </Container>
    </div>
  );
}

export default SignUp