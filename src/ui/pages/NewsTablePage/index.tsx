import { useSelector } from 'react-redux';
import { getNews } from '../../../data/slices/newsSlice';

const NewsTablePage = () => {
  const { totalResults, articles, error } = useSelector(getNews);

  console.log('---totalResults:', totalResults);
  console.log('articles:', articles);
  console.log('error:', error);

  return <div>here will be the NewsTablePage</div>;
};

export default NewsTablePage;
