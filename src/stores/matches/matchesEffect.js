import { requestMatches, fetchMatchesFinished } from './matchesAction';
import { getMatchesInDateRange } from '../../api/matches';

const fetchMatches = (from, to) => async dispatch => {
  dispatch(requestMatches({ pending: true }));
  const matches = await getMatchesInDateRange(from, to);

  dispatch(fetchMatchesFinished(matches));
};

export default fetchMatches;
