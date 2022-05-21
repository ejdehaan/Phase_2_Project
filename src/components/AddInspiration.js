import React from 'react'
import { useState } from 'react'

function AddInspiration() {

    const [formState, setFormState] = useState({
        Name:"",
        Image:"",
        Link:"",
        Venue:""
    })

    function handleSubmit(){
        setFormState()
    }

    return (
    <form>
        <h3>Add Inspiration!</h3>
        <label>Name</label>
        <input></input>
            <br></br>
            <br></br>
        <label>Image</label>
        <input></input>
            <br></br>
            <br></br>
        <label>Link</label>
        <input></input>
            <br></br>
            <br></br>
        <select>
            <option value="1">Venue</option>
            <option value="2">Dress</option>
            <option value="3">Hair</option>
            <option value="4">Accessories</option>
            <option value="5">Flowers</option>
            <option value="6">Decorations</option>

        </select>
            <br></br>
            <br></br>
        <button type="submit" onSubmit={handleSubmit}>Add Idea!</button>
    </form>
    )
}

export default AddInspiration