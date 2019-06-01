
import { isEmpty, keys } from 'lodash';

export const notEmpty = (message) => (value) => {
  if (isEmpty(value)) {
    return message;
  }
  return undefined;
};

const rules = {
  PackageID: [notEmpty('PackageId cannot be empty')],
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
