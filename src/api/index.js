import axios from 'axios';

import { API_KEYS } from '../environments/.development';

const API_ENDPOINT = 'http://api.football-data.org/v2';
const MATCHES = 'matches';

export const MATCHES_ENDPOINT = `${API_ENDPOINT}/${MATCHES}`;

const CONFIG = {
  headers: { 'X-Auth-Token': API_KEYS[0] }
};

export const fetchData = endpoint => axios.get(endpoint, CONFIG);

export const getMatchesInDateRange = async (from, to) => {
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
