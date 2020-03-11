import { fetchData, API_ENDPOINT } from './index';

const MATCHES = 'matches';
const MATCHES_ENDPOINT = `${API_ENDPOINT}/${MATCHES}`;

export const fetchMatchesInDateRange = async (from, to) => {
  try {
    const query = `?dateFrom=${from}&dateTo=${to}`;
    const endpoint = `${MATCHES_ENDPOINT}/${query}`;
    const {
      data: { matches }
    } = await fetchData(endpoint);

    return matches;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};

export const getMatchesByDateRange = ISOFormatDateRange => fetchMatchesCallback => {
  const [ISOFrom, ISOTo] = ISOFormatDateRange;
  fetchMatchesCallback(ISOFrom, ISOTo);
};
