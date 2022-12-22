import React from 'react';
import './App.css';
import HitterForm from './components/HitterForm'
import TeamList from './components/TeamList';

function App() {
  return (
    <div className="App">
      <h1>MLB Hitter Stats</h1>
      <TeamList />
    </div>
  );
}

export default App;