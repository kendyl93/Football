import React from 'react';
import PropTypes from 'prop-types';

const Match = ({
  key,
  homeTeam: { name: homeTeamName },
  awayTeam: { name: awayTeamName }
}) => (
  <div key={key}>
    <span>{homeTeamName}</span>

    <span> - </span>
    <span>{awayTeamName}</span>
  </div>
);

Match.propTypes = {
  awayTeam: PropTypes.object.isRequired,
  homeTeam: PropTypes.object.isRequired,
  key: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};

export default Match;
