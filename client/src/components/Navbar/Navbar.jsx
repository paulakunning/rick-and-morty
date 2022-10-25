import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <div>
            <h1>The Rick and Morty App</h1>
            <Link to='/create' >Crear personaje</Link>
        </div>
    )
}