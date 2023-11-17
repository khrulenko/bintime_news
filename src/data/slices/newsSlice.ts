import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from '../../common/utils';
import { fetchNews } from '../thunks';

interface Post {
  source: {
    id: string | null;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

type Posts = Post[];

export interface News {
  totalResults: number;
  posts: Posts;
  error: boolean;
  loading: boolean;
}

const initialState: News = {
  totalResults: 0,
  posts: [],
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
      .addCase(fetchNews.fulfilled, (state: News, { payload }) => {
        state.loading = false;
        state.totalResults = payload.totalResults;
        state.posts = payload.articles;
      })
      .addCase(fetchNews.rejected, (state: News) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const getNews = createSelector('news');
export default newsSlice.reducer;
