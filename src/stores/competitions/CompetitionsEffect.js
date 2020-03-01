import axios from 'axios';

import {
  requestCompetitions,
  fetchCompetitionsFinished
} from './CompetitionsAction';
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

function fetchApi() {
  return async dispatch => {
    dispatch(requestCompetitions({ pending: true }));
    const [from, to] = rangeToISOStringWithoutTime();

    try {
      const { data } = await axios.get(
        `http://api.football-data.org/v2/matches/?dateFrom=${from}&dateTo=${to}`,
        {
          headers: { 'X-Auth-Token': API_KEYS[0] }
        }
      );

      dispatch(fetchCompetitionsFinished(data.matches));

      return data;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };
}

export default fetchApi;
