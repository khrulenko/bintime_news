import AppRoutes from './routing/Routes';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './common/types';
import { fetchNews } from './data/thunks';

const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  return <AppRoutes />;
};

export default App;
