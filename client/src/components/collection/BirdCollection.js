import React from 'react';
import EntryForm from './EntryForm'
import Gallery from './Gallery'
import { useEffect, useState } from 'react'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'


function BirdCollection( {user} ) {

  let birdObservationObj = {
    image: "",
    region: "",
    species: "",
    date: ""
  }
let loggedInUserObj = {
  id: "",
  username: "",

}
const [loggedInUser, setLoggedInUser] = useState([loggedInUserObj])
const [ birds, setBirds] = useState([birdObservationObj])

useEffect (() =>{ 
  setLoggedInUser(user)
},[ user ] )

// console.log(loggedInUser)
// console.log(loggedInUser.id)


  // useEffect (() => {
  //   fetch(`http://localhost:4000/users/${loggedInUser.id}/collection`)
  //   .then(r => r.json())
  //   // .then(data => console.log(data))
  //   .then(setBirds)
  // }, [])
  
  //fetching the user data
//   useEffect(() => {
//     let active = true;
    
//     const fetchUser = async () => {
//       const resp = await fetch(`http://localhost:4000/me`)
//       const loggedInUserData = await resp.json();
//       if (active) {
//         setLoggedInUser(loggedInUserData);
//       };
//     }
//     fetchUser();
//     return () => {
//       active = false;
//     };
//   }, [user])
// //fetching the bird data
//   useEffect (() => { 
//     let active = true;

//     const fetchCollection = async () => {
//       const resp = await fetch(`http://localhost:4000/users/${loggedInUser.id}/collection`)
//       const collectionData = await resp.json();
//       if (active){
//         setBirds(collectionData);
//         // setBirds(loggedInUser);
//         // amIWorking(collectionData)
//         console.log(loggedInUser)
//         console.log(collectionData)
//         console.log(resp)
//         // console.log(loggedInUser)
//       }}
//       fetchCollection();
//       return () => {
//         active = false;
//       }
    
//     // console.log(fetchCollection() )

//   },[])
console.log(birds)

  // function amIWorking (collectionData) {
  //   console.log('trying to set birds')
  // }

  // console.log(birds)
  
  
  // useEffect(() => {
  //   fetch("/me").then((response) => {
  //     if (response.ok) {
  //       response.json().then((name) => setLoggedInUser(name));
  //     }
  //   })
  //   return () =>  {
  //     console.log("gibberish  here ")
  
  // }
  // }, []);

// collects the bird data 
// const birdCardRender = birds.map((bird) => {
//   // console.log(bird)
//   return <Gallery
//     key = {bird.id}
//     image = {bird.image}
//     species = {bird.species}
//     region = {bird.region}
//     date = {bird.date}
//     />
//     })
  
// console.log(birds)

  return (
    <div>
      Welcome to your Collection 
        <EntryForm  />
        <Col>
        {/* {birdCardRender} */}
        </Col>
    </div>
  )
}

export default BirdCollection