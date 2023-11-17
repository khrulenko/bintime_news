import { State } from '../data/store';

const createSelector =
  <K extends keyof State>(dataField: K) =>
  (state: State) =>
    state[dataField];

export { createSelector };
