import React, { useState, useEffect } from 'react'
import './index.css'
import Card from '../Card/index.jsx'

const POSSIBLE_POKEMON = ["pikachu","charizard","bulbasaur","squirtle","jigglypuff","mewtwo","meowth","eevee","snorlax","mew","lugia","ho-oh","celebi","gengar","machamp","alakazam","gyarados","aerodactyl","arcanine","lapras","blastoise","venusaur","tyranitar","dragonite","ampharos","scizor","heracross","houndoom","blaziken","gardevoir","salamence","metagross","milotic","absol","rayquaza","lucario","garchomp","togekiss","rotom","infernape","chandelure","excadrill","greninja","aegislash","mimikyu","decidueye","zeraora","dragapult","corviknight","cinderace"];

export default function GameBoard({nItems}){
  
  let shuffledPokemon = shuffleArray(POSSIBLE_POKEMON);

  const [gameOver, setGameOver] = useState(false);
  const [gameCards, setGameCards] = useState([]);
  const [highestScore, setHighestScore] = useState(0);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function constructCards(){
    let constructedCards = [];
    for(let i = 0; i < nItems; i++){
      constructedCards.push({id:POSSIBLE_POKEMON[i], pokemon:POSSIBLE_POKEMON[i], chosen:false})
    }

    return constructedCards
  };

  function checkScore(){
    let score = gameCards.filter(card => {
      return card.chosen
    }).length;

    if(highestScore < score) setHighestScore(score);
    console.log(score);
  }

  useEffect(() => {
    if(gameOver){
      setGameOver(false);
      checkScore();
      return
    }

    setGameCards(constructCards());
  },[gameOver]);

  return(<section>
    {gameCards.map((card)=>(
      <Card 
        key = {card.id}
        pokemon = {card.pokemon}
        onClick = {() => {
          const newCards = gameCards.map(c => {
            if(c.id === card.id){
              c.chosen === true ? setGameOver(true) : true;
              return { ...c, chosen: true };
            }else{
              return c;
            }
          });
          setGameCards(shuffleArray([...newCards]));
        }}
      />
    ))}
  </section>)
}

