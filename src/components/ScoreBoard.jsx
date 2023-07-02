import React, { Component } from 'react';
import Card from '../components/Card';
import { connect } from 'react-redux';
import kyo from '../chars/kyo'
import iori from '../chars/iori';
import Char from '../chars/Char';

class ScoreBoard extends Component {
  constructor(props){
    super(props);
 
  }
  
  getCharsLinks = (turnWinner) => {
  	const turnChars = {p1:'',p2:''};
  	const aleatoryNumber = Math.round(Math.random() * (iori.power.length - 1));
  	
  	if(turnWinner === 'p1'){
  		turnChars.p1 = kyo.power[aleatoryNumber].src;
  		turnChars.p2 = iori.fall.src;
  	}else if(turnWinner === 'p2'){
  		turnChars.p1 = kyo.fall.src;
  		turnChars.p2 = iori.power[aleatoryNumber].src;
  	}else if(turnWinner === 'draw'){
  		turnChars.p1 = kyo.defesa.src;
  		turnChars.p2 = iori.defesa.src;
  	}else{
  		turnChars.p1 = kyo.luta.src;
  		turnChars.p2 = iori.luta.src;
  	}
  	return turnChars;
  }
  

  
  render(){
    const { p1Name, p2Name, p1Power, p2Power, countMoves, p1Points, p2Points, actionP1, actionP2, actualPlayer,p1Card,p2Card, turnWinner } = this.props;
 
   	const {p1,p2} = this.getCharsLinks(turnWinner)
return (
  		<div className='placar'> Selecine uma carta do { actualPlayer ? p1Name : p2Name} <br /> Round { countMoves }
          <br />
           {p1Power.powerValue } : { p2Power.powerValue }
           
          <br />
          { p1Name }: { p1Points } --- { p2Name }: { p2Points }  
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
  p1Points: state.game.p1Points,
  p2Points: state.game.p2Points,
  actionP1: state.game.actionP1,
  actionP2: state.game.actionP2,
  actualPlayer: state.game.actualPlayer,
  turnWinner: state.trunfoController.turnWinner,
  p2Card: state.trunfoController.p2Card,
  p1Card: state.trunfoController.p1Card
});}

  
export default connect(mapStateToProps)(ScoreBoard);

/*

	

*/
