import React from 'react';
import PropTypes from 'prop-types';

import MatchesByCompetitionWidget from './byCompetitions';

const Matches = ({ matches }) => {
  const competitionNameWithMatches = Object.entries(matches);

  return <MatchesByCompetitionWidget matches={competitionNameWithMatches} />;
};

Matches.propTypes = {
  matches: PropTypes.object
};

export default Matches;
