
import { isEmpty, keys } from 'lodash';
import moment from 'moment';

export const notEmpty = (message) => (value) => {
  if (isEmpty(value)) {
    return message;
  }
  return undefined;
};

export const isInFuture = (message = 'Date must be in future') => (value) => {
  if (!moment(value).isAfter(moment())) {
    return message;
  }
  return undefined;
};

const rules = {
  PackageID: [notEmpty('PackageId cannot be empty')],
  Date: [isInFuture()],
};

export default (rows) => {
  const result = {};
  /* eslint-disable */
  rows.map((row, rowIndex) => {
    keys(rules).map(ruleKey => {
      rules[ruleKey].map(rule => {
        const valid = rule(row[ruleKey]);
        if (!isEmpty(valid)) {
          if (!result[rowIndex]) result[rowIndex] = {};
          result[rowIndex][ruleKey] = valid;
        }
      });
    });
  });
  return result;
   /* eslint-enable */
};
