import {
  requestCompetitions,
  fetchCompetitionsFinished
} from './competitionsAction';
import { getCompetitionsInTier } from '../../api/competitions';

const fetchApi = (tier = 'TIER_ONE') => async dispatch => {
  dispatch(requestCompetitions({ pending: true }));
  const competitions = await getCompetitionsInTier(tier);

  dispatch(fetchCompetitionsFinished(competitions));
};

export default fetchApi;
