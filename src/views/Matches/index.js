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

const MatchesView = ({
  fetchMatches,
  matches = [],
  pending,
  sourceDateRange: [sourceFrom, sourceTo] = []
}) => {
  // const [fromState, setFromState] = useState(sourceFrom)
  const [ISOFormatDateRange, setISO] = useState(
    rangeToISOStringWithoutTime(sourceFrom, sourceTo)
  );
  const anyMatches = matches.length > 0;

  useEffect(() => {
    if (
      ISOFormatDateRange !== rangeToISOStringWithoutTime(sourceFrom, sourceTo)
    ) {
      console.log('SMIANA');

      getMatchesByDateRange(rangeToISOStringWithoutTime(sourceFrom, sourceTo))(
        fetchMatches
      );
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
          <DateHeader dateRange={ISOFormatDateRange} />
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
