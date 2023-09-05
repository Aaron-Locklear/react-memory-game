import React, { useState, useEffect } from 'react'
import "./index.css"

export default function Card({pokemon, onClick}){

  const [sprite, setSprite] = useState("");
  const [altText, setAltText] = useState("");

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then(response => response.json())
      .then(data => {
        setSprite(data.sprites.front_default);
        setAltText(`The pokemon ${pokemon}`);
      })
      .catch(err => {
        setSprite("../assets/server-outline.svg");
        setAltText("Image did not load");
      });
  }, []);

  return(
    <button onClick={onClick}><img src={sprite} alt={altText} /></button>
  );
}
