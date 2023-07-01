import React, { Component } from 'react';
import Card from '../components/Card';
import { connect } from 'react-redux';

class Deck extends Component {
  constructor(props){
    super(props);
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
