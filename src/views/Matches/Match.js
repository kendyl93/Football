import React from 'react';
import PropTypes from 'prop-types';

const Match = ({
  id,
  homeTeam: { name: homeTeamName = '' },
  awayTeam: { name: awayTeamName = '' }
}) => (
  <div key={id}>
    <span>{homeTeamName}</span>

    <span> - </span>
    <span>{awayTeamName}</span>
  </div>
);

Match.propTypes = {
  awayTeam: PropTypes.object.isRequired,
  homeTeam: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string
};

export default Match;
