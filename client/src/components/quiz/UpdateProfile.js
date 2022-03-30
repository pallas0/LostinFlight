import React from 'react'

function UpdateProfile( { trait, user } ) {
    console.log("Welcome to the Update Profile Component")

    function parseTrait(trait_to_parse){
        switch (trait_to_parse) {
            case "Ambition":
                return 1
                break
            case "Empathy":
                return 2
                break
            case "Creativity":
                return 3
                break
            case "Assertiveness":
                return 4
                break
            case "Optimism":
                return 5
                break
            default:
                return 0
        }
    }

// console.log(parseTrait("optimism"))

    function writeToDb(user){
        const traitId = parseTrait(trait)
        const updates ={
            legend_id: traitId
        }

        fetch(`http://127.0.0.1/users/${user.id}`, {
            method: "PATCH",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(updates),
        })
        .then(response => response.json())
        .then(data => console.log(data))
    }

  return (
    <div>UpdateProfile</div>
  )
}

export default UpdateProfile