import axios from "axios";
export const TEAM_STATS_START = 'TEAM_STATS_START';
export const TEAM_STATS_FAIL = 'TEAM_STATS_FAIL';
export const TEAM_STATS_SUCCESS = 'TEAM_STATS_SUCCESS';
export const TEAM_STATS_YEAR = 'TEAM_STATS_YEAR'

const options = {
  method: 'GET',
  url: 'https://api-baseball.p.rapidapi.com/teams',
  params: {league: '1', season: '2020'},
  headers: {
    'X-RapidAPI-Key': 'fcd22bc93amshff5f70799ffe20ep11d60ajsn686ccaab042f',
    'X-RapidAPI-Host': 'api-baseball.p.rapidapi.com'
  }
};

// export const getTeams = () => dispatch => {
//     dispatch({ type: FETCH_TEAMS_START });
//     axios.request(options)
//         .then(res => 
//             dispatch({ type: FETCH_TEAMS_SUCCESS, payload: res.data.response })
//         )
//         .catch(err => 
//             dispatch({ type: FETCH_TEAMS_FAIL, payload: err})
//         );
// }

export const getTeamStats = (data) => {
  return {
    type: TEAM_STATS_SUCCESS, payload: data
  }
}

export const getYear = (year) => {
    return {
        type: TEAM_STATS_YEAR, payload: year
    }
}