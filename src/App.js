import React, { useState } from 'react';

import { datesEqual } from './utils/date';
import MatchesView from './views/Matches';
// import './App.scss';

const setDayBack = baseDate => baseDate.setDate(baseDate.getDate() - 1);
const setDayForward = baseDate => baseDate.setDate(baseDate.getDate() + 1);

const changeDateAndSetNewRange = (baseDate, setRange) => backOrForward => {
  const changedDate = new Date(backOrForward(baseDate));

  setRange([changedDate, changedDate]);
};

const App = () => {
  const today = new Date(new Date().setHours(9, 0, 0, 0));
  const [dateRange, setDateRange] = useState([today, today]);
  const fromDay = dateRange[0];

  const handlechangeDateAndSetNewRange = changeDateAndSetNewRange(
    fromDay,
    setDateRange
  );

  return (
    <main className="app">
      <h1>Footly</h1>
      <div>
        <button
          type="button"
          onClick={() => handlechangeDateAndSetNewRange(setDayBack)}
        >
          back
        </button>
        <button type="button" onClick={() => setDateRange([today, today])}>
          Today
        </button>
        <button
          type="button"
          onClick={() => handlechangeDateAndSetNewRange(setDayForward)}
          disabled={datesEqual(dateRange[0], today)}
        >
          forward
        </button>
      </div>
      <MatchesView sourceDateRange={dateRange} />
    </main>
  );
};

export default App;
