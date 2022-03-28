import React, {useState} from 'react'

function Login({onLogin}) {
  const [name, setName] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    })
    .then((r) => r.json())
    .then((user) => onLogin(user))
  }

  return (
    <div>
         <form>
            <label>
                Name:
                <input type='text' 
                name={name}
                onChange={(e) => setName(e.target.value)} />
            </label>
        </form>
     <button onClick={handleSubmit}>Login</button>
        
    </div>
  )
}

export default Login