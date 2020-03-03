import React from 'react';

import MatchesView from './views/Matches';
// import './App.scss';

const App = () => {
  return (
    <main className="app">
      <h1>Footly</h1>
      <div>
        <button type="button">Yesterday</button>
        <button type="button">Today</button>
        <button type="button">Tomorrow</button>
      </div>
      <MatchesView />
    </main>
  );
};

export default App;
