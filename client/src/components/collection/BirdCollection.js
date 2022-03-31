import React, {useState} from 'react'
import EntryForm from './EntryForm'
import Gallery from './Gallery'
import Modal from "react-bootstrap/Modal";

function BirdCollection({currentuser}) {
console.log(currentuser.legend.name)
  const [show, setShow] = useState(true)

  function handleClick() {
    // console.log("click")
  return setShow(false)
  }
  const user = {
    id: 1,
    username: "Jojo",
    birthday: "1999-12-31",
  }

  return (
    <div>
      Welcome to your Collection {user.username}
      <EntryForm />
      <Gallery user={user} />
      <>
        <Modal show={show}>
          <Modal.Header closeButton onHide={handleClick}>
           Your Result
          </Modal.Header>
          <Modal.Body>
            <h3>{currentuser.legend.name}</h3>
            <p>{currentuser.legend.bio}</p>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </>
    </div>
  );
}

export default BirdCollection