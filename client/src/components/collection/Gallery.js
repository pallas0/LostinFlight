import React, { useEffect } from 'react'

function Gallery( {user} ) {
  console.log(user)
    // run fetch for gallery everytime a new one is added 
    useEffect(() => {
      fetch(`http://127.0.0.1:3000/users/${user.id}/collection`)
      .then(resp => resp.json())
      .then(data => console.log(data))
    }, [])
    
  return (
    <div>
      
    </div>
  )
}

export default Gallery