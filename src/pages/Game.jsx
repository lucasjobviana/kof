import React, { Component } from 'react';
import Card from '../components/Card';
import { newShuffledDeck } from '../teste';
import { connect } from 'react-redux';
import introducao from '../img/introducao3.gif';
import introducaoMP3 from '../img/introducao.mp3';
import kyo from '../chars/kyo';
import iori from '../chars/iori';
import Char from '../chars/Char';
import Deck from '../components/Deck';
import { setDeck } from '../redux/actions';

class Game extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    const deck = newShuffledDeck() ;
    const { dispatch } = this.props;
    dispatch(setDeck({player: "P1", deck }));
  }

  render() {
    

    return (
      <div id='battle'>
        <Deck id="deck" />
        <Deck id="deck_oponent"/>

        {/* <div id="deck">{ playerDeckElement }</div> 
        <div id="deck_oponent">{ oponentDeckElement }</div> */}
      </div>)
  }

}

const mapStateToProps = (state) => ({
  p1Name: state.game.p1Name,
  p2Name: state.game.p2Name,
});

export default connect(mapStateToProps)(Game);