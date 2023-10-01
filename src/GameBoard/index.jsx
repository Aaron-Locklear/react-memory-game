import React, { useState, useEffect } from 'react'
import './index.css'
import Card from '../Card/index.jsx'

export default function GameBoard({nItems, handleGameOver}){

  const [gameOver, setGameOver] = useState(false);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  let possiblePokemon = shuffleArray(["pikachu","charizard","bulbasaur","squirtle","jigglypuff","mewtwo","meowth","eevee","snorlax","mew","lugia","ho-oh","celebi","gengar","machamp","alakazam","gyarados","aerodactyl","arcanine","lapras","blastoise","venusaur","tyranitar","dragonite","ampharos","scizor","heracross","houndoom","blaziken","gardevoir","salamence","metagross","milotic","absol","rayquaza","lucario","garchomp","togekiss","rotom","infernape","chandelure","excadrill","greninja","aegislash","mimikyu","decidueye","zeraora","dragapult","corviknight","cinderace"]);
  let constructedCards = [];

  function constructCards(){
    for(let i = 0; i < nItems; i++){
      constructedCards.push({id:i, pokemon:possiblePokemon[i], chosen:false})
    }
  };
  constructCards();

  const [cards, setCards] = useState(constructedCards);

  useEffect(()=>{
    constructCards = []
    setCards(constructCards())
    }
    ,[gameOver,]);

  return(<section>
    {cards.map((card)=>(
      <Card 
        key = {card.id}
        pokemon = {card.pokemon}
        onClick = {() => {
          const newCards = cards.map(c => {
            if(c.id === card.id){
              c.chosen === true ? handleGameOver() : true;
              return { ...c, chosen: true };
            }else{
              return c;
            }
          });
          setCards(shuffleArray([...newCards]));
        }}
      />
    ))}
  </section>)
}

