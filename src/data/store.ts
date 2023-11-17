import { configureStore } from '@reduxjs/toolkit';
import newsReducer, { News } from './slices/newsSlice';
import queryParamsReducer, { QueryParams } from './slices/queryParamsSlice';

export interface RootState {
  news: News;
  queryParams: QueryParams;
}

export const reducers = {
  news: newsReducer,
  queryParams: queryParamsReducer,
};

export const store = configureStore({
  reducer: reducers,
});

export default store;
