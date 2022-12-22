import { combineReducers } from 'redux'
import fetchTeams from './fetchTeams'
import teamStats from './teamStats'
import { BrowserRouter } from 'react-router-dom'

export default combineReducers({
  fetchTeams,
  teamStats
})