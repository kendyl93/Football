import {
  REQUEST_COMPETITIONS,
  REQUEST_COMPETITIONS_FINISHED
} from './CompetitionsAction';

const initialState = {
  pending: false,
  competitions: []
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
        competitions: action.payload
      };
    default:
      return state;
  }
}

export const getCompetitions = state => state.competitions;
export const getCompetitionsPending = state => state.pending;
