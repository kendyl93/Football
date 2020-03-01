import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import fetchApi from '../stores/competitions/CompetitionsEffect';
import {
  getMatches,
  getCompetitionsPending
} from '../stores/competitions/CompetitionsReducers';

class CompetitionsView extends Component {
  componentDidMount() {
    const { fetchApi } = this.props;

    fetchApi();
  }

  render() {
    const { matches, pending } = this.props || {};

    return (
      <div className="product-list-wrapper">
        {pending ? <h1>Loading...</h1> : <h1>done</h1>}
        {matches &&
          matches.matches &&
          matches.matches.map(({ homeTeam, awayTeam } = {}) => (
            <h3>
              <span>{homeTeam.name}</span>

              <span>-</span>
              <span>{awayTeam.name}</span>
            </h3>
          ))}
      </div>
    );
  }
}

CompetitionsView.propTypes = {
  fetchApi: PropTypes.func
};

const mapStateToProps = state => ({
  matches: getMatches(state),
  pending: getCompetitionsPending(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchApi
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CompetitionsView);
