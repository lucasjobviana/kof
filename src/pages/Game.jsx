import React, { Component } from 'react';
import Card from '../components/Card';
import { newShuffledDeck } from '../teste';
import { connect } from 'react-redux';
import kyo from '../img/kyo.gif';
import kyo_p1 from '../img/kyo-p1.gif';
import kyo_p2 from '../img/kyo-p2.gif';
import kyo_p3 from '../img/kyo-p3.gif';
import kyo_p4 from '../img/kyo-p4.gif';
import kyo_p5 from '../img/kyo-p5.gif';
import kyo_p6 from '../img/kyo-p6.gif';
import kyo_morto from '../img/kyo-morto44.gif';
import iori_morto from '../img/iori-morto33.png';
import kyo_defesa from '../img/kyo-defesa.gif';
import kyo_fall from '../img/kyo-fall.gif';
import iori from '../img/iori.gif';
import iori_p1 from '../img/iori-p1.gif';
import iori_p2 from '../img/iori-p2.gif';
import iori_p3 from '../img/iori-p3.gif';
import iori_p4 from '../img/iori-p4.gif';
import iori_p5 from '../img/iori-p5.gif';
import iori_p6 from '../img/iori-p6.gif';
import iori_p7 from '../img/iori-p7.gif';
import iori_p8 from '../img/iori-p8.gif';
// import iori_p9 from '../img/iori-p9.gif';
import iori_defesa from '../img/iori-defesa.gif';
import iori_fall from '../img/iori-fall.gif';
import introducao from '../img/introducao3.gif';
import iori_win from '../img/iori-win.gif';
import introducaoMP3 from '../img/introducao.mp3';

//import iori_audio_p1 from '../img/introducao.mp3';
import iori_audio_p1 from '../audio/iori-p1.mp3';
import iori_audio_p2 from '../audio/iori-p2.mp3';
import iori_audio_p3 from '../audio/iori-px.mp3';
import iori_audio_p4 from '../audio/iori-p4.mp3';
import iori_audio_p5 from '../audio/iori-p5.mp3';
import iori_audio_p6 from '../audio/iori-p6.mp3';
import iori_audio_p7 from '../audio/iori-py.mp3';
import kyo_audio_p1 from '../audio/kyo-p1.mp3';
import kyo_audio_p2 from '../audio/kyo-p2.mp3';
import kyo_audio_p3 from '../audio/kyo-p3.mp3';
import kyo_audio_p4 from '../audio/kyo-p4.mp3';
import kyo_audio_p5 from '../audio/kyo-p5.mp3';
import kyo_audio_p6 from '../audio/kyo-p6.mp3';
import kyo_audio_fall from '../audio/kyo-fall.mp3';
import iori_audio_fall from '../audio/iori-fall.mp3';
import kyo_audio_defesa from '../audio/iori-defesa3.mp3';
import iori_audio_defesa from '../audio/iori-defesa3.mp3';

const p_kyo = {
    luta: {
        src: kyo, left: '100px'
    }, power: [
        {
            src: kyo_p1, left: '60px', time: 1900, audio_src: kyo_audio_p1,
        },
        {
            src: kyo_p2, left: '60px', time: 1450, audio_src: kyo_audio_p2,
        },
        {
            src: kyo_p3, left: '60px', time: 3100, audio_src: kyo_audio_p3,
        },
        {
            src: kyo_p4, left: '60px', time: 3450, audio_src: kyo_audio_p4,
        },
        {
            src: kyo_p5, left: '60px', time: 3600, audio_src: kyo_audio_p5,
        }, ,
        {
            src: kyo_p6, left: '60px', time: 7500, audio_src: kyo_audio_p6,
        }],
    fall: {
        src: kyo_fall, left: '60px', audio_src: kyo_audio_fall,
    },
    morto: {
        src: kyo_morto,
    },
    defesa: {
        src: kyo_defesa, left: '60px', audio_src: kyo_audio_defesa,
    }
}

