import React from 'react';

import CompetitionMatches from './CompetitionMaches';
import CompetitionHeader from './CompetitionHeader';

const MatchesByCompetitionWidget = ({ matches }) =>
  matches.map(([competitionName, competitionMatches]) => (
    <div key={competitionName} className="competition-matches">
      <CompetitionHeader name={competitionName} />
      {competitionMatches.length > 0 && (
        <CompetitionMatches competitionMatches={competitionMatches} />
      )}
    </div>
  ));

export default MatchesByCompetitionWidget;
