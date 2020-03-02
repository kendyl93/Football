import React from 'react';

import Match from './Match';

const Matches = ({ matches }) =>
  matches.length > 0 &&
  matches.map(({ id, homeTeam, awayTeam } = {}) => (
    <Match id={id} homeTeam={homeTeam} awayTeam={awayTeam} />
  ));

export default Matches;
