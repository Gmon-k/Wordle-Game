import React from 'react';
import { Link } from 'react-router-dom';
function Game() {
  //HTML page for choosing mode of the game
  return (
    <div>
    <>
      <div>
        <nav>
          <h1>Wordle</h1>
          <img src="logo.jpg" className="logo" />
        </nav>
      </div>

      <div className="button-container">
        <Link to="normal" className="oval-button">Normal Mode</Link>
        <Link to="hard" className="oval-button">Hard Mode</Link>
      </div>
    </>
    </div>
  );
};

export default Game;
