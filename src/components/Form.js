import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Form extends Component {
  render () {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      onInputChange,
      onSaveButtonClick,
      hasTrunfo
      // isSaveButtonDisabled,
    } = this.props
    const { isSaveButtonDisabled } = this.props

    let hasTrunfoMsg = 'Super Trunfo'
    let inputSuper = ''
    if (hasTrunfo) {
      hasTrunfoMsg = 'Você já tem um Super Trunfo em seu baralho'
    } else {
      inputSuper = (<input
        name="cardTrunfo"
        data-testid="trunfo-input"
        onChange={onInputChange}
        type="checkbox"
        id="ipt-trunfo"
        checked={cardTrunfo}
      />)
    }

    return (
      <form>
        <h1>Olá, mundo!</h1>
        <label htmlFor="ipt-name">
          Nome:
          <input
            type="text"
            name="cardName"
            onChange={onInputChange}
            data-testid="name-input"
            id="ipt-name"
            value={cardName}
          />
        </label>
        <label htmlFor="ipt-descrition">
          Descrição:
          <input
            type="text"
            name="cardDescription"
            onChange={onInputChange}
            data-testid="description-input"
            id="ipt-descrition"
            value={cardDescription}
          />
        </label>
        <label htmlFor="ipt-atk">
          Força de Ataque:
          <input
            min="0"
            max="90"
            type="number"
            name="cardAttr1"
            onChange={onInputChange}
            data-testid="attr1-input"
            id="ipt-atk"
            value={cardAttr1}
          />
        </label>
        <label htmlFor="ipt-dfs">
          Força de Defesa:
          <input
            min="0"
            max="90"
            name="cardAttr2"
            type="number"
            onChange={onInputChange}
            data-testid="attr2-input"
            id="ipt-dfs"
            value={cardAttr2}
          />
        </label>
        <label htmlFor="ipt-vlc">
          Velocidade:
          <input
            min="0"
            max="90"
            type="number"
            name="cardAttr3"
            onChange={onInputChange}
            data-testid="attr3-input"
            id="ipt-vlc"
            value={cardAttr3}
          />
        </label>
        <label htmlFor="ipt-src-img">
          Imagem:
          <input
            name="cardImage"
            type="text"
            onChange={onInputChange}
            data-testid="image-input"
            id="ipt-src-img"
            value={cardImage}

          />
        </label>
        <label htmlFor="slc-tipo">
          Tipo:
          <select
            onChange={onInputChange}
            value={cardRare}
            data-testid="rare-input"
            name="cardRare"
            id="slc-tipo"

          >
            <option value="Normal Figther">Normal Fighter</option>
            <option value="Supernatural Figther">Supernatural Fighter</option>
            <option value="Divine">Divine</option>
          </select>
        </label>
        <label htmlFor="ipt-trunfo">
          {hasTrunfoMsg}
          {inputSuper}
        </label>
        <button
          data-testid="save-button"
          onClick={onSaveButtonClick}
          disabled={isSaveButtonDisabled}
        >

          Salvar

        </button>

      </form>
    )
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired
}
export default Form
