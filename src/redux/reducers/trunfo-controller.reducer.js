import { ADD_P1_CARD, ADD_P2_CARD, ADD_P1_POWER, ADD_P2_POWER, CLEAR_POWERS_P1, CLEAR_POWERS_P2, CLEAR_SELECTED_PLAYER, NEXT_TURN, CLEAR_TURN_PROPS, SET_TURN_WINNER } from "../actions";


const INITIAL_STATE = {
    id: 0,
    bla:['as','de','gt'],
    p2Card: 'nao_definido',
    p1Card: 'nao_definido',
    turnWinner: 'nao_definido',
    currentTurn: 0,
    p1Power: 0,
    p2Power: 0
}

const trunfoController = (state = INITIAL_STATE, action) => {

	const nextTurn = () => {
		return (state.currentTurn == 2 ? 0 : state.currentTurn + 1);
	}

console.log(action)
console.log(state)
console.log('mnnnnnnnnnnneeext turn ',nextTurn())
  switch (action.type) {
  		case CLEAR_TURN_PROPS: return { 
				...state, 
				p2Card: 'nao_definido',
				p1Card: 'nao_definido',
				p2Power: 0,
				p1Power: 0,
	    };break;
	    
  	  case NEXT_TURN: return { 
				...state, 
				currentTurn: nextTurn()
	    };break;
	    
	    case SET_TURN_WINNER: return { 
				...state, 
				turnWinner: action.payLoad.turnWinner
	    };break;
	    
	    case ADD_P1_CARD: return { 
				...state, 
				p1Card: action.payLoad.cardId
	    };break;
	     
	    case ADD_P2_CARD: return { 
				...state, 
				p2Card: action.payLoad.cardId
	    };break;
	    	     
      case ADD_P1_POWER: return {
      	...state,
      	p1Power: {powerId:action.payLoad.powerId,powerValue:action.payLoad.powerValue}
      };break;
      
      case ADD_P2_POWER: return {
      	...state,
      	p2Power: {powerId:action.payLoad.powerId,powerValue:action.payLoad.powerValue}
      };break;
			
			case CLEAR_POWERS_P1: return {...state,
				p1ActualPower: 'nao_definido',
			};break;
			
			case CLEAR_POWERS_P2: return {...state,
				p2ActualPower: 'nao_definido',
			};break;
			
			case CLEAR_SELECTED_PLAYER: return {...state,
				clickedCard: 'nao_definido',
			};break;
			
			default: return state;       
  };
}

export default trunfoController;