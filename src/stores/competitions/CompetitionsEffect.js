import axios from 'axios';

import {
  requestCompetitions,
  fetchCompetitionsFinished
} from './CompetitionsAction';
import { API_KEYS } from '../../environments/.development';

function fetchApi() {
  return async dispatch => {
    dispatch(requestCompetitions({ pending: true }));

    try {
      const { data } = await axios.get(
        'http://api.football-data.org/v2/matches/?dateFrom=2020-03-01&dateTo=2020-03-01',
        {
          headers: { 'X-Auth-Token': API_KEYS[0] }
        }
      );

      console.log({ data });
      dispatch(fetchCompetitionsFinished(data.matches));

      return data;
    } catch (error) {
      console.error(error);
    }
  };
}

export default fetchApi;
