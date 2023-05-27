import { SAVE_PLAYERS_NAME } from "../actions"

const INITIAL_STATE = {
    p1Name: '',
    p2Name: '',
}

const game = (state = INITIAL_STATE, action) => {
    console.log('game.reducer')
    console.log(action)
    switch (action.type) {
        case SAVE_PLAYERS_NAME: return { ...state, p1Name: action.payLoad.p1Name, p2Name: action.payLoad.p2Name };
        default: return state;
    }
}

export default game;