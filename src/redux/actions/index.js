const actionCreator = (name = 'null', payLoad = undefined) => ({
    type: name,
    payLoad: payLoad,
});

export const ADD_CART_TO_DECK = 'ADD_CART_TO_DECK';
export const SAVE_PLAYERS_NAME = 'SAVE_PLAYERS_NAME';
export const SET_DECK = 'SET_DECK';
export const SET_CHAR_ACTION = 'SET_CHAR_ACTION';
export const ADD_CLICKED_CARD = 'ADD_CLICKED_CARD';



export const addCardToDeck = (payLoad) => actionCreator(ADD_CART_TO_DECK, payLoad);
export const savePlayersName = (payLoad) => actionCreator(SAVE_PLAYERS_NAME, payLoad);
export const setDeck = (payLoad) =>  actionCreator(SET_DECK, payLoad);
export const setCharAction = (payLoad) =>  actionCreator(SET_CHAR_ACTION, payLoad);
export const addClickedCard = (payLoad) =>  actionCreator(ADD_CLICKED_CARD, payLoad);
 


