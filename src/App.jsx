import React, { useState, useEffect } from 'react'
import './App.css'
import GameBoard from './GameBoard/index.jsx';
import Header from './Header/index.jsx';

function App() {
    const [nItems, setNItems] = useState(20);

    function convertInRange(min, max, value){
      if(value < min){
        return min;
      }else if(value > max){
        return max;
      }else{
        return value;
      }
    }

  return(<>
    <Header nItems={nItems} setNItems={setNItems}/>
    <GameBoard nItems={convertInRange(10, 50, nItems)}></GameBoard>
  </>);
}

export default App
