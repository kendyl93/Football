import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { rangeToISOStringWithoutTime } from '../../utils/date';
import fetchMatches from '../../stores/matches/matchesEffect';
import {
  getMatches,
  getMatchesPending
} from '../../stores/matches/matchesReducer';
import Matches from './Matches';
import { getMatchesByDateRange } from '../../api/matches';
import DateHeader from '../DateHeader';
import { any } from '../../utils/array';

const MatchesView = ({
  fetchMatches,
  matches = [],
  pending,
  sourceDateRange: [sourceFrom, sourceTo] = []
}) => {
  const sourceISOFormatDateRange = rangeToISOStringWithoutTime(
    sourceFrom,
    sourceTo
  );

  useEffect(() => {
    getMatchesByDateRange(sourceISOFormatDateRange)(fetchMatches);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getMatchesByDateRange(sourceISOFormatDateRange)(fetchMatches);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sourceFrom, sourceTo]);

  return (
    <div className="product-list-wrapper">
      {pending ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <DateHeader dateRange={sourceISOFormatDateRange} />
          <Matches matches={matches} />
        </div>
      )}
    </div>
  );
};

MatchesView.propTypes = {
  fetchMatches: PropTypes.func,
  matches: PropTypes.array,
  pending: PropTypes.bool,
  sourceDateRange: PropTypes.array
};

const mapStateToProps = ({ matchesData }) => ({
  matches: getMatches(matchesData),
  pending: getMatchesPending(matchesData)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchMatches
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(MatchesView);
