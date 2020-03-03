import { requestMatches, fetchMatchesFinished } from './matchesAction';
import { fetchMatchesInDateRange } from '../../api/matches';

const fetchMatches = (from, to) => async dispatch => {
  dispatch(requestMatches({ pending: true }));
  const matches = await fetchMatchesInDateRange(from, to);

  dispatch(fetchMatchesFinished(matches));
};

export default fetchMatches;
