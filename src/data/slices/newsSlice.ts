import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { createSelector } from '../../common/utils';
import { fetchNews } from '../thunks';
import { NullOr } from '../../common/types';

export interface Article {
  source: {
    id: string;
    name: string;
  };
  author: NullOr<string>;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: NullOr<string>;
}

export type Articles = Article[];

export interface Response {
  status: string;
  articles: Articles;
  totalResults: number;
}

export interface News {
  totalResults: number;
  articles: Articles;
  error: boolean;
  loading: boolean;
}

const initialState: News = {
  totalResults: 0,
  articles: [],
  error: false,
  loading: false,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state: News) => {
        state.loading = true;
      })
      .addCase(
        fetchNews.fulfilled,
        (state: News, { payload }: PayloadAction<Response>) => {
          state.loading = false;
          state.totalResults = payload.totalResults;
          state.articles = payload.articles;
        }
      )
      .addCase(fetchNews.rejected, (state: News) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const getNews = createSelector('news');
export default newsSlice.reducer;
