import { RootState } from '../data/store';

const createSelector =
  <K extends keyof RootState>(dataField: K) =>
  (state: RootState) =>
    state[dataField];

export { createSelector };
