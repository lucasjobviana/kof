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
    this.state = {
      deck1: newShuffledDeck(),
      deck2: newShuffledDeck()
    }
  }

  onClickCard = ({ target }) => {
     
    if (target.tagName === 'DIV') {
        const card = target.parentNode;
        card.classList.add('girar');
        const deck = target.parentNode.parentNode.parentNode.id;
        if (deck === 'deck') {
            //this.esperarSelecaoPoder(card);
        } else {
           // console.log(card.firstChild.getElementsByClassName(attrEscolhido)[0].innerText.substring(5));
            //card.firstChild.getElementsByClassName(attrEscolhido)[0].click();
        }
    } else {
        const power = target.innerText.substring(5);
        const attr = target.classList.value;
        const deck = target.parentNode.parentNode.parentNode.parentNode.parentNode.id;
       // deck === 'deck' ? this.changePlayer(power, p2ActualPower, attr) : this.changePlayer//(p1ActualPower, power, attr)
    }
  }

  mapDeckToDeckElement = (deck) => {
    const deckElement = deck.map((card, ord) => (
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
    return deckElement;
  }

  render() {
    const { deck1, deck2 } = this.state;
    const playerDeckElement = this.mapDeckToDeckElement(deck1);
    const oponentDeckElement = this.mapDeckToDeckElement(deck2);
     
    return (
      <div id='battle'>
        <div id="deck">{ playerDeckElement }</div> 
        <div id="deck_oponent">{ oponentDeckElement }</div>
      </div>)
  }

}

export default Game;