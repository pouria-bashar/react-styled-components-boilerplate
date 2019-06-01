import React, { useState, useEffect } from 'react';
import { isEmpty } from 'lodash';
import TipTable from '../components/TipTable';
import FileUpload from '../components/FileUpload';
import formatFutureTips from '../utils/format-future-tips';
import formatCsvTips from '../utils/format-csv-tips';
import data from '../utils/sample-data.json';
import validation from '../utils/tips-validation';

const TipUpload = () => {
  const [tips, setTips] = useState({ columns: [], rows: [] });
  useEffect(() => {
    setTimeout(() => {
      setTips(formatFutureTips(data));
    }, 1000);
  }, []);

  return (
    <section>
      <TipTable
        columns={tips.columns}
        rows={tips.rows}
        onRowsUpdate={(rows) => {
          setTips((prev) => ({ ...prev, rows }));
        }}
      />
      <div style={{ marginTop: '12px' }}>
        <FileUpload
          onSetData={(csv) => {
            const { rows } = formatCsvTips(csv.data, csv.meta.fields);
            setTips((prev) => ({ ...prev, rows: [...prev.rows, ...rows] }));
          }}
        />
        {tips.rows.length ? (
          <button
            style={{ marginLeft: '12px' }}
            onClick={() => {
              const _validationResult = validation(tips.rows);
              if (!isEmpty(_validationResult)) {
                setTips((prev) => ({ ...prev, rows: prev.rows.map((row, index) => {
                    if (!isEmpty(_validationResult[index])) {
                      //
                      return { ...row, validation: _validationResult[index] };
                    }
                    return row;
                  }),
                }));
              } else {
                // Upload
              }
            }}
          >
          Upload
          </button>
        ) : null}
      </div>
    </section>
  );
};

export default TipUpload;