const p_iori = {
    luta: {
        src: iori, left: '100px'
    },
    power: [
        {
            src: iori_p1, left: '60px', time: 1850, audio_src: iori_audio_p1,
        },
        {
            src: iori_p2, left: '60px', time: 2020, audio_src: iori_audio_p2,
        },
        {
            src: iori_p3, left: '60px', time: 6100, audio_src: iori_audio_p3,
        },
        {
            src: iori_p4, left: '60px', time: 1518, audio_src: iori_audio_p4,
        },
        {
            src: iori_p5, left: '60px', time: 4000, audio_src: iori_audio_p5,
        },
        {
            src: iori_p6, left: '60px', time: 6400, audio_src: iori_audio_p6,
        },
        {
            src: iori_p7, left: '60px', time: 5000, audio_src: iori_audio_p7,
        },
        {
            src: iori_p8, left: '60px', time: 4000, audio_src: iori_audio_p7,
        }

    ],

    fall: {
        src: iori_fall, left: '60px', audio_src: iori_audio_fall,
    },
    morto: {
        src: iori_morto,
    },
    defesa: {
        src: iori_defesa, left: '60px', audio_src: iori_audio_defesa,
    }
}

// const express = require('express');
// const app = express();

// app.use(express.static('public'));

// app.get('../img/introducao.mp3', (req, res) => {
//     res.set('Content-Type', 'audio/mpeg');
//     res.sendFile('../img/introducao.mp3');
// });

// app.listen(3000, () => {
//     console.log('Servidor rodando na porta 3000');
// });

class Game extends Component {
    constructor(props) {
        super(props);
        // console.log('embaralhar um')
        const deck1 = newShuffledDeck();
        //console.log('embaralhar dois')
        const deck2 = newShuffledDeck();
        this.audioRef = React.createRef();
        this.audioRef1 = React.createRef();

        this.state = {
            deck1: deck1,
            deck2: deck2,
            //deck: deckPre,
            actualPlayer: true,
            countMoves: 1,
            p1ActualPower: 0,
            p1points: 0,
            p2points: 0,
            finalRound: false,
            p2ActualPower: 0
        }
    }
    canPlayKyo = false;
    canPlayIori = false;

    componentDidMount() {
        this.audioRef.current.addEventListener('canplaythrough', () => {
            this.canPlayIori = true;
            console.log(this.canPlayIori)
        });

        this.audioRef1.current.addEventListener('canplaythrough', () => {
            this.canPlayKyo = true;
            console.log(this.canPlayKyo)
        });


        this.audioRef.current.load(); // Inicie o carregamento do áudio
        document.addEventListener('click', this.handlePlay);
        //document.addEventListener('click', this.handlePlay);
        setTimeout(() => {
            document.removeEventListener('click', this.handlePlay);
        }, 11000);

    }

    handlePlay = () => {

        this.playAudio(this.audioRef);


    }

    changePlayer = (p1ActualPower, p2ActualPower) => {
        const { actualPlayer, countMoves } = this.state;
        const count = !actualPlayer ? countMoves + 1 : countMoves;
        const battle = document.querySelectorAll('.card');
        battle.forEach((c) => { c.classList.remove('inoperante') });
        let finalRound = false;
        if (count !== countMoves) {
            finalRound = true;
        }

        this.setState({
            actualPlayer: !actualPlayer,
            p1ActualPower,
            p2ActualPower,
            finalRound,
            countMoves: count
        })
    }

    esperarSelecaoPoder = (card) => {
        const battle = document.querySelectorAll('.card');
        battle.forEach((c) => { c.classList.add('inoperante') })
        //console.log(card);
        card.classList.remove('inoperante');
    }

    onClickCard = ({ target }) => {
        // alert('clickey');//transform: rotateY(180deg);
        const { p1ActualPower, p2ActualPower } = this.state;
        if (target.tagName === 'DIV') {
            const card = target.parentNode;
            card.classList.add('girar');
            this.esperarSelecaoPoder(card);
        } else {
            const power = target.innerText.substring(5);
            const deck = target.parentNode.parentNode.parentNode.parentNode.parentNode.id;
            deck === 'deck' ? this.changePlayer(power, p2ActualPower) : this.changePlayer(p1ActualPower, power)
        }
    }

