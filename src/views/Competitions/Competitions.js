import React from 'react';
import PropTypes from 'prop-types';

import Competition from './Competition';

import './competitions.scss';

const Competitions = ({ competitions }) => (
  <div className="competitions-wrapper">
    {competitions.length > 0 &&
      competitions.map(({ id, name } = {}) => (
        <Competition key={id} name={name} />
      ))}
  </div>
);

Competitions.propTypes = {
  competitions: PropTypes.array
};

export default Competitions;
