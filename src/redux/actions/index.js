const actionCreator = (name = 'null', payLoad = undefined) => ({
  type: name,
  payLoad
})

export const ADD_CART_TO_DECK = 'ADD_CART_TO_DECK'
export const SAVE_PLAYERS_NAME = 'SAVE_PLAYERS_NAME'
export const SET_DECK = 'SET_DECK'
export const SET_CHAR_ACTION = 'SET_CHAR_ACTION'
export const ADD_P1_CARD = 'ADD_P1_CARD'
export const ADD_P2_CARD = 'ADD_P2_CARD'
export const ADD_P1_POWER = 'ADD_P1_POWER'
export const ADD_P2_POWER = 'ADD_P2_POWER'
export const CLEAR_POWERS_P1 = 'CLEAR_POWERS_P1'
export const CLEAR_POWERS_P2 = 'CLEAR_POWERS_P2'
export const CLEAR_SELECTED_PLAYER = 'CLEAR_SELECTED_PLAYER'
export const CLEAR_TURN_PROPS = 'CLEAR_TURN_PROPS'
export const NEXT_TURN = 'NEXT_TURN'
export const SET_TURN_WINNER = 'SET_TURN_WINNER'

export const addCardToDeck = (payLoad) => actionCreator(ADD_CART_TO_DECK, payLoad)
export const savePlayersName = (payLoad) => actionCreator(SAVE_PLAYERS_NAME, payLoad)
export const setDeck = (payLoad) => actionCreator(SET_DECK, payLoad)
export const setCharAction = (payLoad) => actionCreator(SET_CHAR_ACTION, payLoad)
export const addP1Card = (payLoad) => actionCreator(ADD_P1_CARD, payLoad)
export const addP2Card = (payLoad) => actionCreator(ADD_P2_CARD, payLoad)
export const addP1Power = (payLoad) => actionCreator(ADD_P1_POWER, payLoad)
export const addP2Power = (payLoad) => actionCreator(ADD_P2_POWER, payLoad)
export const clearPowersP2 = (payLoad) => actionCreator(CLEAR_POWERS_P2, payLoad)
export const clearSelectedPlayer = (payLoad) => actionCreator(CLEAR_SELECTED_PLAYER)
export const clearPowersP1 = (payLoad) => actionCreator(CLEAR_POWERS_P1, payLoad)
export const clearTurnProps = (payLoad) => actionCreator(CLEAR_TURN_PROPS, payLoad)
export const nextTurn = (payLoad) => actionCreator(NEXT_TURN, payLoad)
export const setTurnWinner = (payLoad) => actionCreator(SET_TURN_WINNER, payLoad)
