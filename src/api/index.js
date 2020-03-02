import axios from 'axios';

import { API_KEYS } from '../environments/.development';

export const API_ENDPOINT = 'http://api.football-data.org/v2';

const CONFIG = {
  headers: { 'X-Auth-Token': API_KEYS[1] }
};

export const fetchData = endpoint => axios.get(endpoint, CONFIG);
