import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import fetchApi from '../stores/competitions/CompetitionsEffect';
import {
  getCompetitions,
  getCompetitionsPending
} from '../stores/competitions/CompetitionsReducers';

class CompetitionsView extends Component {
  componentDidMount() {
    const { fetchApi } = this.props;
    fetchApi();
  }

  //   shouldComponentRender() {
  //     const { pending } = this.props;
  //     if (this.pending === false) return false;
  //     // more tests
  //     return true;
  //   }

  render() {
    const { competitions, pending } = this.props;

    return (
      <div className="product-list-wrapper">
        {pending ? <h1>Loading...</h1> : <h1>done</h1>}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  competitions: getCompetitions(state),
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
