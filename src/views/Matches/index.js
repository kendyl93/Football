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
import DateHeader from '../DateHeader';

const MatchesView = ({
  fetchMatches,
  matches = [],
  pending,
  sourceDateRange = []
}) => {
  useEffect(() => {
    const [sourceFrom, sourceTo] = sourceDateRange;
    const [from, to] = rangeToISOStringWithoutTime(sourceFrom, sourceTo);
    const anyMatches = matches.length > 0;
    if (!anyMatches) {
      fetchMatches(from, to);
    }
  }, [fetchMatches, matches.length, sourceDateRange]);

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
