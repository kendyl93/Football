import { fetchData, API_ENDPOINT } from './index';

const COMPETITIONS = 'competitions';
const COMPETITIONS_ENDPOINT = `${API_ENDPOINT}/${COMPETITIONS}`;

export const getCompetitionsInTier = async tier => {
  try {
    const query = `?plan=${tier}`;
    const endpoint = `${COMPETITIONS_ENDPOINT}/${query}`;
    const {
      data: { competitions }
    } = await fetchData(endpoint);

    return competitions;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};
