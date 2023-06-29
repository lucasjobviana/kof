import { SAVE_PLAYERS_NAME, SET_CHAR_ACTION } from "../actions"

const INITIAL_STATE = {
    p1Name: '',
    p2Name: '',
    p1ActualPower: '66',
    p2ActualPower: '66',
    countMoves: 0,
    p1Points: 0,
    p2Points: 0,
    actionP1: 'fjdl' ,
    actionP2: 'fasfsd',
    actualPlayer: true
}

const game = (state = INITIAL_STATE, action) => {
    console.log('game.reducer')
    console.log(action)
    switch (action.type) {
        case SAVE_PLAYERS_NAME: return { ...state, p1Name: action.payLoad.p1Name, p2Name: action.payLoad.p2Name };
        case SET_CHAR_ACTION:{
        console.log('___________________________________________________')
        console.log(action)
        
            if(action.payLoad.player === 'P1')
             return { ...state, actionP1:  action.payLoad.charAction }
             return { ...state, actionP2:  action.payLoad.charAction }
        }
        default: return state;
    }
}

export default game;