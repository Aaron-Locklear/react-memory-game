import React, { useState, useEffect } from 'react'
import "./index.css"

export default function Card({display, onClick}){

  return(
    <button onClick={onClick}>{display}</button>
  );
}