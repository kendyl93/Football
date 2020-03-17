import _ from 'lodash';

export const groupBy = by => obj =>
  _.chain(obj)
    .groupBy(by)
    .value();
