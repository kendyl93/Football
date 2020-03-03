import React, { useState } from 'react';

import { datesEqual } from './utils/date';
import MatchesView from './views/Matches';
// import './App.scss';

const setDayBack = baseDate => baseDate.setDate(baseDate.getDate() - 1);
const setDayForward = baseDate => baseDate.setDate(baseDate.getDate() + 1);

const App = () => {
  const today = new Date(new Date().setHours(9, 0, 0, 0));
  const [dateRange, setDateRange] = useState([today, today]);
  const fromDay = dateRange[0];

  const handleToday = () => {
    setDateRange([today, today]);
  };

  const handleDayBack = () => {
    const oneDayBack = new Date(setDayBack(fromDay));

    setDateRange([oneDayBack, oneDayBack]);
  };
  const handleDayForward = () => {
    const oneDayForward = new Date(setDayForward(fromDay));

    setDateRange([oneDayForward, oneDayForward]);
  };

  return (
    <main className="app">
      <h1>Footly</h1>
      <div>
        <button type="button" onClick={() => handleDayBack()}>
          back
        </button>
        <button type="button" onClick={() => handleToday()}>
          Today
        </button>
        <button
          type="button"
          onClick={() => handleDayForward()}
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
