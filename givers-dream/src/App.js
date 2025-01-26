import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to The Givers Dream</h1>
        <p>
          This is a non-profit organization created by 3 ladies.
        </p>
        <a
          className="App-link"
          href="https://github.com/thegiversdream/the-givers-dream?tab=readme-ov-file#the-givers-dream"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </header>
    </div>
  );
}

export default App;