import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  filterCard = (event) => {
    const { filterCards } = this.props;
    filterCards(event, 'cardRare');
  };

  filterTrunfo = (event) => {
    const { filterCards } = this.props;
    console.log('estou chamando minha função filterTrunfo');
    console.log(event);
    console.log(event.target.checked);
    const filters = document.querySelectorAll('.filter');

    filters.forEach((filter) => {
      filter.disabled = !!event.target.checked;
    });

    filterCards(event, 'cardTrunfo');
  };

  render() {
    const { filterCards } = this.props;

    return (
      <div id="filters">
        <form action="">
          <input
            id="filterName"
            className="filter"
            type="text"
            data-testid="name-filter"
            onInput={ filterCards }
          />
          <select
            className="filter"
            onInput={ this.filterCard }
            data-testid="rare-filter"
          >
            <option value="all">todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>

          <label htmlFor="trunfoFileter">
            Super Trunfo
            <input
              type="checkbox"
              id="trunfoFilter"
              data-testid="trunfo-filter"
              onInput={ this.filterTrunfo }
            />
          </label>
        </form>
      </div>
    );
  }
}

Filter.propTypes = {
  filterCards: PropTypes.func.isRequired,
  // cardVisible: PropTypes.bool.isRequired,
};

export default Filter;
/*
<div id="filters">
<form>
  <input
    id="filterName"
    className="filter"
    type="text"
    data-testid="name-filter"
    onInput={ this.filterCards }
  />
  <select
    className="filter"
    onInput={ this.filterCard }
    data-testid="rare-filter"

  >
    <option value="all">todas</option>
    <option value="normal">normal</option>
    <option value="raro">raro</option>
    <option value="muito raro">muito raro</option>
  </select>
  <label htmlFor="trunfoFileter">
    Super Trunfo
    <input
      type="checkbox"
      id="trunfoFilter"
      data-testid="trunfo-filter"
      onInput={ this.filterTrunfo }
    />
  </label>

</form>
</div>
*/
