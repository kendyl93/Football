import React from 'react';

import CompetitionMatches from './CompetitionMaches';
import CompetitionHeader from './CompetitionHeader';
import { trimAllSpaces } from '../../../utils/string';

const MatchesByCompetitionWidget = ({ matches }) =>
  matches.map(([competitionName, competitionMatches]) => {
    const competitionIdAsString = trimAllSpaces(competitionName);

    return (
      <div key={competitionIdAsString} className="competition-matches">
        <CompetitionHeader name={competitionName} />
        {competitionMatches.length > 0 && (
          <CompetitionMatches competitionMatches={competitionMatches} />
        )}
      </div>
    );
  });

export default MatchesByCompetitionWidget;
