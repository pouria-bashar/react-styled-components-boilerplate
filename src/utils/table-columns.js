import React from 'react';
import { notEmpty } from './tips-validation';


const ColumnWithValidation = (key) => ({ value, row, ...rest }) => {
  if (row.validation && row.validation[key]) {
    return (
      <div style={{ backgroundColor: 'red' }}>{row.validation[key]}</div>
    );
  }
  return <div>{value}</div>;
};

const columns =  {
  TipId: {
    futureKey: 'id',
    csvKey: 'id',
    editable: false,
  },
  PackageID: {
    futureKey: 'PackageID',
    csvKey: 'PackageID',
    editable: true,
    formatter: ColumnWithValidation('PackageID'),
  },
  ReleaseDate: {
    futureKey: 'TipPackageId',
    csvKey: 'ReleaseDate',
  },
  Date: {
    futureKey: 'Date',
    csvKey: 'Date',
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
