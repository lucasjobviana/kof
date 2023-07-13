import React, { Component } from 'react'
import { setDeck, setCharAction } from '../redux/actions'
import { connect } from 'react-redux'
import { newShuffledDeck } from '../teste'
import kyo from '../chars/kyo'
import iori from '../chars/iori'
import Deck from '../components/Deck'
import TrunfoController from '../components/TrunfoController'
import PropTypes from 'prop-types'
import ScoreBoard from '../components/ScoreBoard'

class Game extends Component {
  componentDidMount = () => {
    const { dispatch } = this.props
    dispatch(setDeck({ player: 'P1', deck: newShuffledDeck() }))
    dispatch(setDeck({ player: 'P2', deck: newShuffledDeck() }))
    dispatch(setCharAction({ player: 'P1', charAction: kyo.luta.src }))
    dispatch(setCharAction({ player: 'P2', charAction: iori.luta.src }))
  }

  render () {
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
  p2Name: state.game.p2Name
})

Game.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect(mapStateToProps)(Game)
