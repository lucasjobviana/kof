import React, { Component } from 'react';
import Card from '../components/Card';
import { connect } from 'react-redux';

class Deck extends Component {
  constructor(props){
    super(props);
  }


changePlayer = (p1ActualPower, p2ActualPower, attr) => {
        const { actualPlayer, countMoves, dispatch } = this.props;
        const count = !actualPlayer ? countMoves + 1 : countMoves;
        const battle = document.querySelectorAll('.card');
        battle.forEach((c) => { c.classList.remove('inoperante') });
        let finalRound = false;
        if (count !== countMoves) {
            finalRound = true;
        }

        dispatch({type:'TESTE',payLoad:{
            actualPlayer: !actualPlayer,
            p1ActualPower,
            p2ActualPower,
            finalRound,
            attrEscolhido: attr,
            countMoves: count
        }})

				
 
    }
    
    
  esperarSelecaoPoder = (card) => {
		const battle = document.querySelectorAll('.card');
		battle.forEach((c) => { c.classList.add('inoperante') })
		card.classList.remove('inoperante');
  }

  onClickCard = ({ target }) => {
     const { p1ActualPower, p2ActualPower } = this.props;
     console.log(target)
      
     if (target.tagName === 'DIV') {
         const card = target.parentNode;
         card.classList.add('girar');
         const deck = target.parentNode.parentNode.parentNode.id;
         
         
         if (deck === 'deck') {
             this.esperarSelecaoPoder(card);
             target.style.display = 'none';
         } else {
            // console.log(card.firstChild.getElementsByClassName(attrEscolhido)[0].innerText.substring(5));
             //card.firstChild.getElementsByClassName(attrEscolhido)[0].click();
         }
     } else {
         const power = target.innerText.substring(5);
         const attr = target.classList.value;
         const deckId = target.parentNode.parentNode.parentNode.parentNode.parentNode.id;
         console.log(deckId);
         console.log(target)
         deckId === 'deck' ? this.changePlayer(power, p2ActualPower, attr) : this.changePlayer(power, p1ActualPower, attr);
         
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
                onClickCard= { this.onClickCard }
            />
        </div>
    ));
    return deckElement;
  }

  render() {
    const { id, p1Cards, p2Cards } = this.props;
    const deckElement = id === 'deck' ? this.mapDeckToDeckElement(p1Cards) : this.mapDeckToDeckElement(p2Cards);
    
    return (
        <div id={id}> { deckElement } </div>   
    )
  }
}

const mapStateToProps = (state) => ({
    p1Cards: state.deck.P1_cards,
    p2Cards: state.deck.P2_cards,
    actualPlayer: state.game.actualPlayer,
    p1ActualPower: state.game.p1ActualPower,
    p2ActualPower: state.game.p2ActualPower,
    countMoves: state.game.countMoves,
    
  });

export default connect(mapStateToProps)(Deck);
