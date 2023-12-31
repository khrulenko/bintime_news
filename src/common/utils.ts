import { RootState } from '../data/store';
import { NullOr } from './types';

const createSelector =
  <K extends keyof RootState>(dataField: K) =>
  (state: RootState) =>
    state[dataField];

const ISODateToString = (date: string): string => date.split('T')[0];

const toUiPage = (page: number): number => page - 1;

const toApiPage = (page: number): number => page + 1;

const splitCamelCaseString = (value: string): string =>
  value.replace(/([a-z])([A-Z])/g, '$1 $2');

const debounce = (callback: Function, delay: number) => {
  let timerId: NullOr<number> = null;

  return () => {
    if (timerId) clearTimeout(timerId);

    timerId = setTimeout(callback, delay);
  };
};

export {
  createSelector,
  ISODateToString,
  toUiPage,
  toApiPage,
  splitCamelCaseString,
  debounce,
};
