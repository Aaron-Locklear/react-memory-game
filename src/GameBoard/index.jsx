import React, { useState, useEffect } from 'react'
import './index.css'
import Card from '../Card/index.jsx'

export default function GameBoard(){

  const [gameOver, setGameOver] = useState(false);
  const [cards, setCards] = useState([
    {id:1, pokemon:"ditto", chosen:false},
    {id:2, pokemon:"ditto", chosen:false},
    {id:3, pokemon:"ditto", chosen:false},
    {id:4, pokemon:"ditto", chosen:false},
    {id:5, pokemon:"ditto", chosen:false},
    {id:6, pokemon:"ditto", chosen:false},
    {id:7, pokemon:"ditto", chosen:false},
    {id:8, pokemon:"ditto", chosen:false},
    {id:9, pokemon:"ditto", chosen:false},
    {id:10, pokemon:"ditto", chosen:false},
    {id:11, pokemon:"ditto", chosen:false},
    {id:12, pokemon:"ditto", chosen:false},
  ]);

  // Shuffle cards when the game is over
  useEffect(() => {
    if (gameOver) {
      handleShuffle();
      setCards(prevCards => {
        const resetCards = prevCards.map(card => ({ ...card, chosen: false }));
        return resetCards;
      });
      setGameOver(false);
    }
  }, [gameOver]);

  // Initial shuffle when the component mounts
  useEffect(() => {
    handleShuffle();
  }, []);


  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function handleShuffle() {
    const shuffledCards = shuffleArray([...cards]);
    setCards(shuffledCards);
  }

  function handleEndGame(){
    console.log("Game Over");
    setGameOver(true);
  }

  function handleCardClick(card) {
    let gameOverDetected = false;
  
    const updatedCards = cards.map((c) => {
      if (c.id === card.id) {
        if (c.chosen) {
          gameOverDetected = true;
          return { ...c, chosen: false };
        } else {
          return { ...c, chosen: true };
        }
      }
      return c;
    });
  
    setCards(updatedCards);
  
    if (gameOverDetected) {
      handleEndGame();
    } else if (gameOver) {
      setGameOver(false);
    }
  }

  return(<section>
    {cards.map((card)=>(
      <Card 
        key = {card.id}
        pokemon = {card.pokemon}
        onClick = {() => handleCardClick(card)}
      />
    ))}
  </section>)
}