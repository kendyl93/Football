import React from 'react';
import PropTypes from 'prop-types';

const DateHeader = ({ dateRange }) => {
  const [from, to] = dateRange;
  const fromDate = new Date(from);
  const toDate = new Date(to);
  const theSameDates = fromDate === toDate;

  if (theSameDates) {
    return <h2>{from}</h2>;
  }

  return (
    <h2>
      {from}
      <span> - </span>

      {to}
    </h2>
  );
};

DateHeader.propTypes = {
  dateRange: PropTypes.array
};

export default DateHeader;
