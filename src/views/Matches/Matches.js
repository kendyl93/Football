import React from 'react';

import Match from './Match';
import { any } from '../../utils/array';

const Matches = ({ matches }) =>
  any(matches) &&
  matches.map(({ id, homeTeam, awayTeam } = {}) => (
    <Match key={id} homeTeam={homeTeam} awayTeam={awayTeam} />
  ));

export default Matches;
