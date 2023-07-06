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
import TrunfoController from '../components/TrunfoController';
import ScoreBoard from '../components/ScoreBoard';
import { setDeck, setCharAction } from '../redux/actions';

class Game extends Component {
  constructor(props) {
    super(props);
     const { dispatch } = this.props;
  }

  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch(setDeck({player: "P1", deck:newShuffledDeck() }));
    dispatch(setDeck({player: "P2", deck:newShuffledDeck() }));
    dispatch(setCharAction({player:"P1", charAction: kyo.luta.src}));
    dispatch(setCharAction({player:"P2", charAction: iori.luta.src}));
  }

  render() {
    return (
      <div id='battle'>
      	<TrunfoController />
      	<ScoreBoard />
        <Deck id="deck" />
        <Deck id="deck_oponent" />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  p1Name: state.game.p1Name,
  p2Name: state.game.p2Name,
});

export default connect(mapStateToProps)(Game);