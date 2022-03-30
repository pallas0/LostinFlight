import React from 'react';
import EntryForm from './EntryForm'
import Gallery from './Gallery'
import { useEffect, useState } from 'react'

function BirdCollection() {

  let birdObservationObj = {
    region: "",
    species: ""}

const [ birds, setBirds] = useState([birdObservationObj])

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

useEffect (() => {
  fetch(`http://localhost:4000/users/${user.id}`)
  .then(r => r.json())
  .then(data => console.log(data))
}, [])

const birdCardRender = birds.map((bird) => {
  return (
  <Gallery
    key = {bird.id}
    species = {bird.species}
    region = {bird.region}
    />
    )})

  console.log(birds)
  



  return (
    <div>
      Welcome to your Collection {user.username}
        <EntryForm />
        {birdCardRender}
    </div>
  )
}

export default BirdCollection