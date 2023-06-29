import { ADD_CART_TO_DECK, SAVE_PLAYERS_NAME, SET_DECK } from "../actions";

const INITIAL_STATE = {
    id: 0,
    name: 'default',
    qtdCards: 0,
    P1_cards: ['P1CARDS'],
    P2_cards: ['P2CARDS']
}

const deck = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_CART_TO_DECK: return { ...state, novo: ['ok'] };
        case SET_DECK:{
            if(action.payLoad.player === 'P1')
             return { ...state, P1_cards: action.payLoad.deck}
             return { ...state, P2_cards: action.payLoad.deck}
        }
        default: return state;
    }
}

export default deck;