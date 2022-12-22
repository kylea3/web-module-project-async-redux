import { combineReducers } from 'redux'
import fetchTeams from './fetchTeams'
import teamStats from './teamStats'

export default combineReducers({
  fetchTeams,
  teamStats
})