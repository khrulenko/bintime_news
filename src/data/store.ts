import { configureStore } from '@reduxjs/toolkit';
import newsReducer, { News } from './slices/newsSlice';

export interface State {
  news: News;
}

export const reducers = {
  news: newsReducer,
};

export const store = configureStore({
  reducer: reducers,
});

export default store;
