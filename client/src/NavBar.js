import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function NavBar({onLogout}) {
    function handleLogout() {
        fetch("/logout", {
            method: "DELETE",
        }).then(() => onLogout(null));
    }

  return (
    <div >
    <Navbar bg="light" variant="light">
     <Container >
       <Nav className="me-auto">
        <button onClick={handleLogout}>Logout</button>
       </Nav>
     </Container>
  </Navbar>
    </div>
  )
}

export default NavBar