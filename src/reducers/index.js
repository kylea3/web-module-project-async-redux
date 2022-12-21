import { CHOOSE_PLAYER, CHOOSE_STATS } from '../actions/index'

const initialState = {
    playerName: '',
    seasonStats: ''
}

const reducer = (state = initialState, action) => 
{
    switch(action.type) {
        
        case CHOOSE_PLAYER: {
            return {
                ...state,
                playerName: action.payload
            }
        }

        case CHOOSE_STATS: {
            return {
                ...state,
                seasonStats: action.payload
            }
        }
        // case ADD_FAVORITE: {
        //     return {
        //         ...state,
        //         favorites: [...state.favorites, action.payload]
        //     }
        // }
        // case REMOVE_FAVORITE: {
        //     return {
        //         ...state,
        //         favorites: state.favorites.filter(item => item.id !== action.payload)
        //     }
        // }
        default:
            return state;
    }
}

export default reducer;