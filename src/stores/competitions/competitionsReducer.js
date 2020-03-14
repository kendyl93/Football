import {
  REQUEST_COMPETITIONS,
  REQUEST_COMPETITIONS_FINISHED
} from './competitionsAction';

const initialState = {
  pending: false,
  matches: []
};

export function competitionsReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_COMPETITIONS:
      return {
        ...state,
        pending: true
      };
    case REQUEST_COMPETITIONS_FINISHED:
      return {
        ...state,
        pending: false,
        competitions: action.competitions
      };
    default:
      return state;
  }
}

export const getCompetitions = state => state.competitions;
export const getCompetitionsPending = state => state.pending;
