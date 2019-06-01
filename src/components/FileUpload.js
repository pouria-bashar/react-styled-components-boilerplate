import React from 'react';
import styled from 'styled-components';
import Papa from 'papaparse';
import PropTypes from 'prop-types';
import Button from './Button';

const FilePicker = styled.input`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  opacity: 0;
  display: block;
`;

const TipTable = ({
  onSetData,
}) => {
  return (
    <Button style={{ position: 'relative' }}>
        Browse
      <FilePicker
        type="file"
        name="file"
        id="file"
        onChange={(e) => {
          if (!e.target.files[0]) return;
          Papa.parse(e.target.files[0], {
            header: true,
            skipEmptyLines: true,
            complete: (csv) => {
              onSetData(csv);
            },
          });
        }}
      />
    </Button>
  );
};

TipTable.propTypes = {
  onSetData: PropTypes.func.isRequired,
};
export default TipTable;
