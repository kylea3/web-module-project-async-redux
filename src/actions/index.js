export const CHOOSE_PLAYER = 'CHOOSE_PLAYER';
export const CHOOSE_STATS = 'CHOOSE_STATS';
export const IS_ACTIVE = 'IS_ACTIVE';





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

export const isActive = (value) => {
    return({
        type: IS_ACTIVE,
        payload: value
    })
}

export const fetchData = () => {
    
}