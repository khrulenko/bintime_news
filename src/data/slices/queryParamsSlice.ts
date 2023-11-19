import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EmptyStrOr } from '../../common/types';
import { Categories, Countries } from '../../common/constants';
import { createSelector } from '../../common/utils';

export type QueryParams = {
  q: string;
  apiKey: string;
  category: EmptyStrOr<Categories>;
  country: EmptyStrOr<Countries>;
  pageSize: number;
  page: number;
};

const initialState: QueryParams = {
  q: 'a',
  apiKey: import.meta.env.VITE_NEWS_API_KEY,
  category: '',
  country: '',
  pageSize: 5,
  page: 1,
};

const queryParamsSlice = createSlice({
  name: 'queryParams',
  initialState,
  reducers: {
    setQuery: (state, { payload }: PayloadAction<string>) => {
      state.q = payload;
    },
    setCategory: (
      state,
      { payload }: PayloadAction<EmptyStrOr<Categories>>
    ) => {
      state.category = payload;
    },
    setCountry: (state, { payload }: PayloadAction<EmptyStrOr<Countries>>) => {
      state.country = payload;
    },
    setPageSize: (state, { payload }: PayloadAction<number>) => {
      state.pageSize = payload;
    },
    setPage: (state, { payload }: PayloadAction<number>) => {
      state.page = payload;
    },
  },
});

export const getQueryParams = createSelector('queryParams');
export const { setQuery, setCategory, setCountry, setPageSize, setPage } =
  queryParamsSlice.actions;

export default queryParamsSlice.reducer;