    pauseAudio(audio) {
        audio.pause();
    }

    stopAudio(audio) {
        audio.pause();
        audio.currentTime = 0;
    }
    playAudio = (ref) => {
        if (ref === this.audioRef1) {
            if (this.canPlayIori) {
                ref.current.play();
                this.canPlayIori = false;
                console.log(this.canPlayIori)
                //this.audioRef.current.play();
                //this.audioRef1.current.play();
                // document.removeEventListener('keydown', this.handlePlay);
            }
        } else {
            if (this.canPlayKyo) {
                ref.current.play();
                this.canPlayKyo = false;
                console.log(this.canPlayKyo)
                //this.audioRef.current.play();
                //this.audioRef1.current.play();
                // document.removeEventListener('keydown', this.handlePlay);
            }
        }


    }






    render() {

        const { actualPlayer, countMoves, p1ActualPower, p2ActualPower, p1points, p2points, deck1, deck2, finalRound } = this.state;

        const { p1Name, p2Name } = this.props;

        const cards1 = deck1.map((card, ord) => (
            <div key={ord + ord}>
                <Card
                    key={card.cardName + ord}
                    cardName={card.cardName}
                    cardDescription={card.cardDescription}
                    cardAttr1={card.cardAttr1}
                    cardAttr2={card.cardAttr2}
                    cardAttr3={card.cardAttr3}
                    cardImage={card.cardImage}
                    cardRare={card.cardRare}
                    cardTrunfo={card.cardTrunfo}
                    cardVisible={card.cardVisible}
                    isView={false}
                    onClickCard={this.onClickCard}
                />
            </div>

        ));

        const cards2 = deck2.map((card, ord) => (
            <div key={ord + ord}>
                <Card
                    key={card.cardName + ord}
                    cardName={card.cardName}
                    cardDescription={card.cardDescription}
                    cardAttr1={card.cardAttr1}
                    cardAttr2={card.cardAttr2}
                    cardAttr3={card.cardAttr3}
                    cardImage={card.cardImage}
                    cardRare={card.cardRare}
                    cardTrunfo={card.cardTrunfo}
                    cardVisible={card.cardVisible}
                    isView={false}
                    onClickCard={this.onClickCard}
                />
            </div>
        ));

        const verdade = true;
        // let urlp1 = kyo;
        // let urlp2 = iori;

        if (finalRound) {

            const disabledElements = document.querySelectorAll('.girar');//
            disabledElements.forEach((e) => e.classList.add('disabled'));

            if (p1ActualPower > p2ActualPower) {//p1 wins
                const p1 = p1points + 1;
                const avatarP1 = document.getElementById('p1');
                const avatarP2 = document.getElementById('p2');
                const aleatoryNumber = Math.round(Math.random() * (p_kyo.power.length - 1));
                const src = document.getElementsByTagName('source')[1];
                const audio = document.getElementsByTagName('audio')[1];
                const src0 = document.getElementsByTagName('source')[0];
                const audio0 = document.getElementsByTagName('audio')[0];

                avatarP1.src = p_kyo.power[aleatoryNumber].src;
                avatarP2.src = p_iori.fall.src;


                src.src = p_kyo.power[aleatoryNumber].audio_src;
                src0.src = p_iori.fall.audio_src;
                audio.load();
                audio0.load();
                this.playAudio(this.audioRef1);
                this.playAudio(this.audioRef);


                //avatarP1.src = p_kyo.power[3].src;
                setTimeout(() => {
                    avatarP1.src = p_kyo.luta.src;
                    avatarP2.src = p_iori.luta.src;
                }, p_kyo.power[aleatoryNumber].time);
                setTimeout(() => {
                    avatarP2.src = p_iori.morto.src;
                }, 1000);

                this.setState({ p1points: p1, finalRound: false });

            } else if (p1ActualPower < p2ActualPower) {//p2 wins
                const p2 = p2points + 1;
                const avatarP1 = document.getElementById('p1')
                const avatarP2 = document.getElementById('p2');
                const aleatoryNumber = Math.round(Math.random() *
                    (p_iori.power.length - 1));

                const src = document.getElementsByTagName('source')[0];
                const audio = document.getElementsByTagName('audio')[0];
                const src1 = document.getElementsByTagName('source')[1];
                const audio1 = document.getElementsByTagName('audio')[1];
                avatarP2.src = p_iori.power[aleatoryNumber].src;
                avatarP1.src = p_kyo.fall.src;


                src.src = p_iori.power[aleatoryNumber].audio_src;
                src1.src = p_kyo.fall.audio_src;
                audio.load();
                audio1.load();

                this.playAudio(this.audioRef);
                this.playAudio(this.audioRef1);

                //avatarP2.src = p_iori.power[Math.round(Math.random() * 3)].src;
                setTimeout(() => {
                    avatarP2.src = p_iori.luta.src;
                    avatarP1.src = p_kyo.luta.src;
                }, p_iori.power[aleatoryNumber].time);
                setTimeout(() => {
                    avatarP1.src = p_kyo.morto.src;
                }, 1000);
                this.setState({ p2points: p2, finalRound: false });
            } else {
                const introducao = document.getElementById('introducao');
                //const conteiner = document.getElementById('animation-conteiner')


                // introducao.src = iori_win;
                // introducao.setAttribute('display', 'flex')
                // introducao.setAttribute('z-index', '12')
                // introducao.style.animation = "none";
                // animation: fadeOut 4.5s linear forwards, changeZIndex 0.1s linear forwards 4.5s;
                const avatarP1 = document.getElementById('p1')
                const avatarP2 = document.getElementById('p2');
                const src = document.getElementsByTagName('source')[0];
                const audio = document.getElementsByTagName('audio')[0];
                const src1 = document.getElementsByTagName('source')[1];
                const audio1 = document.getElementsByTagName('audio')[1];



                avatarP2.src = p_iori.defesa.src;
                avatarP1.src = p_kyo.defesa.src;
                src.src = p_iori.defesa.audio_src;
                src1.src = p_kyo.defesa.audio_src;
                audio.load();
                audio1.load();
                this.playAudio(this.audioRef);
                this.playAudio(this.audioRef1);

                setTimeout(() => {
                    avatarP2.src = p_iori.luta.src;
                    avatarP1.src = p_kyo.luta.src;
                }, 1500);
            }
        }

        return (
            <div id="tela">


                <section id="battle">
                    <div id="animation-conteiner">
                        <img id='introducao' src={introducao} className='introducao' ></img>


                    </div>




                    <div className='placar'> Select a card from the  {actualPlayer ? p1Name : p2Name} <br /> Round {countMoves}
                        <br />
                        {p1ActualPower} x {p2ActualPower}
                        <br />
                        {p1Name}: {p1points} --- {p2Name}:{p2points}
                        <img id='p1' src={kyo} className='p1' ></img>
                        {/* <img id='p1t' src={kyo_p2} className='p1t' ></img> */}
                        <img id='p2' src={iori} className='p2' ></img>
                        {/* <img id='p2t' src={iori_p2} className='p2t' ></img> */}
                    </div>
                    <div>


                        <audio ref={this.audioRef} >
                            <source src={introducaoMP3} type="audio/mpeg" />
                            Seu navegador não suporta elementos de áudio.
                        </audio>

                        <audio ref={this.audioRef1} >
                            <source src={introducaoMP3} type="audio/mpeg" />
                            Seu navegador não suporta elementos de áudio.
                        </audio>
                    </div>


                    <section id="deck" className={actualPlayer ? '' : 'inoperante'} >
                        {cards1}
                    </section>

                    <section id="deck_oponent" className={actualPlayer ? 'inoperante' : ''}  >
                        {cards2}
                    </section>
                </section>
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    p1Name: state.game.p1Name,
    p2Name: state.game.p2Name,
});

export default connect(mapStateToProps)(Game);