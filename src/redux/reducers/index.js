import { combineReducers } from 'redux';
import deck from './deck.reducer';
import game from './game.reducer';


const rootReducer = combineReducers({ deck, game });

export default rootReducer;