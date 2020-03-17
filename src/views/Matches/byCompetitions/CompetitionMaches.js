import React from 'react';

import Match from '../Match';

const CompetitionMatches = ({ competitionMatches }) =>
  competitionMatches.map(({ id, homeTeam, awayTeam } = {}) => (
    <Match id={id} homeTeam={homeTeam} awayTeam={awayTeam} />
  ));

export default CompetitionMatches;
