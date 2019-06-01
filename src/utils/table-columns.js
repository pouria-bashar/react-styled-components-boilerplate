import React from 'react';
import { Editors } from "react-data-grid-addons";
import { packagesOptions, tracksOptions, betTypeOptions } from './drop-down-options';
import DatePickerEditor from '../components/DatePickerEditor';
import DateTimePickerEditor from '../components/DateTimePickerEditor';
import moment from 'moment';
import { get, isEmpty } from 'lodash';

const { DropDownEditor } = Editors;


export const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';
export const DATE_FORMAT = 'YYYY-MM-DD';

const DropDown = (options) => <DropDownEditor options={options} />;


const ColumnWithValidation = (key) => ({ value, row, ...rest }) => {
  if (row.validation && row.validation[key]) {
    return (
      <div style={{ backgroundColor: 'red' }}>{row.validation[key]}</div>
    );
  }
  return <div>{value}</div>;
};

const releaseDateFormatter = (date) => {
  if (!date) return '';
  if (date.includes && date.includes('_')) {
    return '';
  }
  return moment(date).format(DATE_FORMAT);
};

const DateTimeFormatter = (date) => {
  return moment(date).format(DATE_TIME_FORMAT);
};

const columns = {
  TipId: {
    futureKey: 'id',
    csvKey: 'id',
    editable: false,
  },
  PackageID: {
    futureKey: 'PackageID',
    csvKey: 'PackageID',
    editable: true,
    editor: DropDown(packagesOptions),
  },
  ReleaseDate: {
    futureKey: '',
    csvKey: 'ReleaseDate',
    editable: (rowData) => {
      return !isEmpty(get(rowData, 'ReleaseDate', ''));
    },
    editor: DatePickerEditor,
    formatter: ({ value }) => releaseDateFormatter(value),
  },
  TipPackageID: {
    futureKey: 'TipPackageId',
    csvKey: 'TipPackageID',
    editable: false,
  },
  Date: {
    futureKey: 'Date',
    csvKey: 'Date',
    editable: true,
    editor: DateTimePickerEditor,
    formatter: ({ value }) => DateTimeFormatter(value),
  },
  TipNumber: {
    futureKey: 'TipNumber',
    csvKey: 'TipNumber',
    editable: true,
    formatter: ColumnWithValidation('TipNumber'),
  },
  RunnerId: {
     futureKey: 'Runners[0].id',
     csvKey: 'Runners[0].id',
  },
  Track: {
    futureKey: 'Runners[0].Track',
    csvKey: 'Track',
    editor: DropDown(tracksOptions),
  },
  RaceNumber: {
    futureKey: 'Runners[0].RaceNumber',
    csvKey: 'RaceNumber',
  },
  HorseNumber: {
    futureKey: 'Runners[0].HorseNumber',
    csvKey: 'HorseNumber',
  },
  HorseName: {
    futureKey: 'Runners[0].HorseName',
    csvKey: 'HorseName',
  },
  Stake: {
    futureKey: 'Stake',
    csvKey: 'Stake',
  },
  BetType: {
    futureKey: 'BetType',
    csvKey: 'BetType',
    editor: DropDown(betTypeOptions),
  },
  Description: {
    futureKey: 'Description',
    csvKey: 'Description',
  },
  IsTop5: {
    futureKey: 'MetaData.IsTop5',
    csvKey: 'IsTop5',
  },
  IsBestBet: {
    futureKey: 'MetaData.IsBestBet',
    csvKey: 'IsBestBet',
  },
  isSavedToDB: {
    futureKey: 'isSavedToDB',
    csvKey: 'isSavedToDB',
  },
};
export default columns;
