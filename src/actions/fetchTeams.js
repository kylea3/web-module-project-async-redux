import axios from "axios";

export const FETCH_TEAMS_START = 'FETCH_TEAMS_START';
export const FETCH_TEAMS_FAIL = 'FETCH_TEAMS_FAIL';
export const FETCH_TEAMS_SUCCESS = 'FETCH_TEAMS_SUCCESS';
export const SET_CURRENT_TEAM = 'SET_CURRENT_TEAM';

const options = {
  method: 'GET',
  url: 'https://api-baseball.p.rapidapi.com/teams',
  params: {league: '1', season: '2020'},
  headers: {
    'X-RapidAPI-Key': 'fcd22bc93amshff5f70799ffe20ep11d60ajsn686ccaab042f',
    'X-RapidAPI-Host': 'api-baseball.p.rapidapi.com'
  }
};

export const getTeams = () => dispatch => {
    dispatch({ type: FETCH_TEAMS_START });
    axios.request(options)
        .then(res => 
            dispatch({ type: FETCH_TEAMS_SUCCESS, payload: res.data.response })
        )
        .catch(err => 
            dispatch({ type: FETCH_TEAMS_FAIL, payload: err})
        );
}

// export const getTeams = (data) => {
//   return {
//     type: FETCH_TEAMS_SUCCESS, payload: data
//   }
// }

export const setCurrentTeam = (value) => {
  return {
    type: SET_CURRENT_TEAM, payload: value
  }
}