import { combineReducers } from 'redux';
import deck from './deck.reducer';
import game from './game.reducer';
import trunfoController from './trunfo-controller.reducer';


const rootReducer = combineReducers({ deck, game, trunfoController });

export default rootReducer;