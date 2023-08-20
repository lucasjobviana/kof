import React, { Component } from 'react'
import { connect } from 'react-redux'
import kyo from '../chars/kyo'
import iori from '../chars/iori'
import Char from '../chars/Char'
import { clearTurnProps } from '../redux/actions'
import introducaoMP3 from '../img/introducao.mp3'
import PropTypes from 'prop-types'
import introducao from '../img/introducao3.gif'

class ScoreBoard extends Component {
  constructor (props) {
    super(props)
    this.audioRef = React.createRef()
    this.audioRef1 = React.createRef()
    this.audioRefIntroducao = React.createRef()
  }

  canPlayKyo = false
  canPlayIori = false

  componentDidMount () {
    this.audioRef.current.addEventListener('canplaythrough', () => {
      this.canPlayIori = true
      console.log(this.canPlayIori)
    })

    this.audioRef1.current.addEventListener('canplaythrough', () => {
      this.canPlayKyo = true
      console.log(this.canPlayKyo)
    })

    // this.audioRef.current.load() // Inicie o carregamento do áudio
    // document.addEventListener('click', this.handlePlay)
    // setTimeout(() => {
    //   document.removeEventListener('click', this.handlePlay)
    // }, 9000);

    this.audioRefIntroducao.current.load() // Inicie o carregamento do áudio
    document.addEventListener('click', this.handlePlayIntroducao)

    setTimeout(() => {
      document.removeEventListener('click', this.handlePlayIntroducao)
    }, 11000)
  }

  handlePlay = () => {
    this.playAudio(this.audioRef)
  }

  handlePlayIntroducao = () => {
    this.playAudioIntroducao(this.audioRefIntroducao)
  }

  pauseAudio (audio) {
    audio.pause()
  }

  stopAudio (audio) {
    audio.pause()
    audio.currentTime = 0
  }

  playAudioIntroducao = (ref) => {
    if (ref === this.audioRefIntroducao) {
      ref.current.play()
    }
  }

  playAudio = (ref) => {
    if (ref === this.audioRef1) {
      if (this.canPlayIori) {
        ref.current.play()
        this.canPlayIori = false
      }
    } else {
      if (this.canPlayKyo) {
        ref.current.play()
        this.canPlayKyo = false
        console.log(this.canPlayKyo)
      }
    }
  }

  zerarDraw = (dispatch) => {
    setTimeout(() => {
      document.getElementById('p1').src = kyo.luta.src
      document.getElementById('p2').src = iori.luta.src
      dispatch(clearTurnProps())
    }, 1500)
  }

  zerar = (dispatch, loserId, winnerObject, aleatoryNumber) => {
    setTimeout(() => {
      document.getElementById('p1').src = kyo.luta.src
      document.getElementById('p2').src = iori.luta.src
      dispatch(clearTurnProps())
    }, winnerObject.power[aleatoryNumber].time)
    setTimeout(() => {
      document.getElementById(loserId).src = loserId === 'p2' ? iori.morto.src : kyo.morto.src
    }, 1000)
  }

  getCharsLinks = (turnWinner, dispatch) => {
    const audioKyo = document.getElementsByTagName('audio')[1]
    const srcKyo = document.getElementsByTagName('source')[1]
    const srcIori = document.getElementsByTagName('source')[2]
    const audioIori = document.getElementsByTagName('audio')[2]
    const turnChars = { p1: '', p2: '', p1Audio: '', p2Audio: '' }
    const aleatoryNumberIori = Math.round(Math.random() * (iori.power.length - 1))
    const aleatoryNumberKyo = Math.round(Math.random() * (kyo.power.length - 1))

    if (turnWinner === 'p1') {
      turnChars.p1 = kyo.power[aleatoryNumberKyo].src
      turnChars.p2 = iori.fall.src
      this.zerar(dispatch, 'p2', kyo, aleatoryNumberKyo)
      srcIori.src = iori.fall.audio_src
      srcKyo.src = kyo.power[aleatoryNumberKyo].audio_src
      audioIori.load()
      audioKyo.load()
      this.playAudio(this.audioRef)
      this.playAudio(this.audioRef1)
    } else if (turnWinner === 'p2') {
      turnChars.p1 = kyo.fall.src
      turnChars.p2 = iori.power[aleatoryNumberIori].src
      this.zerar(dispatch, 'p1', iori, aleatoryNumberIori)
      srcIori.src = iori.power[aleatoryNumberIori].audio_src
      srcKyo.src = kyo.fall.audio_src
      audioIori.load()
      audioKyo.load()
      this.playAudio(this.audioRef)
      this.playAudio(this.audioRef1)
    } else if (turnWinner === 'draw') {
      turnChars.p1 = kyo.defesa.src
      turnChars.p2 = iori.defesa.src
      this.zerarDraw(dispatch)
      srcIori.src = iori.defesa.audio_src
      srcKyo.src = kyo.defesa.audio_src
      audioIori.load()
      audioKyo.load()
      this.playAudio(this.audioRef)
      this.playAudio(this.audioRef1)
    } else {
      turnChars.p1 = kyo.luta.src
      turnChars.p2 = iori.luta.src
    }

    return turnChars
  }

