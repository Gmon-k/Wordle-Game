import "../App.css"; 
import React from 'react';
function GameOver({ currAttempt,correctWord,gameOver, }) {

  //function to reset the page
  const handleReset = () => {
    window.location.reload();
  }; 
  
  //html code for rendering it
    return (
      <div className="gameOver">
        <h3>
          {gameOver.guessedWord
            ? "Congratulations! You Correctly Guessed the Wordle"
            : "You Failed to Guess the Word"}
        </h3>
        <h1>Correct Word: {correctWord}</h1>
        {gameOver.guessedWord && (
          <h3>You guessed in {currAttempt.attempt} attempts</h3>
        )}
        <div>
                <button className="oval-button-play" onClick={handleReset}>Play Again</button>
        </div>
      </div>
    );
  }
  
  export default GameOver;