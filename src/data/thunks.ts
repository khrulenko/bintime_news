import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { NEWS_API } from '../common/api';
import { RootState } from './store';
import { Response } from './slices/newsSlice';

const fetchNews = createAsyncThunk<Response, void, { state: RootState }>(
  'news/fetchNews',
  async (_, { getState }) => {
    const state = getState();
    const params = state.queryParams;

    const response = await axios.get(NEWS_API, {
      params,
    });

    return response.data;
  }
);

export { fetchNews };
