export const REQUEST_MATCHES = 'REQUEST_MATCHES';
export const REQUEST_MATCHES_FINISHED = 'REQUEST_MATCHES_FINISHED';

export function requestMatches() {
  return {
    type: REQUEST_MATCHES
  };
}

export function fetchMatchesFinished(matches) {
  return {
    type: REQUEST_MATCHES_FINISHED,
    matches
  };
}
