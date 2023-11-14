import React, { useCallback, useEffect } from "react";
import Key from "./Key";
import "../App.css";

function Keyboard({ onEnter, onDelete, onSelectLetter, disabledLetters }) {
  //function for making the keyboard and line,line2,line 3 make it as each line of the keyboard
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];
  //function for handling the keyboard
  const handleKeyboard = useCallback((event) => {
    if (event.key === "Enter") {
      onEnter();
    } else if (event.key === "Backspace") {
      onDelete();
    } else {
      keys1.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key);
        }
      });
      keys2.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key);
        }
      });
      keys3.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key);
        }
      });
    }
  }, [onEnter, onDelete, onSelectLetter, keys1, keys2, keys3]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);
  //HTML code for rendering it
  return (
    <div className="keyboard" onKeyDown={handleKeyboard}>
      <div className="line1">
        {keys1.map((key) => (
          <Key key={key} keyval={key} onSelectLetter={onSelectLetter} onDelete={onDelete} onEnter={onEnter} disabled={disabledLetters.includes(key)} />
        ))}
      </div>
      <div className="line2">
        {keys2.map((key) => (
          <Key key={key} keyval={key} onSelectLetter={onSelectLetter} onDelete={onDelete} onEnter={onEnter} disabled={disabledLetters.includes(key)} />
        ))}
      </div>
      <div className="line3">
        <Key keyval={"ENTER"} bigkey onEnter={onEnter} />
        {keys3.map((key) => (
          <Key key={key} keyval={key} onSelectLetter={onSelectLetter} onDelete={onDelete} onEnter={onEnter} disabled={disabledLetters.includes(key)} />
        ))}
        <Key keyval={"DELETE"} bigkey onDelete={onDelete} />
      </div>
    </div>
  );
}

export default Keyboard;
