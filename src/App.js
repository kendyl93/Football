import React, { useState } from 'react';

import {, datesEqual } from './utils/date';
import MatchesView from './views/Matches';
// import './App.scss';

const App = () => {
  const today = new Date(new Date().setHours(9, 0, 0, 0));
  const [dateRange, setDateRange] = useState([today, today]);

  const handleToday = () => {
    setDateRange([today, today]);
  };

  const handleDayBack = () => {
    const oneDayBack = new Date(
      dateRange[0].setDate(dateRange[0].getDate() - 1)
    );

    setDateRange([oneDayBack, oneDayBack]);
  };
  const handleDayForward = () => {
    const oneDayForward = new Date(
      dateRange[0].setDate(dateRange[0].getDate() + 1)
    );

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
