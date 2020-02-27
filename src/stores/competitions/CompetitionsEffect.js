import {
  requestCompetitions,
  fetchCompetitionsFinished
} from './CompetitionsAction';
// eslint-disable-next-line import/extensions
import { API_KEYS } from '../../environments/.development.js';

function fetchApi() {
  return dispatch => {
    dispatch(requestCompetitions());
    fetch('http://api.football-data.org/v2/competitions', {
      headers: { 'X-Auth-Token': API_KEYS[0] }
    })
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchCompetitionsFinished(res));

        return res.competitions;
      })
      .catch(error => {
        console.error(error);
        // dispatch(fetchApiError(error));
      });
  };
}

export default fetchApi;
