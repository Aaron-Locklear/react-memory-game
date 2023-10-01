import React, { useState, useEffect } from 'react'
import './App.css'
import GameBoard from './GameBoard/index.jsx';

function App() {
  
  function handleGameOver(){
    console.log("Game Over");
  }

  return(<>
    <GameBoard nItems={20} handleGameOver={handleGameOver}></GameBoard>
  </>);
}

export default App
