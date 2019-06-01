import React from 'react';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  display: flex;
  & >  div {
    flex: 1;
    display: flex;
    & >  div {
      flex: 1;
      display: flex;
    }
  }
  & input {
    flex: 1;
  }
`;

class DatePickerEditor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: new Date(),
    };
  }

  getValue() {
    // should return an object of key/value pairs to be merged back to the row
    return {
      ReleaseDate: this.state.value,
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
        <DatePicker
          selected={this.state.value}
          onChange={(date) => {
            this.setState({ value: date });
          }}
        />
      </Container>
    );
  }
};

export default DatePickerEditor;
