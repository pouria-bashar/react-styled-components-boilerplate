import React from 'react';
import styled from 'styled-components';
import DateTime from 'react-datetime';
import { DATE_TIME_FORMAT } from '../utils/table-columns';
import moment from 'moment';

const Container = styled.div`
  height: 100%;
  display: flex;
  & > div {
    flex: 1;
    display: flex;
    & > div {
      flex: 1;
      display: flex;
    }
    & div.rdtDays {
      width: 100%;
    }
  }
`;

class DateTimePickerEditor extends React.Component {
  state = {
    value: null,
  }
  getValue() {
    // should return an object of key/value pairs to be merged back to the row
    return {
      Date: this.state.value,
    };
  }

  getInputNode() {
    // If applicable, should return back the primary html input node that is used to edit the data
    // Otherwise return null
    // If value is an input node, then this node will be focussed on when the editor opens
  }

  disableContainerStyles() {
    // Optional method
    // If set to true, the EditorContainer will not apply default styling to the editor
  }

  render() {
    return (
      <Container>
        <DateTime
          value={this.state.value}
          onBlur={(date) => {
            this.setState({ value: date });
          }}
        />
      </Container>
    );
  }
}

export default DateTimePickerEditor;
