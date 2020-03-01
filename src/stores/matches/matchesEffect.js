import axios from 'axios';

import { requestMatches, fetchMatchesFinished } from './matchesAction';
import { API_KEYS } from '../../environments/.development';

const isoDateWithoutTime = date => {
  const dateISODateWithTime = date.toISOString();
  const indexOfDateTime = dateISODateWithTime.indexOf('T');

  const ISODateWithoutTime = dateISODateWithTime.slice(0, indexOfDateTime);

  return ISODateWithoutTime;
};

const rangeToISOStringWithoutTime = (from = new Date(), to = new Date()) => {
  const fromISODateWithoutTime = isoDateWithoutTime(from);

  if (from === to) {
    return [fromISODateWithoutTime, fromISODateWithoutTime];
  }

  const toISODateWithoutTime = isoDateWithoutTime(to);

  return [fromISODateWithoutTime, toISODateWithoutTime];
};

const getMatchesInDateRange = async (from, to) => {
  try {
    const {
      data: { matches }
    } = await axios.get(
      `http://api.football-data.org/v2/matches/?dateFrom=${from}&dateTo=${to}`,
      {
        headers: { 'X-Auth-Token': API_KEYS[0] }
      }
    );

    return matches;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};

function fetchApi() {
  return async dispatch => {
    dispatch(requestMatches({ pending: true }));

    const [from, to] = rangeToISOStringWithoutTime();
    const matches = await getMatchesInDateRange(from, to);

    dispatch(fetchMatchesFinished(matches));
  };
}

export default fetchApi;
