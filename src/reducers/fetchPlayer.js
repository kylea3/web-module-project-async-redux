import { FETCH_PLAYER_FAIL, FETCH_PLAYER_START, FETCH_PLAYER_SUCCESS } from '../actions/fetchPlayer'

const initialState = {
    player: [],
    error: '',
    isFetching: false
}

const fetchReducer = (state = initialState, action) => {
    switch(action.type) {
        
        case FETCH_PLAYER_START: {
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        }

        case FETCH_PLAYER_SUCCESS: {
            return {
                ...state,
                player: action.payload,
                isFetching: false,
                error: ''
            }
        }

        case FETCH_PLAYER_FAIL: {
            return{
                ...state,
                error: action.payload
            }
        }
        default:
            return state;
    }
}

export default fetchReducer;