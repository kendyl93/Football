import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { rangeToISOStringWithoutTime } from '../../utils/date';
import fetchApi from '../../stores/matches/matchesEffect';
import {
  getMatches,
  getMatchesPending
} from '../../stores/matches/matchesReducer';
import Matches from './Matches';
import DateHeader from '../DateHeader';

const MatchesView = ({ fetchApi, matches = [], pending }) => {
  useEffect(() => {
    const [from, to] = rangeToISOStringWithoutTime();
    fetchApi(from, to);
  }, [fetchApi]);

  const dateRange = rangeToISOStringWithoutTime();

  return (
    <div className="product-list-wrapper">
      {pending ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <DateHeader dateRange={dateRange} />
          <Matches matches={matches} />
        </div>
      )}
    </div>
  );
};

MatchesView.propTypes = {
  fetchApi: PropTypes.func,
  matches: PropTypes.array,
  pending: PropTypes.bool
};

const mapStateToProps = ({ matchesData }) => ({
  matches: getMatches(matchesData),
  pending: getMatchesPending(matchesData)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchApi
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(MatchesView);
