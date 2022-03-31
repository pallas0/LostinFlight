import React, { useState }  from 'react'

function EntryForm( ) {


const [formData, setFormData] = useState({
    species: "",
    region: "",
    image: "",
    
})



function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;
    setFormData({
        ...formData,
        [name]: value,
      });
    }






function handleSubmit(e) {
    e.preventDefault();
    // console.log(formData);
    fetch( `http://localhost:4000/bird_obsersavations`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    })
        .then(r => r.json())
        .then(data => console.log(data))
    }

  return (
     
        <div>
            EntryForm
            {/* {loggedInUser.username} */}
            <form onSubmit={handleSubmit}>
                Species:
                <input name="species" type="text" onChange={handleChange}></input>
                Region:
                <input name="region" type="text" onChange={handleChange}></input>
                Image:
                <input name="image" type="text" onChange={handleChange}></input>
                <button type="submit" value="add">Add</button>
            </form>
        </div>
   
  )
}

export default EntryForm