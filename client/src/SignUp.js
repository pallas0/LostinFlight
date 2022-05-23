import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'

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
  const enabledButton = <button type='submit' onClick={handleSubmit} >Sign Up!</button>
  const disabledButton = <button disabled >Sign Up!</button>

  return (
    <div>
        <form>
          {/* <Form.Group controlId="signupform.username"> */}
            <label>Username:</label>
            {formError ? <Form.Label style={errStyle}>5 or longer letters and numbers only</Form.Label> : null }
            <input
            type="text" 
            placeholder="Type username here.." 
            name="username" 
            value={formData.username} 
            onChange={handleChangeValidator}
            />

          {/* <Form.Group controlId="signupform.birthday"> */}
            <label>Birthday:</label>
            <input type="date" 
            placeholder="Enter Birthday here.." 
            name="birthday" 
            value={formData.birthday} 
            onChange={handleChange}
            onFocus={onFocus}/>

          {formError ?  disabledButton : enabledButton}
          </form>

    </div>
  );
}

export default SignUp