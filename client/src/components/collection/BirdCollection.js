import React from 'react'
import EntryForm from './EntryForm'
import Gallery from './Gallery'

function BirdCollection() {
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
      
    </div>
  )
}

export default BirdCollection