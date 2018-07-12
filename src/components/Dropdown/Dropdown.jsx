import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ onClick, currencies }) => (
  <div className="dropdown">
    <button
      className="btn btn-primary dropdown-toggle"
      type="button"
      id="dropdownMenuButton"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      Select Currency
    </button>
      <div className="dropdown-menu">
        {currencies.map(({ code }, i) => (
          <button className="dropdown-item" onClick={() => onClick(code)} key={i}>
            {code}
          </button>
      ))}
      </div>
  </div>
);

Dropdown.propTypes = {
  onClick: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Dropdown;
