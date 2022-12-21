import axios from "axios";

export const FETCH_TEAMS_START = 'FETCH_PLAYER_START';
export const FETCH_TEAMS_FAIL = 'FETCH_PLAYER_FAIL';
export const FETCH_TEAMS_SUCCESS = 'FETCH_PLAYER_SUCCESS';

export const getTeams = (season) => dispatch => {
    const options = {
        method: 'GET',
        url: 'https://api-baseball.p.rapidapi.com/teams',
        params: {league: '1', season: '2020'},
        headers: {
          'X-RapidAPI-Key': 'fcd22bc93amshff5f70799ffe20ep11d60ajsn686ccaab042f',
          'X-RapidAPI-Host': 'api-baseball.p.rapidapi.com'
        }
      };
    dispatch({ type: FETCH_TEAMS_START });
    axios.request(options)
        .then(res => 
            dispatch({ type: FETCH_TEAMS_SUCCESS, payload: res })
        )
        .catch(err => 
            dispatch({ type: FETCH_TEAMS_FAIL, payload: err})
        );
}