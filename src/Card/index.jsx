import React, { useState, useEffect } from 'react'
import "./index.css"

export default function Card(props){
  return(
    <button>{props.display}</button>
  );
}