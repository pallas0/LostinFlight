import React from 'react';
import EntryForm from './EntryForm'
import Gallery from './Gallery'
import { useEffect, useState } from 'react'

function BirdCollection() {

const [ birds, setBirds] = useState('')

  const user = {
    id: 1,
    username: "Jojo",
    birthday: "1999-12-31",
     bird_observation:{
          region: "North West",
          species: "Robin",
          image:"https://i.etsystatic.com/11197028/r/il/fb9dd1/2013294885/il_1588xN.2013294885_bcw7.jpg",
          date: "2022-2-22"
         }
  }
// func() {
useEffect (() => {
  fetch(`http://localhost:4000/users`)
  .then(r => r.json())
  .then(data => console.log(data))
}, [])
// }
  



  return (
    <div>
      Welcome to your Collection {user.username}
        <EntryForm />
        <Gallery user={user} />
      
    </div>
  )
}

export default BirdCollection