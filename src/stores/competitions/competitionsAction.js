export const REQUEST_COMPETITIONS = 'REQUEST_COMPETITIONS';
export const REQUEST_COMPETITIONS_FINISHED = 'REQUEST_COMPETITIONS_FINISHED';

export function requestCompetitions() {
  return {
    type: REQUEST_COMPETITIONS
  };
}

export function fetchCompetitionsFinished(competitions) {
  return {
    type: REQUEST_COMPETITIONS_FINISHED,
    competitions
  };
}
