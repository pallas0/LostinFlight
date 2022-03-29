import React, { useState }  from 'react'

function EntryForm() {
const [formData, setFormData] = useState({
    species: "",
    region: "",
    image: ""
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
    console.log(formData);
    }

  return (
     
        <div>
            EntryForm
            <form onSubmit={handleSubmit}>
                <input name="species" type="text" onChange={handleChange}></input>
                <input name="region" type="text" onChange={handleChange}></input>
                <input name="image" type="text" onChange={handleChange}></input>
                <button type="submit" value="add">Add</button>
            </form>
        </div>
   
  )
}

export default EntryForm