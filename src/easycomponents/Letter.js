import React, { useContext, useEffect } from "react";
import { AppContext } from "../pages/Normal";

function Letter({ letterPos, attemptVal }) {
  //function to check the words and disbale the keyboard accordingly
  const { board, correctWord, currAttempt,disabledLetters, setDisabledLetters } = useContext(AppContext);
  const letter = board[attemptVal][letterPos];
  //board is passed used the Appcontext provider
  const correct = correctWord.toUpperCase()[letterPos] === letter;
  const almost =
    !correct && letter !== "" && correctWord.toUpperCase().includes(letter);

  const letterState = 
    currAttempt.attempt > attemptVal &&
    (correct ? "correct" : almost ? "almost" : "error");


    useEffect(() => {
      if (letter !== "" && !correct && !almost) {
        setDisabledLetters((prev) => [...prev, letter]);
      }
    }, [currAttempt.attempt]);
  //HTML version for rendering it
  return (
    <div className='letter' id={letterState}>{""}{letter}</div>
  );
}

export default Letter