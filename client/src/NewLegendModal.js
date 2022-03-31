import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useHistory } from "react-router-dom"


function NewLegendModal( { user } ) {
    const [show, setShow] = useState(true);
    const [loggedInUser, setLoggedInUser] = useState({ })
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let history = useHistory()

    useEffect(()=> {
        setLoggedInUser(user)
    }, [user])

    function handleOkClick() {
        setShow(false)
        return history.push("/")
    }

    for (const key of Object.entries(loggedInUser)) {
        console.log(key)
    }
    
    return (
      <>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            {/* <Modal.Title>Modal title</Modal.Title> */}
          </Modal.Header>
          <Modal.Body>
            <h3>Congratulations {loggedInUser.name}, I knew you'd soar high!</h3>
            <p>You are a {loggedInUser.name} </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-dark" onClick={handleOkClick}>Amazing!</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default NewLegendModal