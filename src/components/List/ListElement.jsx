import React from 'react';
import PropTypes from 'prop-types';
import currencyFormatter from 'currency-formatter';

const ListElement = ({
  value, code, onClick, rate,
}) => (
  <li className="list-group-item">
    {code} {value && currencyFormatter.format(value * rate, { code })}
      <button type="button" className="close" aria-label="Close" onClick={onClick}>
        <span aria-hidden="true">&times;</span>
      </button>
  </li>
);

ListElement.propTypes = {
  value: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ListElement;
