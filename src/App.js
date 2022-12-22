import React from 'react';
import './App.css';
import HitterForm from './components/TeamStats'
import TeamList from './components/TeamList';
import TeamStats from './components/TeamStats';

function App() {
  return (
    <div className="App">
      <h1>MLB Team Stats</h1>
      <TeamList />
      <TeamStats />
    </div>
  );
}

export default App;