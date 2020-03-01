import { combineReducers } from 'redux';

import { competitionsReducer } from './competitions/CompetitionsReducers';

const rootReducer = combineReducers({ matches: competitionsReducer });

export default rootReducer;
