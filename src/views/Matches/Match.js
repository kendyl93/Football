import React from 'react';
import PropTypes from 'prop-types';

const Match = ({
  homeTeam: { name: homeTeamName = '' },
  awayTeam: { name: awayTeamName = '' }
}) => (
  <div>
    <span>{homeTeamName}</span>
    <span> - </span>
    <span>{awayTeamName}</span>
  </div>
);

Match.propTypes = {
  awayTeam: PropTypes.object.isRequired,
  homeTeam: PropTypes.object.isRequired,
  name: PropTypes.string
};

export default Match;
