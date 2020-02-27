import { combineReducers } from 'redux';

import { competitionsReducer } from './competitions/CompetitionsReducers';

const rootReducer = combineReducers({ competitions: competitionsReducer });

export default rootReducer;
