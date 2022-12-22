import { CHOOSE_PLAYER, CHOOSE_STATS, IS_ACTIVE } from '../actions/teamStats'

const initialState = {
    games: {
        played: {
           home: 0,
           away: 0,
           all: 0 
        },
        wins: {
            home: {
                total: 0,
                percentage: 0
            },
            away: {
                total: 0,
                percentage: 0
            },
            all: {
                total: 0,
                percentage: 0
            }
        },
        loses: {
            home: {
                total: 0,
                percentage: 0
            },
            away: {
                total: 0,
                percentage: 0
            },
            all: {
                total: 0,
                percentage: 0
            }
        }
    },    
    points: {
        for: {
            total: {
                home: 0,
                away: 0,
                all: 0
            },
            average: {
                home: 0,
                away: 0,
                all: 0
            }   
        },
        against: {
            total: {
                home: 0,
                away: 0,
                all: 0
            },
            average: {
                home: 0,
                away: 0,
                all: 0
            } 
        }
    }
}

export default function teamStats(state = initialState, action) {
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

        case IS_ACTIVE: {
            return{
                ...state,
                activePlayer: action.payload
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