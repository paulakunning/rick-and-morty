import React from "react";

export default function Character({ch}){
    return (
        <div>
            <div>
                <img src={ch.image} alt='Imagen '/>
            </div>
        <h3>Name: {ch.name}</h3>
        <p>Origin: {ch.origin}</p>
            <p>Specie: {ch.species}</p>
            <ul>{ch.episodes.map(el=><li>{el}</li> )}
            </ul>
        </div>
    )
}