import { ADD_CART_TO_DECK, SAVE_PLAYERS_NAME } from "../actions"

const INITIAL_STATE = {
    id: 0,
    name: 'default',
    qtdCards: 0,
    deckShuffledOrder: []
}

const deck = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_CART_TO_DECK: return { ...state, novo: ['ok'] };
        default: return state;
    }
}

export default deck;