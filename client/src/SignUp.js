import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

function SignUp( { onNewSignUp } ) {
  const [formError, setFormError] = useState(false)
  const [formData, setFormData] = useState({
    username: "",
    birthday: "",
    image: "",
    legend_id: ""
  }) 

//handle birthday input
  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;
    setFormData({
        ...formData,
        [name]: value,
      });
    }

  // validate input field for letters and nums only
  // if not valid set error to true
  function handleChangeValidator(event) {
    const name = event.target.name;
    let value = event.target.value;
    //use a regex 
    const regex = new RegExp('[^0-9A-Za-z\xC0-\xFF]')
    //make a new array to hold matches from the regex  
    const found = value.match(regex)
    //if the array exists then set error to true, else false
    found ? setFormError(true) : setFormError(false)

      setFormData({
          ...formData,
          [name]: value,
        });

      }


  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    if (formData.username.length <= 4){
      console.log("name too short")
      setFormError(true)
      return null
    } else if (formData.birthday.length === 0){
      console.log("bday bad")
      setFormError(true)
      return null
    } else {
      onNewSignUp(formData)
      console.log("good data sending to app")
    }
  }

  function onFocus() {
    setFormError(false)
  }

  //custom style for error text
  const errStyle = {
    color: "#FF3F68",
    fontSize: "75%"
  }

  // two different button styles to render
  const enabledButton = <Button variant="outline-dark" type="submit" onClick={handleSubmit} >Sign Up!</Button>
  const disabledButton = <Button variant="light" disabled >Sign Up!</Button>

  return (
    <div>
      <Container fluid="md">
        <Form>
          <Form.Group controlId="signupform.username">
            <Form.Label>Username:</Form.Label>
            {formError ? <Form.Label style={errStyle}>5 or longer letters and numbers only</Form.Label> : null }
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
            onChange={handleChange}
            onFocus={onFocus}/>
          </Form.Group>
          {formError ?  disabledButton : enabledButton}
          </Form>
      </Container>
    </div>
  );
}

export default SignUp