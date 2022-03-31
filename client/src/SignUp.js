import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

function SignUp() {
  const [formError, setFormError] = useState(false)
  const [formData, setFormData] = useState({
    username: "",
    birthday: "",
    image: "",
    legend_id: ""
  }) 

  // useEffect(()=>{
  //   console.log(formData)
  //   console.log(formError)
  // },[formData])

  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;
    setFormData({
        ...formData,
        [name]: value,
      });
    }

  function handleChangeValidator(event) {
    const name = event.target.name;
    let value = event.target.value;
    const regex = new RegExp('[^0-9A-Za-z\xC0-\xFF]')
      
    const found = value.match(regex)
    found ? setFormError(true) : setFormError(false)
      setFormData({
          ...formData,
          [name]: value,
        });

      }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }
  const errStyle = {
    color: "#FFC4DC",
    fontSize: "75%"
  }

  const enabledButton = <Button variant="outline-dark" type="submit" onclick={handleSubmit} >Submit</Button>
  const disabledButton = <Button variant="light" disabled >Submit</Button>
  return (
    <div>
      <Container fluid="md">
        <Form><h2>Sign Up</h2>
          <Form.Group controlId="signupform.username">
            <Form.Label>Username:</Form.Label>
            {formError ? <Form.Label style={errStyle}>letters and numbers only</Form.Label> : null }
            <Form.Control 
            type="text" 
            placeholder="Type username here.." 
            name="username" 
            value={formData.username} 
            onChange={handleChangeValidator}
            />
          </Form.Group>
          <Form.Group controlId="signupform.birthday">
            <Form.Label>Birthday:</Form.Label>
            <Form.Control type="date" 
            placeholder="Enter Birthday here.." 
            name="birthday" 
            value={formData.birthday} 
            onChange={handleChange}/>
          </Form.Group>
          {formError ?  disabledButton : enabledButton}
          </Form>
      </Container>
    </div>
  );
}

export default SignUp