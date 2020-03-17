import React from 'react';

import Match from './Match';

import './Matches.scss';

const Matches = ({ matches }) => {
  console.log({ eeee: matches });
  console.log({ EEEEE: Object.entries(matches) });

  return Object.entries(matches).map(([key, competitionMatches]) => {
    console.log('******************');
    return (
      <div className="competition-matches">
        <h3>{key}</h3>
        {competitionMatches.length > 0 &&
          competitionMatches.map(({ id, homeTeam, awayTeam } = {}) => {
            console.log({ competitionMatches });
            return <Match id={id} homeTeam={homeTeam} awayTeam={awayTeam} />;
          })}
      </div>
    );
  });
};

export default Matches;
