import React, { useState, useEffect } from 'react'
import './index.css'
import Card from '../Card/index.jsx'

export default function GameBoard(){
  
  const cards = [
    {id:1, display:1, chosen:false},
    {id:2, display:2, chosen:false},
    {id:3, display:3, chosen:false},
    {id:4, display:4, chosen:false},
    {id:5, display:5, chosen:false},
    {id:6, display:6, chosen:false},
    {id:7, display:7, chosen:false},
    {id:8, display:8, chosen:false},
    {id:9, display:9, chosen:false},
    {id:10, display:10, chosen:false},
    {id:11, display:11, chosen:false},
    {id:12, display:12, chosen:false},
  ]

  return(<section>
    {cards.map((card)=>(
      <Card 
        key = {card.id}
        display = {card.display}
      />
    ))}
  </section>)
}