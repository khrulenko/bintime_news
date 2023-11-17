import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { NEWS_API } from '../common/api';

const params = {
  q: 'a',
  apiKey: import.meta.env.VITE_NEWS_API_KEY,
  category: null,
  country: null,
  pageSize: null,
  page: null,
};

const fetchNews = createAsyncThunk('news/fetchNews', async () => {
  const response = await axios.get(NEWS_API, {
    params,
  });

  return response.data;
});

export { fetchNews };
