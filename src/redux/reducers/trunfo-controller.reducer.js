import { ADD_CLICKED_CARD } from "../actions";


const INITIAL_STATE = {
    id: 0,
    bla:['as','de','gt'],
    clickedCardByPlayer: []
}

const trunfoController = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case ADD_CLICKED_CARD: return { ...state,
        	clickedCardByPlayer: [ ...state.clickedCardByPlayer, {
        		player: action.payLoad.player,
   					card: action.payLoad.card,
        	}] 
        };
        default: return state;
    }
}

export default trunfoController;