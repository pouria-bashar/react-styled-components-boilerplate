import { get } from 'lodash';
import csvFields from './table-columns';

const formatRow = (row) => {
  const newRow = {};
  // eslint-disable-next-line array-callback-return
  Object.keys(csvFields).map(k => {
    newRow[k] = `${get(row, csvFields[k].csvKey, '')}`;
  });
  return newRow;
};


export default (data, columns = []) => {
  const rows = data.map(row => formatRow(row));
  return {
    columns: [],
    rows,
  };
};
