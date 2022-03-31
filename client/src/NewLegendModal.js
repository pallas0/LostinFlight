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

    console.log(loggedInUser)


    useEffect(async () => {
        let active = true
        // const fetchData = async () => {
            const response = await fetch('/me')
            const newData = await response.json()
            console.log(newData)
            const modalResponse = await fetch(`users/${loggedInUser.id}/legend`)
            const newModalData = await modalResponse.json()
            if (active) {
                setLoggedInUser(newData)
                setUserLegend(newModalData)
            }
        // }
        // fetchData()
        // return () => {
        //     active = false
        // }
    }, [])
    // useEffect(()=> {
    //     let active = true
    //     const fetchData = async () => {
    //         const response = await fetch(`users/${loggedInUser.id}/legend`)
    //         if (active) {
    //         }
    //     }
    //     fetchData();
    //     return () => {
    //         active = false
    //     }
    // }, [loggedInUser])

    console.log(userLegend)

      //fetch the logged in user
//   useEffect(() => {
//     fetch("/me").then((response) => {
//       if (response.ok) {
//         response.json().then((name) => setLoggedInUser(name));
//       }
//     });
//   }, []);

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
            <h3>Congratulations {loggedInUser.username}, I knew you'd soar high!</h3>
            <p>You are a {userLegend.name} </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-dark" onClick={handleOkClick}>Amazing!</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default NewLegendModal