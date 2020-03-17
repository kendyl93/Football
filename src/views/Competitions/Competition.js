import React from 'react';
import PropTypes from 'prop-types';

import './competition.scss';

const Competition = ({ name }) => <div className="competition">{name}</div>;

Competition.propTypes = {
  name: PropTypes.string
};

export default Competition;
