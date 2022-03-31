import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useHistory } from "react-router-dom"


function NewLegendModal( {  } ) {
    const [show, setShow] = useState(true);
    const [userLegend, setUserLegend] = useState({ })
    const [loggedInUser, setLoggedInUser] = useState({ })
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let history = useHistory()

    function handleOkClick() {
        setShow(false)
        return history.push("/")
    }

    //fetch the user information rendered after quiz
    useEffect(async () => {
        let active = true
            const response = await fetch('/me')
            const newData = await response.json()
            const modalResponse = await fetch(`users/${loggedInUser.id}/legend`)
            const newModalData = await modalResponse.json()
            if (active) {
                setLoggedInUser(newData)
                setUserLegend(newModalData)
            }
    }, [])
 
    return (
      <>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <h3>Congratulations {loggedInUser.username}, I knew you'd soar high!</h3>
            <p>You are a {userLegend.name} </p>
            <p>{userLegend.bio}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-dark" onClick={handleOkClick}>Sign Up + Play Again!</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default NewLegendModal