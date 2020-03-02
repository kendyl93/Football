import React from 'react';

import Match from './Match';

const Matches = ({ matches }) =>
  matches &&
  matches.map(({ id, homeTeam, awayTeam } = {}) => (
    <Match key={id} homeTeam={homeTeam} awayTeam={awayTeam} />
  ));

export default Matches;
