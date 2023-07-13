import React, { Component } from 'react'
import { connect } from 'react-redux'
import { nextTurn, setTurnWinner } from '../redux/actions'
import PropTypes from 'prop-types'

class TrunfoController extends Component {
  constructor (props) {
    super(props)

    this.state = {
      round: 1,
      isFinalTurn: false
    }
  }

  waitForP1 = (p1Card, p1Power, dispatch, selectPowerMode = 'manual') => {
    const { p2Power } = this.props
    document.body.style.setProperty('--deck-oponent-inoperante', 'none')
    document.body.style.setProperty('--deck-inoperante', 'auto')

    if (p1Power !== 0 && p1Card !== 'nao_definido') {
    // const { powerId } = p1Power
    // const [jogador, cardId, powerName] = powerId.split('_')
      dispatch(nextTurn())
    } else if (p1Card !== 'nao_definido') { // p1 ja escolheu uma carta, aguardar poder
      const [idDeck, idOnlyCard] = p1Card.split('_')
      const cardElement = document.querySelector(`#${idDeck}_${idOnlyCard}`)
      cardElement.classList.add('girar')
      document.body.style.setProperty('--deck-inoperante', 'none')
      cardElement.children[1].style.display = 'none'
      cardElement.querySelector('.poderes').style.pointerEvents = 'auto'

      if (selectPowerMode === 'auto') {
        const { powerId } = p2Power
        document.querySelector(`#${p1Card}  .${powerId.split('_')[2]}`).click()
      }
    }
  }

  waitForP2 = (p1Card, p2Power, dispatch, selectPowerMode = 'manual') => {
    const { p1Power } = this.props
    document.body.style.setProperty('--deck-inoperante', 'none')
    document.body.style.setProperty('--deck-oponent-inoperante', 'auto')
    console.log(p1Card, p2Power)
    if (p2Power !== 0 && p1Card !== 'nao_definido') {
      // const { powerValue, powerId } = p2Power
      // const [jogador, cardId, powerName] = powerId.split('_')
      dispatch(nextTurn())
    } else if (p1Card !== 'nao_definido') { // p1 ja escolheu uma carta, aguardar poder
      const [idDeck, idOnlyCard] = p1Card.split('_')
      const cardElement = document.querySelector(`#${idDeck}_${idOnlyCard}`)
      cardElement.classList.add('girar')
      document.body.style.setProperty('--deck-oponent-inoperante', 'none')
      cardElement.children[1].style.display = 'none'
      cardElement.querySelector('.poderes').style.pointerEvents = 'auto'

      if (selectPowerMode === 'auto') {
        const { powerId } = p1Power
        document.querySelector(`#${p1Card}  .${powerId.split('_')[2]}`).click()
      }
    }
  }

  waitForAnimation = (p1Power, p2Power, dispatch, currentTurn) => {
    document.body.style.setProperty('--deck-inoperante', 'none')
    document.body.style.setProperty('--deck-oponent-inoperante', 'none')
    const winner = { turnWinner: 'nao_definido' }

    if (p1Power.powerValue > p2Power.powerValue) {
      winner.turnWinner = 'p1'
    } else if (p1Power.powerValue < p2Power.powerValue) {
      winner.turnWinner = 'p2'
    } else {
      winner.turnWinner = 'draw'
    }
    const [deckId, cardId] = p1Power.powerId.split('_')
    document.getElementById(`${deckId}_${cardId}`).classList.add('disabled')
    document.getElementById(`${deckId}_${cardId}`).querySelector('.poderes').style.pointerEvents = 'none'
    const [deckId2, cardId2] = p2Power.powerId.split('_')
    document.getElementById(`${deckId2}_${cardId2}`).classList.add('disabled')
    document.getElementById(`${deckId2}_${cardId2}`).querySelector('.poderes').style.pointerEvents = 'none'
    dispatch(setTurnWinner(winner))
  }

  render () {
    const { currentTurn, p1Card, p2Card, p1Power, p2Power, dispatch } = this.props

    switch (currentTurn) {
      case 0: this.waitForP1(p1Card, p1Power, dispatch); break
      case 1: this.waitForP2(p2Card, p2Power, dispatch, 'auto'); break
      case 2: { this.waitForAnimation(p1Power, p2Power, dispatch, currentTurn); break }
      case 3: this.waitForP2(p2Card, p2Power, dispatch); break
      case 4: this.waitForP1(p1Card, p1Power, dispatch, 'auto'); break
      case 5: { this.waitForAnimation(p1Power, p2Power, dispatch, currentTurn); break }
      default:console.log('default em trunfoController.jsx')
    }

    return (<></>)
  }
}

const mapStateToProps = (state) => {
  console.log(state); return ({
    p1Cards: state.deck.P1_cards,
    p2Cards: state.deck.P2_cards,
    p1Name: state.game.p1Name,
    p2Name: state.game.p2Name,
    p1Power: state.trunfoController.p1Power,
    p2Power: state.trunfoController.p2Power,
    countMoves: state.game.countMoves,
    // p1Points: state.game.p1Points,
    // p1Points: state.game.p2Points,
    actionP1: state.game.actionP1,
    actionP2: state.game.actionP2,
    p1Card: state.trunfoController.p1Card,
    p2Card: state.trunfoController.p2Card,
    currentTurn: state.trunfoController.currentTurn,
    actualPlayer: state.game.actualPlayer
  })
}

TrunfoController.propTypes = {
  currentTurn: PropTypes.string.isRequired,
  p1Card: PropTypes.string.isRequired,
  p2Card: PropTypes.string.isRequired,
  p1Power: PropTypes.string.isRequired,
  p2Power: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
}

export default connect(mapStateToProps)(TrunfoController)
