import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addClickedCard } from '../redux/actions';

class Card extends Component {
	constructor(props){
		super(props);
	}
	
	selectCard = (element) => {
	console.log(element)
	console.log(element.target.parentNode)
		const { dispatch } = this.props;
		dispatch(addClickedCard({player:element.target.parentNode.parentNode.parentNode.id,card:element.target.parentNode}));
	}
	
	selectPower = () => {
 
	}
	
	handleClick = (element) => {
		switch(element.target.tagName){
			case 'DIV': this.selectCard(element); break;
			case 'LABEL': this.selectPower(element); break; 
			default: console.log('default no handleClick de Card');
		}
	}
	
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      //cardVisible,
      isView,
      onClickCard,
    } = this.props;

    const view = isView ? 'card view' : 'card';

    const tElement = cardTrunfo
      ? <span data-testid="trunfo-card">Super Trunfo</span>
      : '';

    return (
      <div className={view + ' card'} onClick={this.handleClick}>
        <div className='front'>
          <h1>{cardName}</h1>
          <img src={cardImage} alt={cardName} data-testid="image-card" />
          <h5 className="descrition">{cardDescription}</h5>

          <label className="type"><span>{cardRare}</span></label>

          <div className="poderes">
            <label className="attr1">怒り - {cardAttr1}</label>
            <label className="attr2">怒り - {cardAttr2}</label>
            <label className="attr3">特別 - {cardAttr3}</label>
            <label className="attr4">魔法 - {cardAttr2}</label>
          </div>

          {tElement}
        </div>
        <div className='back'></div>



      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isView: PropTypes.bool.isRequired,
  // cardVisible: PropTypes.bool.isRequired,
};

export default connect()(Card);
