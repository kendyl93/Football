import React from 'react';
import PropTypes from 'prop-types';

const CompetitionHeader = ({ name }) => <h3>{name}</h3>;

CompetitionHeader.propTypes = {
  name: PropTypes.string
};

export default CompetitionHeader;
