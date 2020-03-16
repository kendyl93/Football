import React, { useState } from 'react';

import MatchesView from './views/Matches';
import CompetitionsView from './views/Competitions';
// import './App.scss';

const App = () => {
  return (
    <main className="app row-spacing">
      <h1>Footly</h1>
      <CompetitionsView />
      <MatchesView />
    </main>
  );
};

export default App;
