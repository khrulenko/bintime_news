import { RootState } from '../data/store';

const createSelector =
  <K extends keyof RootState>(dataField: K) =>
  (state: RootState) =>
    state[dataField];

const ISODateToString = (date: string): string => date.split('T')[0];

const toUiPage = (page: number): number => page - 1;

const toApiPage = (page: number): number => page + 1;

export { createSelector, ISODateToString, toUiPage, toApiPage };
