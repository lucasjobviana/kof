import React, { Component } from 'react';
import Card from '../components/Card';
import { connect } from 'react-redux';
import iori from '../chars/iori';
import Char from '../chars/Char';

class TrunfoController extends Component {
  constructor(props){
    super(props);
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
  
  render(){
  const { p1Name, p2Name, p1ActualPower, p2ActualPower, countMoves, p1Points, p2Points, actionP1, actionP2, actualPlayer, clickedCardByPlayer } = this.props;
  console.log(clickedCardByPlayer);
  console.log(this.props)
  let a = 'amanda';
  if(clickedCardByPlayer.length > 0){
  a = clickedCardByPlayer[0].player;
  clickedCardByPlayer[0].card.style.display = 'none'
  }
  
  
  
  	return (
  		<div>
         	 {a} : escolheu a carta
      </div>
  	);    
  }
}

const mapStateToProps = (state) => { console.log(state);return  ({
  p1Cards: state.deck.P1_cards,
  p2Cards: state.deck.P2_cards,	
  p1Name: state.game.p1Name,
  p2Name: state.game.p2Name,
  p1ActualPower: state.game.p1ActualPower,
  p2ActualPower: state.game.p2ActualPower,
  countMoves: state.game.countMoves,
  p1Points: state.game.p1Points,
  p1Points: state.game.p2Points,
  actionP1: state.game.actionP1,
  actionP2: state.game.actionP2,
  clickedCardByPlayer: state.trunfoController.clickedCardByPlayer,
  actualPlayer: state.game.actualPlayer
});}

  
export default connect(mapStateToProps)(TrunfoController);

