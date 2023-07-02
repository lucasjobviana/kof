import React, { Component } from 'react';
import Card from '../components/Card';
import { connect } from 'react-redux';
import iori from '../chars/iori';
import Char from '../chars/Char';
import { clearPowersP1, clearPowersP2, clearSelectedPlayer, clearTurnProps, nextTurn, setTurnWinner } from '../redux/actions'

class TrunfoController extends Component {
  constructor(props){
    super(props);
    this.state = {
    	round:1,
    	isFinalTurn:false,
    }
  }
  
changePlayer = (p1ActualPower, p2ActualPower, attr) => {
        const { actualPlayer, countMoves, dispatch } = this.props;
        const count = !actualPlayer ? countMoves + 1 : countMoves;
        const battle = document.querySelectorAll('.card');
        battle.forEach((c) => { c.classList.remove('inoperante') });
        let finalRound = false;
        if (count !== countMoves) {
            finalRound = true;
        }

        dispatch({type:'TESTE',payLoad:{
            actualPlayer: !actualPlayer,
            p1ActualPower,
            p2ActualPower,
            finalRound,
            attrEscolhido: attr,
            countMoves: count
        }})
    }
    
    
  esperarSelecaoPoder = (card) => {
		const battle = document.querySelectorAll('.card');
		battle.forEach((c) => { c.classList.add('inoperante') })
		card.classList.remove('inoperante');
  }

  onClickCard = ({ target }) => {
     const { p1ActualPower, p2ActualPower } = this.props;
     console.log(target)
      
     if (target.tagName === 'DIV') {
         const card = target.parentNode;
         card.classList.add('girar');
         const deck = target.parentNode.parentNode.parentNode.id;
         
         
         if (deck === 'deck') {
             this.esperarSelecaoPoder(card);
             target.style.display = 'none';
         } else {
            // console.log(card.firstChild.getElementsByClassName(attrEscolhido)[0].innerText.substring(5));
             //card.firstChild.getElementsByClassName(attrEscolhido)[0].click();
         }
     } else {
         const power = target.innerText.substring(5);
         const attr = target.classList.value;
         const deckId = target.parentNode.parentNode.parentNode.parentNode.parentNode.id;
         console.log(deckId);
         console.log(target)
         deckId === 'deck' ? this.changePlayer(power, p2ActualPower, attr) : this.changePlayer(power, p1ActualPower, attr);
         
     }
      
   }
   
   waitForP1 = (p1Card,p1Power,dispatch) => {
		 document.body.style.setProperty('--deck-oponent-inoperante', 'none');
		 
		 if(p1Power !== 0 && p1Card !== 'nao_definido'){
		 	const { powerValue, powerId } = p1Power;
			const [jogador,cardId, powerName] = powerId.split('_') ; 
			dispatch(nextTurn());
		 }
     else if(p1Card !== 'nao_definido'){ //p1 ja escolheu uma carta, aguardar poder
     	const [idDeck, idOnlyCard] = p1Card.split('_');
			const cardElement = document.querySelector(`#${idDeck}_${idOnlyCard}`);
			cardElement.classList.add('girar');
			document.body.style.setProperty('--deck-inoperante', 'none');
			cardElement.children[1].style.display = 'none';
			cardElement.style.pointerEvents = 'auto';	
     }
     
    
   }

  waitForP2 = (p1Card,p1Power,dispatch) => {
     document.body.style.setProperty('--deck-inoperante', 'none');
     document.body.style.setProperty('--deck-oponent-inoperante', 'auto');
     console.log(p1Card, p1Power)
		 if(p1Power !== 0 && p1Card !== 'nao_definido'){
		 	const { powerValue, powerId } = p1Power;
			const [jogador,cardId, powerName] = powerId.split('_') ; 
			dispatch(nextTurn());
		 }
     else if(p1Card !== 'nao_definido'){ //p1 ja escolheu uma carta, aguardar poder
     	const [idDeck, idOnlyCard] = p1Card.split('_');
			const cardElement = document.querySelector(`#${idDeck}_${idOnlyCard}`);
			cardElement.classList.add('girar');
			document.body.style.setProperty('--deck-oponent-inoperante', 'none');
			cardElement.children[1].style.display = 'none';
			cardElement.style.pointerEvents = 'auto';	
			console.log(idDeck,idOnlyCard,cardElement,p1Power,p1Card)
     }
   }
   
 	waitForAnimation = (p1Power, p2Power, dispatch,currentTurn) => {
 	 
 	document.body.style.setProperty('--deck-inoperante', 'auto');
  const winner = {turnWinner:'draw'};
  
  	console.log(p1Power.powerValue,p2Power.powerValue)
 		if(p1Power.powerValue > p2Power.powerValue){
 			winner.turnWinner = 'p1';
 		}else if(p1Power.powerValue < p2Power.powerValue){
 			winner.turnWinner = 'p2'
 		}else{
 			winner.turnWinner = 'draw'
 		}
 		

 		dispatch(setTurnWinner(winner));
 		 
	}
  
  render(){
  	const { isFinalTurn } = this.state;
  	const { currentTurn, p1Card, p2Card, p1Power, p2Power, dispatch } = this.props;
  	
  	 
  	switch(currentTurn){
  		case 0: this.waitForP1(p1Card, p1Power, dispatch);break;
  		case 1: this.waitForP2(p2Card, p2Power, dispatch);break;
  		case 2: {this.waitForAnimation(p1Power,p2Power,dispatch,currentTurn);break;}
  		default:console.log('default em trunfoController.jsx');
  	}
  
  	return (
  		<div>
         	   'nothing' : escolheu a carta
      </div>
  	);    
  }
}

const mapStateToProps = (state) => { console.log(state);return  ({
  p1Cards: state.deck.P1_cards,
  p2Cards: state.deck.P2_cards,	
  p1Name: state.game.p1Name,
  p2Name: state.game.p2Name,
  p1Power: state.trunfoController.p1Power,
  p2Power: state.trunfoController.p2Power,
  countMoves: state.game.countMoves,
  p1Points: state.game.p1Points,
  p1Points: state.game.p2Points,
  actionP1: state.game.actionP1,
  actionP2: state.game.actionP2,
  p1Card: state.trunfoController.p1Card,
  p2Card: state.trunfoController.p2Card,
  currentTurn: state.trunfoController.currentTurn,
  actualPlayer: state.game.actualPlayer
});}

  
export default connect(mapStateToProps)(TrunfoController);

