import React, { useState, useEffect } from 'react'
import './App.css'
import GameBoard from './GameBoard/index.jsx';

function App() {
  return(<>
    <GameBoard nItems={20}></GameBoard>
  </>);
}

export default App