  render () {
    const { p1Name, p2Name, p1Power, p2Power, countMoves, p1Score, p2Score, p1Card, p2Card, turnWinner, dispatch, currentTurn } = this.props

    const { p1, p2, p1Audio, p2Audio } = this.getCharsLinks(turnWinner, dispatch)
    return (

      <div className='placar'>
        <div id="animation-conteiner">
            <img id='introducao' src={introducao} className='introducao' ></img>
            <audio ref={this.audioRefIntroducao} >
                            <source src={introducaoMP3} type="audio/mpeg" />
                            Seu navegador não suporta elementos de áudio.
                        </audio>
        </div>

        <audio ref={this.audioRef} >
          <source type="audio/mpeg" />
          Seu navegador não suporta elementos de áudio.
        </audio>

        <audio ref={this.audioRef1} >
          <source type="audio/mpeg" />
          Seu navegador não suporta elementos de áudio.
        </audio>

        {(turnWinner !== 'draw' && (currentTurn === 2 || currentTurn === 5)) && ((turnWinner === 'p1') ? 'Vencedor foi ' + p1Name : 'Vencedor foi ' + p2Name)}
        {(currentTurn === 0 || currentTurn === 4) && 'Escolha uma carta ' + p1Name}
        {(currentTurn === 1 || currentTurn === 3) && 'Escolha uma carta ' + p2Name}

        <br />
        {((currentTurn === 0 && p1Card !== 'nao_definido') || (currentTurn === 3 && p2Card !== 'nao_definido')) ? 'Agora escolha um poder...' : ''}

        <br /> Round {countMoves}

        <br />
        {p1Power.powerValue} : {p2Power.powerValue}

        <br />
        {p1Name}: {p1Score} --- {p2Name}: {p2Score}
        <Char action={p1} audio={p1Audio} id='kyo' orderPlayer="p1" />
        <Char action={p2} audio={p2Audio} id='iori' orderPlayer="p2" />
      </div>
    )
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
    p1Score: state.trunfoController.p1Score,
    p2Score: state.trunfoController.p2Score,
    actionP1: state.game.actionP1,
    actionP2: state.game.actionP2,
    actualPlayer: state.game.actualPlayer,
    turnWinner: state.trunfoController.turnWinner,
    currentTurn: state.trunfoController.currentTurn,
    p2Card: state.trunfoController.p2Card,
    p1Card: state.trunfoController.p1Card
  })
}

ScoreBoard.propTypes = {
  orderPlayer: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  p1Name: PropTypes.string.isRequired,
  p2Name: PropTypes.string.isRequired,
  p1Power: PropTypes.string.isRequired,
  p2Power: PropTypes.string.isRequired,
  countMoves: PropTypes.string.isRequired,
  p1Score: PropTypes.string.isRequired,
  p2Score: PropTypes.string.isRequired,
  actionP1: PropTypes.string.isRequired,
  actionP2: PropTypes.string.isRequired,
  actualPlayer: PropTypes.string.isRequired,
  p1Card: PropTypes.string.isRequired,
  p2Card: PropTypes.string.isRequired,
  turnWinner: PropTypes.string.isRequired,
  dispatch: PropTypes.string.isRequired,
  currentTurn: PropTypes.string.isRequired
}

export default connect(mapStateToProps)(ScoreBoard)
