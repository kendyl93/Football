import { combineReducers } from 'redux';

import { matchesReducer } from './matches/matchesReducer';

const rootReducer = combineReducers({ matches: matchesReducer });

export default rootReducer;
