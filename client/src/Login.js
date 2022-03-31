import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

function Login( { onLogin } ) {
  const [username, setUsername] = useState("")
  const [userError, setUserError] = useState(false)

  // original handleSubmit for example and just in case
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   fetch("/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ username }),
  //   })
  //   .then((r) => r.json())
  //   .catch((error) => console.log(error))
  //   .then((user) => onLogin(user))
  // }

// newly updated handleSubmit with error catch
// for problems coming back from fetch
  function handleSubmit2(e) {
    e.preventDefault();
    console.log(e)
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    })
    //then we check if the response is OK
    .then((response) => {
      if (response.ok) { 
       return response.json();
      }
      return Promise.reject(response); 
    })
    // if resp.ok then we proceed to set onLogin
    // reset the field text, and setUserError to false
    .then((user) => { 
      console.log(user); 
      onLogin(user)
      const fieldToReset = e.target.form[0]
      fieldToReset.value=""
      setUserError(false)
    })
    // if there is an error then send the error info to a handler
    .catch((error) => {
      renderUserError(error)
    });
  }


  //this sets our user error, then logs an error
function renderUserError(error){
  setUserError(true)
  console.log('Oops... ', error.statusText)
}

// if click back on the field resets userError to false
// this is so the conditional rendering of input bg goes back
function onFocus() {
  setUserError(false)
}
//set custom style for the background of the input
const fieldStyle =  userError ? "#FFC4DC" : ""
const inputStyle = {
  background: fieldStyle
}
//custom style for error text
const errStyle = {
  color: "#FF3F68",
  fontSize: "75%"
}
  return (
    <div className='welcomePageForm'>
      <Container fluid="md">
         <Form id="signin">
            <Form.Label>Username:</Form.Label>
            <Form.Group controlId='signin.username'>
                <Form.Control type='text' 
                onFocus={onFocus}
                name={username}
                onChange={(e) => setUsername(e.target.value)}
                style={inputStyle} />
                {userError ? <Form.Label style={errStyle}>error</Form.Label> : null}
            </Form.Group>
            <Button variant="outline-dark" type="submit" onClick={handleSubmit2}>Login</Button>
        </Form>
      </Container>
    </div>
  )
}

export default Login