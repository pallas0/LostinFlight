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

const okLogOutBtn = <button onClick={handleLogout}>Logout</button>
const noLogOutBtn = <button disabled variant={"light"}>Logout</button>
  return (
    <div >
    <Navbar bg="navBar" fixed='top'>
      <Container >
        <Nav className="me-auto">
          {loggedInUser ? okLogOutBtn : noLogOutBtn}
        </Nav>
          {loggedInUser ? <h2>Welcome {loggedInUser.username} </h2> : <h2>Welcome! Sign-in Below!</h2>}
       </Container>
    </Navbar>
    </div>
  )
}

export default NavBar