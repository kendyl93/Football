import {
  REQUEST_COMPETITIONS,
  REQUEST_COMPETITIONS_FINISHED
} from './CompetitionsAction';

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
        matches: action.matches
      };
    default:
      return state;
  }
}

export const getMatches = state => state.matches;
export const getCompetitionsPending = state => state.pending;
