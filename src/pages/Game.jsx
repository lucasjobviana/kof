import React, { Component } from 'react';
import Card from '../components/Card';
import { newShuffledDeck } from '../teste';
import { connect } from 'react-redux';
import introducao from '../img/introducao3.gif';
import introducaoMP3 from '../img/introducao.mp3';
import kyo from '../chars/kyo';
import iori from '../chars/iori';
import Char from '../chars/Char';


class Game extends Component {
    constructor(props) {
        super(props);
        const deck1 = newShuffledDeck();
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
            attrEscolhido: 'attr1',
            actionP1: kyo.luta.src,
            actionP2: iori.luta.src,
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

        setTimeout(() => {
            document.removeEventListener('click', this.handlePlay);
        }, 11000);
    }

    handlePlay = () => {
        this.playAudio(this.audioRef);
    }

    changePlayer = (p1ActualPower, p2ActualPower, attr) => {
        let { actualPlayer, countMoves} = this.state;
        const count = !actualPlayer ? countMoves + 1 : countMoves;
        const battle = document.querySelectorAll('.card');
        battle.forEach((c) => { c.classList.remove('inoperante') });
        let finalRound = false; /////aqui
        if (count !== countMoves) {
            finalRound = true;

        }

        this.setState({
            actualPlayer: !actualPlayer,
            p1ActualPower,
            p2ActualPower,
             
            finalRound,
            attrEscolhido: attr,
            countMoves: count
        })
    }

    esperarSelecaoPoder = (card) => {
        const battle = document.querySelectorAll('.card');
        battle.forEach((c) => { c.classList.add('inoperante') })
        card.classList.remove('inoperante');
    }

    onClickCard = ({ target }) => {
        const { p1ActualPower, p2ActualPower, attrEscolhido } = this.state;
        if (target.tagName === 'DIV') {
            const card = target.parentNode;
            card.classList.add('girar');
            const deck = target.parentNode.parentNode.parentNode.id;
            if (deck === 'deck') {
                this.esperarSelecaoPoder(card);
            } else {
                console.log(card.firstChild.getElementsByClassName(attrEscolhido)[0].innerText.substring(5));
                card.firstChild.getElementsByClassName(attrEscolhido)[0].click();
            }
        } else {
            const power = target.innerText.substring(5);
            const attr = target.classList.value;
            const deck = target.parentNode.parentNode.parentNode.parentNode.parentNode.id;
            deck === 'deck' ? this.changePlayer(power, p2ActualPower, attr) : this.changePlayer(p1ActualPower, power, attr)
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
            }
        } else {
            if (this.canPlayKyo) {
                ref.current.play();
                this.canPlayKyo = false;
            }
        }
    }

    render() {
        const { actualPlayer, countMoves, p1ActualPower, p2ActualPower, p1points, p2points, deck1, deck2, finalRound, actionP1, actionP2 } = this.state;
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

        if (finalRound) {
            const disabledElements = document.querySelectorAll('.girar');//
            disabledElements.forEach((e) => e.classList.add('disabled'));

            if (p1ActualPower > p2ActualPower) {//p1 wins
                const p1 = p1points + 1;
                const avatarP1 = document.getElementById('p1');
                const avatarP2 = document.getElementById('p2');
                const aleatoryNumber = Math.round(Math.random() * (kyo.power.length - 1));
                const src = document.getElementsByTagName('source')[1];
                const audio = document.getElementsByTagName('audio')[1];
                const src0 = document.getElementsByTagName('source')[0];
                const audio0 = document.getElementsByTagName('audio')[0];
                
                avatarP1.src = kyo.power[aleatoryNumber].src;
                avatarP2.src = iori.fall.src;


                src.src = kyo.power[aleatoryNumber].audio_src;
                src0.src = iori.fall.audio_src;
                audio.load();
                audio0.load();
                this.playAudio(this.audioRef1);
                this.playAudio(this.audioRef);

                
                
                
                setTimeout(() => {            ///////////////voltar
                    avatarP1.src = kyo.luta.src;
                    avatarP2.src = iori.luta.src;
                }, kyo.power[aleatoryNumber].time);
                setTimeout(() => {
                    avatarP2.src = iori.morto.src;
                }, 1000);

               

                this.setState({ 
                    p1points: p1, 
                    finalRound: false,
                    
                  
                    // actionP1: kyo.power[0].src,
                    // actionP2: iori.fall.src
                });//aquiiiiiii

               

            } else if (p1ActualPower < p2ActualPower) {//p2 wins
                const p2 = p2points + 1;
                const avatarP1 = document.getElementById('p1')
                const avatarP2 = document.getElementById('p2');
                const aleatoryNumber = Math.round(Math.random() *
                    (iori.power.length - 1));

                const src = document.getElementsByTagName('source')[0];
                const audio = document.getElementsByTagName('audio')[0];
                const src1 = document.getElementsByTagName('source')[1];
                const audio1 = document.getElementsByTagName('audio')[1];
                avatarP2.src = iori.power[aleatoryNumber].src;
                avatarP1.src = kyo.fall.src;


                src.src = iori.power[aleatoryNumber].audio_src;
                src1.src = kyo.fall.audio_src;
                audio.load();
                audio1.load();

                this.playAudio(this.audioRef);
                this.playAudio(this.audioRef1);

                
                setTimeout(() => {
                    avatarP2.src = iori.luta.src;
                    avatarP1.src = kyo.luta.src;
                }, iori.power[aleatoryNumber].time);
                setTimeout(() => {
                    avatarP1.src = kyo.morto.src;
                }, 1000);
                this.setState({ p2points: p2, finalRound: false });////aquiiiii
            } else {
                const introducao = document.getElementById('introducao');
             
                const avatarP1 = document.getElementById('p1')
                const avatarP2 = document.getElementById('p2');
                const src = document.getElementsByTagName('source')[0];
                const audio = document.getElementsByTagName('audio')[0];
                const src1 = document.getElementsByTagName('source')[1];
                const audio1 = document.getElementsByTagName('audio')[1];



                avatarP2.src = iori.defesa.src;
                avatarP1.src = kyo.defesa.src;
                src.src = iori.defesa.audio_src;
                src1.src = kyo.defesa.audio_src;
                audio.load();
                audio1.load();
                this.playAudio(this.audioRef);
                this.playAudio(this.audioRef1);

                setTimeout(() => {
                    avatarP2.src = iori.luta.src;
                    avatarP1.src = kyo.luta.src;
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
                        <Char action= { actionP1 } orderPlayer="p1" />
                        <Char action= { actionP2 } orderPlayer="p2" />
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