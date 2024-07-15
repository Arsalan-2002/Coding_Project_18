import React, { useState } from 'react';
import RateMovieButton from './RateMovieButton';
import MovieSelector from './MovieSelector';
import UploadButton from './UploadButton';
import './App.css';

const App = () => {
  const [selectedMovie, setSelectedMovie] = useState('Inception');
  const movies = ['Inception', 'Interstellar', 'The Dark Knight', 'Dunkirk'];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Interactive Media Platform</h1>
        <MovieSelector
          movies={movies}
          selectedMovie={selectedMovie}
          onSelectMovie={setSelectedMovie}
        />
        <RateMovieButton movie={selectedMovie} />
        <UploadButton />
      </header>
    </div>
  );
};

export default App;
