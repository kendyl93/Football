import React, { useEffect, useState } from 'react';
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
  const [ISOFormatDateRange] = useState(sourceISOFormatDateRange);
  const anyMatches = any(matches);

  useEffect(() => {
    const sourceISOFormatDareRange = rangeToISOStringWithoutTime(
      sourceFrom,
      sourceTo
    );
    const maybeRangeChange = ISOFormatDateRange !== sourceISOFormatDareRange;

    if (maybeRangeChange) {
      getMatchesByDateRange(sourceISOFormatDareRange)(fetchMatches);
    }

    if (anyMatches) {
      return;
    }

    getMatchesByDateRange(ISOFormatDateRange)(fetchMatches);
  }, [ISOFormatDateRange, anyMatches, fetchMatches, sourceFrom, sourceTo]);

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
