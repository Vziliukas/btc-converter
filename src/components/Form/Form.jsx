import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ handleChange }) => (
  <form>
    <div className="form-group">
      <label className="form-check-label" htmlFor="btcInput">
        Insert BTC value
      </label>
        <input type="number" className="form-control" id="btcInput" onChange={handleChange} />
    </div>
  </form>
);

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default Form;
