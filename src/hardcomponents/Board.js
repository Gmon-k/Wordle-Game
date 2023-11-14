import React, { useState } from 'react';
import "../App.css"; 
import Letter from './Letter';

function Board() {
   //HTMl version of making a 7*5 board for the hard mode
  return (
    <div className="board-hard">
    {" "}
    <div className="row">
      <Letter letterPos={0} attemptVal={0} />
      <Letter letterPos={1} attemptVal={0} />
      <Letter letterPos={2} attemptVal={0} />
      <Letter letterPos={3} attemptVal={0} />
      <Letter letterPos={4} attemptVal={0} />
      <Letter letterPos={5} attemptVal={0} />
      <Letter letterPos={6} attemptVal={0} />
    </div>
    <div className="row">
      <Letter letterPos={0} attemptVal={1} />
      <Letter letterPos={1} attemptVal={1} />
      <Letter letterPos={2} attemptVal={1} />
      <Letter letterPos={3} attemptVal={1} />
      <Letter letterPos={4} attemptVal={1} />
      <Letter letterPos={5} attemptVal={1} />
      <Letter letterPos={6} attemptVal={1} />
    </div>
    <div className="row">
      <Letter letterPos={0} attemptVal={2} />
      <Letter letterPos={1} attemptVal={2} />
      <Letter letterPos={2} attemptVal={2} />
      <Letter letterPos={3} attemptVal={2} />
      <Letter letterPos={4} attemptVal={2} />
      <Letter letterPos={5} attemptVal={2} />
      <Letter letterPos={6} attemptVal={2} />
    </div>
    <div className="row">
      <Letter letterPos={0} attemptVal={3} />
      <Letter letterPos={1} attemptVal={3} />
      <Letter letterPos={2} attemptVal={3} />
      <Letter letterPos={3} attemptVal={3} />
      <Letter letterPos={4} attemptVal={3} />
      <Letter letterPos={5} attemptVal={3} />
      <Letter letterPos={6} attemptVal={3} />
    </div>
    <div className="row">
      <Letter letterPos={0} attemptVal={4} />
      <Letter letterPos={1} attemptVal={4} />
      <Letter letterPos={2} attemptVal={4} />
      <Letter letterPos={3} attemptVal={4} />
      <Letter letterPos={4} attemptVal={4} />
      <Letter letterPos={5} attemptVal={4} />
      <Letter letterPos={6} attemptVal={4} />
    </div>
  </div>
  );
}

export default Board