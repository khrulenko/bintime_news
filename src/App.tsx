import { useDispatch, useSelector } from 'react-redux';
import { getNews } from './data/slices/newsSlice';
import { useEffect } from 'react';
import { fetchNews } from './data/thunks';
import { AppDispatch } from './common/types';

const App = () => {
  const { articles, error } = useSelector(getNews);
  const dispatch = useDispatch<AppDispatch>();

  console.log('articles:', articles);
  console.log('error:', error);

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  return <>here will be the news app</>;
};

export default App;
