import { combineReducers } from 'redux';

import { matchesReducer } from './matches/matchesReducer';

const rootReducer = combineReducers({ matchesData: matchesReducer });

export default rootReducer;
