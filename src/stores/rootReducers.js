import { combineReducers } from 'redux';

import { matchesReducer } from './matches/matchesReducer';
import { competitionsReducer } from './competitions/competitionsReducer';

const rootReducer = combineReducers({
  matchesData: matchesReducer,
  competitionsData: competitionsReducer
});

export default rootReducer;
