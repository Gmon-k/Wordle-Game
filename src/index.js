import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Rule from './pages/Rule';
import Game from './pages/Game';
import App from './App';
import Normal from './pages/Normal';
import Hard from './pages/Hard'; 


function Root() { // Change the function name
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/rule" element={<Rule />} />
        <Route path="/game" element={<Game />}/>
        <Route path="game/normal" element={<Normal />} />
        <Route path="game/hard" element={<Hard />} />
      </Routes>
    </Router>
  );
}

ReactDOM.render(
  <Root />, // Change the function name here as well
  document.getElementById('root')
);
