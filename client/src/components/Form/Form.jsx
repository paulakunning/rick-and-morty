import React, { useState } from "react";

export default function Form(){
    const [input, setInput] = useState({
        name: "",
        origin: "",
        species: "",
        image: "",
    })

    
    const validateInput = (input) => {
        if(!input.name.length) return "debe ingresar un nombre"
    }

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    return(
        <div>
            <h1>Create a character</h1>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" value={input.name} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="name">Origin:</label>
                    <input type="text" name="origin" value={input.origin} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="name">Species:</label>
                    <input type="text" name="species" value={input.species} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="name">Image (URL): </label>
                    <input type="text" name="image" value={input.image} onChange={handleChange} />
                </div>
            </form>
        </div>
    )
}