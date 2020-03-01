import { REQUEST_MATCHES, REQUEST_MATCHES_FINISHED } from './matchesAction';

const initialState = {
  pending: false,
  matches: []
};

export function matchesReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_MATCHES:
      return {
        ...state,
        pending: true
      };
    case REQUEST_MATCHES_FINISHED:
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
export const getMatchesPending = state => state.pending;
