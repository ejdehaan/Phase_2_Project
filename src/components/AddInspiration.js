import { useState } from 'react'


function AddInspiration( {handleAddInspo} ) {

    const [formData, setFormData] = useState({
        title: "",
        image: "",
        link: "",
        category: ""
    })

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prevData) => ({...prevData, [name]: value}))
    }


    function handleSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:4000/inspiration",{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
        }) 
        .then(resp => resp.json())
        .then(newInspo => handleAddInspo(newInspo));
        setFormData({
            title: "",
            image: "",
            link: "",
            category: ""
        });
    }

    return (
    <form className='form' onSubmit={handleSubmit}>
        <h3>Add Inspiration!</h3>
        <label>Title</label>
        <input 
            name="title"
            onChange={handleChange}
            value={formData.title}
            />
            

            <br></br>
            <br></br>

        <label>Image</label>
        <input 
            name="image"
            onChange={handleChange}
            value={formData.image}
            >
            </input>

            <br></br>
            <br></br>

        <label>Link</label>
        <input 
        name="link"
        onChange={handleChange}
        value={formData.link}
        >
        </input>

            <br></br>
            <br></br>
        {/*<select onChange={handleChange}>
            <option value="1">Decorations</option>
             <option value="2">Dress</option>
            <option value="3">Hair</option>
            <option value="4">Accessories</option>
            <option value="5">Flowers</option>
            <option value="6">Venue</option> 
        </select>*/}

        <label>Category</label>
        <input 
            name="category"
            onChange={handleChange}
            value={formData.category}
            >
            </input>

            <br></br>
            <br></br>
        <button type="submit">Add Idea!</button>
    </form>
    )
}

export default AddInspiration