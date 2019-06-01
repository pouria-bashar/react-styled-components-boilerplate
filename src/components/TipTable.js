import React, { useState, useEffect } from 'react';
import ReactDataGrid from "react-data-grid";
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';

const rowUpdateHook = (initialState) => {
  const [rows, setRows] = useState(initialState);
  const onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    setRows(_rows => {
      const rows = _rows.slice();
      for (let i = fromRow; i <= toRow; i++) {
        rows[i] = { ...rows[i], ...updated };
      }
      return rows;
    });
  };

  return {
    updatedRows: rows,
    onGridRowsUpdated,
    setRows,
  };
};

const RowRenderer = ({ renderBaseRow, ...props }) => {
  const color = "black";
  return <div style={{ color }}>{renderBaseRow(props)}</div>;
};

const TipTable = ({
  columns,
  rows,
  onRowsUpdate,
}) => {
  if (isEmpty(rows)) return null;

  return (
    <ReactDataGrid
      columns={columns}
      rowGetter={i => rows[i]}
      rowsCount={rows.length}
      onGridRowsUpdated={({ fromRow, toRow, updated }) => {
        const newRows = rows.slice();
        for (let i = fromRow; i <= toRow; i++) {
          newRows[i] = { ...newRows[i], ...updated };
        }
        onRowsUpdate(newRows);
      }}
      rowRenderer={RowRenderer}
      rowHeight={50}
      enableCellSelect
    />
  );
};

TipTable.propTypes = {
  columns: PropTypes.array,
  rows: PropTypes.array,
  onRowsUpdate: PropTypes.func,
};

export default TipTable;
