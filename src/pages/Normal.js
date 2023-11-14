import React from 'react';
import "../App.css"; 
import Board from '../easycomponents/Board';
import Keyboard from  '../commoncomponents/Keyboard'
import { useState, createContext,useEffect } from "react";
import { boardDefault, generateWordSet } from '../easycomponents/Words';
import GameOver from '../commoncomponents/GameOver';

export const AppContext = createContext();

function Normal() {
  //use state function used in the code for Appcontext provider
  const [board,setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 });
  const [correctWord, setCorrectWord] = useState("");
  const [wordSet, setWordSet] = useState(new Set());
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });
  //function to reset the page
  const handleReset = () => {
    window.location.reload();
  };
  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet);
      setCorrectWord(words.todaysWord);
    });
  }, []);
  //function to do when a letter is pressed
  const onSelectLetter = (key)=>{
    if (currAttempt.letterPos > 5) return;
    const newBoard = [...board]
    newBoard[currAttempt.attempt][currAttempt.letterPos] = key;
    setCurrAttempt( {...currAttempt,letterPos: currAttempt.letterPos + 1});
  };
  //function to do when you press delete in the keyboard
  const onDelete = ()=>{
    if (currAttempt.letterPos === 0) return;
    const newBoard = [...board]
    newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = " ";
    setBoard(newBoard);
    setCurrAttempt( {...currAttempt,letterPos: currAttempt.letterPos - 1});
  };
  //function to do when you press the enter
  const onEnter = ()=>{
    let currWord = "";
    for (let i = 0; i < 6; i++) {
      currWord += board[currAttempt.attempt][i].toLowerCase();
    }
    if (wordSet.has(currWord.toLowerCase())) {
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letter: 0 });
    } else {
      alert("Word not found");
    }
    if (currWord === correctWord) {
      setGameOver({ gameOver: true, guessedWord: true });
      return;
    }
    console.log(currAttempt);
    if (currAttempt.attempt === 5) {
      setGameOver({ gameOver: true, guessedWord: false });
      return;
    }
    if(currAttempt.letterPos!==6) return;
    setCurrAttempt({attempt:currAttempt.attempt+1,letterPos:0});
  };
    //HTML rendering of the page
    return (     
      <>
      <div>
        <nav>
          <div className='nav-container'>
          <h1>Wordle</h1>
          <button className='resetButton' onClick={handleReset}>Reset</button>
          </div>
        </nav>
      </div>
      <AppContext.Provider value={{board,setBoard,currAttempt, setCurrAttempt, onSelectLetter,onDelete,onEnter,correctWord,disabledLetters, setDisabledLetters,gameOver, setGameOver}}>
        <div className='game'>
        <Board />    
        {gameOver.gameOver ? <GameOver  
          currAttempt={currAttempt}
          correctWord={correctWord}
          gameOver={gameOver}
          />: <Keyboard
          onEnter={onEnter}
          onDelete={onDelete}
          onSelectLetter={onSelectLetter}
         disabledLetters={disabledLetters}
      />}
        </div>
      </AppContext.Provider>
    </>
    );
}

export default Normal

