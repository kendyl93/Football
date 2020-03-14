import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import fetchApi from '../../stores/competitions/competitionsEffect';
import {
  getCompetitions,
  getCompetitionsPending
} from '../../stores/competitions/competitionsReducer';
import Competitions from './Competitions';

const CompetitionsView = ({ fetchApi, competitions = [], pending }) => {
  useEffect(() => {
    fetchApi();
  }, [fetchApi]);

  return (
    <div className="product-list-wrapper">
      {pending ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <Competitions competitions={competitions} />
        </div>
      )}
    </div>
  );
};

CompetitionsView.propTypes = {
  fetchApi: PropTypes.func,
  competitions: PropTypes.array,
  pending: PropTypes.bool
};

const mapStateToProps = ({ competitionsData }) => ({
  competitions: getCompetitions(competitionsData),
  pending: getCompetitionsPending(competitionsData)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchApi
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CompetitionsView);
