import { FETCH_TEAMS_FAIL, FETCH_TEAMS_START, FETCH_TEAMS_SUCCESS, SET_CURRENT_TEAM } from '../actions/fetchTeams'

const initialState = {
    teams: [],
    error: '',
    isFetching: false,
    currentTeam: ''
}

export default function fetchTeams(state = initialState, action) {
    switch(action.type) {
        
        case FETCH_TEAMS_START: {
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        }

        case FETCH_TEAMS_SUCCESS: {
            return {
                ...state,
                teams: action.payload,
                isFetching: false,
                error: ''
            }
        }

        case FETCH_TEAMS_FAIL: {
            return{
                ...state,
                error: action.payload
            }
        }

        case SET_CURRENT_TEAM: {
            return{
                ...state,
                currentTeam: action.payload
            }
        }
        default:
            return state;
    }
}
