import React from 'react';
import "../App.css"; 

function Key({keyval, bigkey, disabled, onSelectLetter, onDelete, onEnter}) {
  //function for the each key in the board
  const selectLetter = () =>{
    if(keyval === "ENTER"){  //function for enter
        onEnter();
    }
    else if(keyval === "DELETE"){ //function for delete
        onDelete();
    }
    else{
        onSelectLetter(keyval); //function for other key
    }
  };
  //HTML code for rendering it
  return (
    <div className='key' id={bigkey ? "big" : disabled && "disabled"}onClick={selectLetter}>{keyval}</div>
  )
}

export default Key