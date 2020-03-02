import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import fetchApi from '../../stores/matches/matchesEffect';
import {
  getMatches,
  getMatchesPending
} from '../../stores/matches/matchesReducer';
import Matches from './Matches';

const MatchesView = ({ fetchApi, matches = [], pending }) => {
  useEffect(() => {
    fetchApi();
  }, [fetchApi]);

  return (
    <div className="product-list-wrapper">
      {pending ? <h1>Loading...</h1> : <Matches matches={matches} />}
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
