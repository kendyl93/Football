import React from 'react';
import PropTypes from 'prop-types';

import './competition.scss';

const Competition = ({ id, name }) => (
  <div className="competition" key={id}>
    {name}
  </div>
);

Competition.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string
};

export default Competition;
