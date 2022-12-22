import React from 'react';
import './App.css';
import HitterForm from './components/TeamStats'
import TeamList from './components/TeamList';
import TeamStats from './components/TeamStats';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>MLB Team Stats</h1>
        <Route exact path='/'><TeamList /></Route>
        <Route path='/teamstats'><TeamStats /></Route>
    </div>
  );
}

export default App;