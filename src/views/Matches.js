import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import fetchApi from '../stores/matches/matchesEffect';
import {
  getMatches,
  getMatchesPending
} from '../stores/matches/matchesReducer';

class MatchesView extends Component {
  componentDidMount() {
    const { fetchApi } = this.props;

    fetchApi();
  }

  render() {
    const { matches: { matches = [], pending } = {} } = this.props || {};

    return (
      <div className="product-list-wrapper">
        {pending ? <h1>Loading...</h1> : <h1>done</h1>}
        {matches.map(({ homeTeam, awayTeam } = {}) => (
          <div>
            <span>{homeTeam.name}</span>

            <span>-</span>
            <span>{awayTeam.name}</span>
          </div>
        ))}
      </div>
    );
  }
}

MatchesView.propTypes = {
  fetchApi: PropTypes.func
};

const mapStateToProps = state => ({
  matches: getMatches(state),
  pending: getMatchesPending(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchApi
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(MatchesView);
