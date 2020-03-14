import React from 'react';

import Match from './Match';

const byCompetition = (a, b) => a.competition.id - b.competition.id;

const Matches = ({ matches }) => {
  // const sorted = matches.sort(byCompetition);

  return (
    matches.length > 0 &&
    matches.map(({ id, homeTeam, awayTeam } = {}) => (
      <Match id={id} homeTeam={homeTeam} awayTeam={awayTeam} />
    ))
  );
};

export default Matches;
