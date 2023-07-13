import { SAVE_PLAYERS_NAME, SET_CHAR_ACTION } from '../actions'

const INITIAL_STATE = {
  p1Name: '',
  p2Name: '',
  p1ActualPower: '66',
  p2ActualPower: '66',
  countMoves: 0,
  p1Points: 0,
  p2Points: 0,
  actionP1: 'fjdl',
  actionP2: 'fasfsd',
  finalRound: false,
  actualPlayer: true
}

const game = (state = INITIAL_STATE, action) => {
  console.log('game.reducer')
  console.log(action)
  switch (action.type) {
    case SAVE_PLAYERS_NAME: return {
      ...state,
      p1Name: action.payLoad.p1Name,
      p2Name: action.payLoad.p2Name
    }
    case SET_CHAR_ACTION:{
      if (action.payLoad.player === 'P1') { return { ...state, actionP1: action.payLoad.charAction } }
      return { ...state, actionP2: action.payLoad.charAction }
    }
    case 'TESTE': return {
      ...state,
      actualPlayer: action.payLoad.actualPlayer,
      p1ActualPower: action.payLoad.p1ActualPower,
      p2ActualPower: action.payLoad.p2ActualPower,
      finalRound: action.payLoad.finalRound,
      attrEscolhido: action.payLoad.attrEscolhido,
      countMoves: action.payLoad.countMoves

    }
    default: return state
  }
}

export default game
