import React from 'react';
import PropTypes from 'prop-types';
import ListElement from './ListElement';

const List = ({ bpi, onClick, input }) => {
  const filteredBpi = bpi.filter(val => val.show);

  return (
    <ul className="list-group list-group-flush mt-2">
      {filteredBpi.map(({ code, rate_float }, i) => (
        <ListElement
          key={i}
          value={input}
          rate={rate_float}
          code={code}
          onClick={() => onClick(code)}
        />
      ))}
    </ul>
  );
};

List.propTypes = {
  bpi: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
  input: PropTypes.string,
};

export default List;
