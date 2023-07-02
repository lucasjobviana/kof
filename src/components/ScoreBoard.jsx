import React, { Component } from 'react';
import Card from '../components/Card';
import { connect } from 'react-redux';
import iori from '../chars/iori';
import Char from '../chars/Char';

class ScoreBoard extends Component {
  constructor(props){
    super(props);
 
  }
  

  
  render(){
    const { p1Name, p2Name, p1Power, p2Power, countMoves, p1Points, p2Points, actionP1, actionP2, actualPlayer,p1Card,p2Card } = this.props;
 
   
return (
  		<div className='placar'> Selecine uma carta do { actualPlayer ? p1Name : p2Name} <br /> Round { countMoves }
          <br />
           {p1Power.powerValue } : { p2Power.powerValue }
           
          <br />
          { p1Name }: { p1Points } --- { p2Name }: { p2Points }  
          <Char action= { actionP1 } orderPlayer="p1" />
          <Char action= { actionP2 } orderPlayer="p2" />
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
  p2Card: state.trunfoController.p2Card,
  p1Card: state.trunfoController.p1Card
});}

  
export default connect(mapStateToProps)(ScoreBoard);

/*

	

*/
