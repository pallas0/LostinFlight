import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';

function Login({onLogin}) {
  const [username, setUsername] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submit")
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    })
    .then((r) => r.json())
    .then((user) => onLogin(user))
  }

  return (
    <div className='welcomePageForm'>
         <form>
            <label>
              {/* <span style={{text-align:center }}>
              Login
              </span> */}
              <br></br>
                Name:
                <br></br>
                <input type='text' 
                name={username}
                onChange={(e) => setUsername(e.target.value)} />
            </label>
        </form>
     <button onClick={handleSubmit}>Login</button>
        
    </div>
  )
}

export default Login