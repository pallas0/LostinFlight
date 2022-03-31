import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function NavBar( {onLogout, user} ) {
  const [loggedInUser, setLoggedInUser] = useState({})

    useEffect(() => {
      setLoggedInUser(user)
    }, [user])
    function handleLogout() {
        fetch("/logout", {
            method: "DELETE",
        }).then(() => onLogout(null));
    }
console.log(loggedInUser)
  return (
    <div >
    <Navbar bg="navBar" fixed='top'>
      <Container >
        <Nav className="me-auto">
          <button onClick={handleLogout}>Logout</button>
        </Nav>
        {/* {user ? <h2>Welcome {loggedInUser.username}</h2> : <h2>Welcome</h2>} */}
       </Container>
    </Navbar>
    </div>
  )
}

export default NavBar