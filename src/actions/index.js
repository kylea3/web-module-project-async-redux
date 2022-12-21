export const CHOOSE_PLAYER = 'CHOOSE_PLAYER';





export const choosePlayer = (name) => {
    return ({
        type: CHOOSE_PLAYER,
        payload: name
    });
}  