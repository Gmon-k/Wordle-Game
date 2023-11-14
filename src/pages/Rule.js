import React from 'react';
import "../App.css";

function Rule() {
  //HTMl version for creating the rule for the game
  return (
    <div>
      <nav>
        <h1>Wordle</h1>
      </nav>
      <div className='rulebody'>
        <div className='rulebanner'>
          <h1>What is Wordle?</h1>
          <p>Wordle is a daily word game created by Josh Wardle, a Brooklyn-based software engineer who has developed something of a reputation as a crafter of interesting social experiments. Every day, the people of the internet are greeted with a fresh word puzzle that can only be solved — or not! — using a series of process-of-elimination clues.</p>
          <h1>How does Wordle work? How do you do Wordle?</h1>
          <p>It works like this: When you visit the Wordle website, you're greeted by a 5-wide by 6-long grid of empty, white boxes. Each box can hold one letter, and so you guess at the answer by typing in a five-letter word and pressing 'Enter'.</p>
          <p>There aren't any clues up front, so any five-letter word will do as an initial guess. That's where the game of Wordle really starts. When you send a guess along, the color of each letter's box changes.</p>
          <ul>
            <li><p>If it turns green, that letter is in the daily word and you've placed it in the right spot.</p></li>
            <li><p>If it turns yellow, the letter is in the word but you have it in the wrong position.</p></li>
            <li><p>If the box turns grey, it means the letter isn't in the word at all.</p></li>
          </ul>
          <h1>How do you start Wordle? Best starting words?</h1>
          <p>We have some ideas to help you select the perfect opening. Some of those tips include choosing a word with at least two different vowels in it, plus a few common consonants such as S, T, R, or N.</p> 
          <h1>Why is Wordle such a big deal?</h1> 
          <p>Wordle has been available since October 2021 as a daily word game that anyone online can play for free. It only exploded more recently, after Wardle announced the addition of a "Share" feature in mid-December that makes it easy to post your daily performance online.</p>      
        </div>
      </div>
    </div>
  );
}

export default Rule;

