import React, { useState } from 'react';

import MatchesView from './views/Matches';
// import './App.scss';

const App = () => {
  const today = new Date();
  const [dateRange, setDateRange] = useState([today, today]);

  const handleYesterday = () => {
    const yesterday = new Date(today.setDate(today.getDate() - 2));
    setDateRange([yesterday, yesterday]);
  };

  const handleToday = () => {
    setDateRange([today, today]);
  };

  return (
    <main className="app">
      <h1>Footly</h1>
      <div>
        <button type="button" onClick={() => handleYesterday()}>
          Yesterday
        </button>
        <button type="button" onClick={() => handleToday()}>
          Today
        </button>
        <button type="button">Tomorrow</button>
      </div>
      <MatchesView sourceDateRange={dateRange} />
    </main>
  );
};

export default App;
