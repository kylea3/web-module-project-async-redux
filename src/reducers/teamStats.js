import { TEAM_STATS_START, TEAM_STATS_SUCCESS, TEAM_STATS_FAIL, TEAM_STATS_YEAR } from '../actions/teamStats'

const initialState = {
    year: '',
    teamStats: {
        country: {
            code: "",
            flag: "",
            id: 0,
            name: ""
        },
        games: { 
            loses: {
                all: {
                    total: 0, 
                    percentage: ''
                },
                away: {
                    total: 0, 
                    percentage: ''
                },
                home: {
                    total: 0, 
                    percentage: ''
                }
            },    
            played: { 
                all: 0,
                away: 0,
                home: 0
            },
            wins: {
                all: {
                    total: 0, 
                    percentage: ''
                },
                away: {
                    total: 0, 
                    percentage: ''
                },
                home: {
                    total: 0, 
                    percentage: ''
                }
            }
        },
        league: {
            id: 0,
            logo: "",
            name: "",
            season: 0,
            type: ""
        },
        points: {
            against: {
                average: {
                    home: '', 
                    away: '', 
                    all: ''
                },
                total: {
                    home: 0,
                    away: 0, 
                    all: 0
                }
            },
            for: {
                average:{
                    home: '', 
                    away: '', 
                    all: ''
                },
                total: {
                    home: 0, 
                    away: 0, 
                    all: 0
                }
            },
        },
        team: {
            id: 0,
            logo: "",
            name: ""
        }
    }
}

export default function teamStats(state = initialState, action) {
    switch(action.type) {
        
        case TEAM_STATS_START: {
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        }

        case TEAM_STATS_SUCCESS: {
            return {
                ...state,
                teamStats: action.payload,
                isFetching: false,
                error: ''
            }
        }

        case TEAM_STATS_FAIL: {
            return{
                ...state,
                error: action.payload
            }
        }

        case TEAM_STATS_YEAR: {
            return {
                ...state,
                year: action.payload
            }
        }
        default:
            return state;
    }
}