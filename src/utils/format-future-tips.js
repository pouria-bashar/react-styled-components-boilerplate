import { get, keys } from 'lodash';
import fields from './table-columns';

const formatRow = (row) => {
  const newRow = {};
  // eslint-disable-next-line array-callback-return
  Object.keys(fields).map(k => {
    newRow[k] = `${get(row, fields[k].futureKey, '')}`;
  });
  return newRow;
};


export default (data) => {
  const tips = get(data, 'packages.tips', []).map(d => ({ ...d, isSavedToDB: true }));
  const columns = keys(fields)
  .map(f => ({
    key: f,
    name: f,
    editable: fields[f].editable,
    formatter: fields[f].formatter,
    editor: fields[f].editor,
    resizable: true,
    width: 120,
  }));

  const rows = tips.map(row => formatRow(row));
  return {
    columns,
    rows,
  };
};
