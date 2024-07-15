// src/App.js
import React from 'react';
import RateMovieButton from './RateMovieButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Interactive Media Platform</h1>
        <RateMovieButton movie="Inception" />
      </header>
    </div>
  );
}

export default App;
