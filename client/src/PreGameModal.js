import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useHistory } from "react-router-dom"


function PreGameModal( { newUser } ) {
    const [show, setShow] = useState(true);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let history = useHistory()
    console.log(newUser)

    function handleStartQuiz() {
        setShow(false)
        return history.push("/quiz")
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
          </Modal.Header>
             <Modal.Body>
                <h3>Welcome {newUser.username}</h3>
                <p>Before you can join the flock we need to learn a bit more about you.</p>
             </Modal.Body>
          <Modal.Footer>
                <Button variant="outline-dark" onClick={handleStartQuiz}>Let's Go!</Button>
           </Modal.Footer>
        </Modal>
      </>
    );
}

export default PreGameModal