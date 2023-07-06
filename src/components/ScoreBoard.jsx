import React, { Component } from 'react';
import Card from '../components/Card';
import { connect } from 'react-redux';
import kyo from '../chars/kyo'
import iori from '../chars/iori';
import Char from '../chars/Char';
import { clearPowersP1, clearPowersP2, clearSelectedPlayer, clearTurnProps, nextTurn, setTurnWinner } from '../redux/actions'

class ScoreBoard extends Component {
  constructor(props){
    super(props);
 
  }
  
  zerarDraw = (dispatch) => {
    	 setTimeout(() => {
                   document.getElementById('p1').src = kyo.luta.src;
                   document.getElementById('p2').src = iori.luta.src;
                	dispatch(clearTurnProps())
                	
                }, 1500);
                
  }
  
  zerar = (dispatch,loserId,winnerObject,aleatoryNumber) => {
  	 setTimeout(() => {
                   //dispatch( setTurnWinner({turnWinner:'luta'}))
                   document.getElementById('p1').src = kyo.luta.src;
                   document.getElementById('p2').src = iori.luta.src;
                   dispatch(clearTurnProps())
                }, winnerObject.power[aleatoryNumber].time);
                setTimeout(() => {
                     document.getElementById(loserId).src = loserId === 'p2' ? iori.morto.src : kyo.morto.src;
                }, 1000);
  }
  
  getCharsLinks = (turnWinner,dispatch) => {
  	const turnChars = {p1:'',p2:''};
  	const aleatoryNumber = Math.round(Math.random() * (iori.power.length - 1));
  	
  	if(turnWinner === 'p1'){
  		turnChars.p1 = kyo.power[aleatoryNumber].src;
  		turnChars.p2 = iori.fall.src;
  		this.zerar(dispatch,'p2',kyo,aleatoryNumber);
  	}else if(turnWinner === 'p2'){
  		turnChars.p1 = kyo.fall.src;
  		turnChars.p2 = iori.power[aleatoryNumber].src;
  		this.zerar(dispatch,'p1',iori,aleatoryNumber);
  	}else if(turnWinner === 'draw'){
  		turnChars.p1 = kyo.defesa.src;
  		turnChars.p2 = iori.defesa.src;
  		this.zerarDraw(dispatch,aleatoryNumber);
  	}else{
  		turnChars.p1 = kyo.luta.src;
  		turnChars.p2 = iori.luta.src;
  	}
  	
  	 
                
  	return turnChars;
  }
  

  
  render(){
    const { p1Name, p2Name, p1Power, p2Power, countMoves, p1Score, p2Score, actionP1, actionP2, actualPlayer,p1Card,p2Card, turnWinner,dispatch, currentTurn } = this.props;
 
   	const {p1,p2} = this.getCharsLinks(turnWinner,dispatch)
return (
  		<div className='placar'> Selecine uma carta do { currentTurn == 0 ? p1Name : p2Name} <br /> Round { countMoves }
          <br />
           {p1Power.powerValue } : { p2Power.powerValue }
           
          <br />
          { p1Name }: { p1Score } --- { p2Name }: { p2Score }  
          <Char action= { p1 } orderPlayer="p1" />
          <Char action= { p2 } orderPlayer="p2" />
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
  p1Score: state.trunfoController.p1Score,
  p2Score: state.trunfoController.p2Score,
  actionP1: state.game.actionP1,
  actionP2: state.game.actionP2,
  actualPlayer: state.game.actualPlayer,
  turnWinner: state.trunfoController.turnWinner,
  currentTurn: state.trunfoController.currentTurn,
  p2Card: state.trunfoController.p2Card,
  p1Card: state.trunfoController.p1Card
});}

  
export default connect(mapStateToProps)(ScoreBoard);

/*

	

*/
