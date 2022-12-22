const response = {  
    country: { 
        code: "US",
        flag: "https://media-2.api-sports.io/flags/us.svg",
        id: 1,
        name: "USA"
    },
    games: { 
        loses: {
            all: {
                total: 48, 
                percentage: '0.571'
            },
            away: {
                total: 22, 
                percentage: '0.537'
            },
            home: {
                total: 26, 
                percentage: '0.605'
            }
        },    
        played: { 
            all: 84,
            away: 41,
            home: 43
        },
        wins: {
            all: {
                total: 34, 
                percentage: '0.405'
            },
            away: {
                total: 17, 
                percentage: '0.415'
            },
            home: {
                total: 17, 
                percentage: '0.395'
            }
        }
    },
    league: {
        id: 1,
        logo: "https://media-1.api-sports.io/baseball/leagues/1.png",
        name: "MLB",
        season: 2020,
        type: "League"
    },
    points: {
        against: {
            average: {
                home: '6.2', 
                away: '5.1', 
                all: '5.7'
            },
            total: {
                home: 267,
                away: 210, 
                all: 477
            }
        },
        for: {
            average:{
                home: '5.0', 
                away: '4.3', 
                all: '4.7'
            },
            total: {
                home: 217, 
                away: 175, 
                all: 392
            }
        },
    },
    team: {
        id: 5,
        logo: "https://media-2.api-sports.io/baseball/teams/5.png",
        name: "Boston Red Sox"
    }
}

export default response;