export const CHOOSE_PLAYER = 'CHOOSE_PLAYER';
export const CHOOSE_STATS = 'CHOOSE_STATS';





export const choosePlayer = (name) => {
    return ({
        type: CHOOSE_PLAYER,
        payload: name
    });
}  

export const chooseStats = (stats) => {
    return ({
        type: CHOOSE_STATS,
        payload: stats
    })
}