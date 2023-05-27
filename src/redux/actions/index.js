const actionCreator = (name = 'null', payLoad = undefined) => ({
    type: name,
    payLoad: payLoad,
});

export const ADD_CART_TO_DECK = 'ADD_CART_TO_DECK';
export const SAVE_PLAYERS_NAME = 'SAVE_PLAYERS_NAME';



export const addCardToDeck = (payLoad) => actionCreator(ADD_CART_TO_DECK, payLoad);

export const savePlayersName = (payLoad) => actionCreator(SAVE_PLAYERS_NAME, payLoad);


