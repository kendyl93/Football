import { requestMatches, fetchMatchesFinished } from './matchesAction';
import { getMatchesInDateRange } from '../../api/matches';
import { rangeToISOStringWithoutTime } from '../../utils/date';

const fetchApi = () => async dispatch => {
  dispatch(requestMatches({ pending: true }));

  const [from, to] = rangeToISOStringWithoutTime();
  const matches = await getMatchesInDateRange(from, to);

  dispatch(fetchMatchesFinished(matches));
};

export default fetchApi;
