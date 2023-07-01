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
  const { p1Name, p2Name, p1ActualPower, p2ActualPower, countMoves, p1Points, p2Points, actionP1, actionP2, actualPlayer } = this.props;
  console.log(actionP1,actionP2);
  console.log(this.props)
  	return (
  		<div className='placar'> Selecine uma carta do { actualPlayer ? p1Name : p2Name} <br /> Round { countMoves }
          <br />
          { p1ActualPower } x { p2ActualPower }
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
  p1ActualPower: state.game.p1ActualPower,
  p2ActualPower: state.game.p2ActualPower,
  countMoves: state.game.countMoves,
  p1Points: state.game.p1Points,
  p1Points: state.game.p2Points,
  actionP1: state.game.actionP1,
  actionP2: state.game.actionP2,
  actualPlayer: state.game.actualPlayer
});}

  
export default connect(mapStateToProps)(ScoreBoard);

