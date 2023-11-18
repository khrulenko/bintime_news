import { useSelector } from 'react-redux';
import { getNews } from '../../../data/slices/newsSlice';
import NewsTable from '../../components/NewsTable';

const NewsTablePage = () => {
  const { totalResults, articles, error } = useSelector(getNews);

  return <NewsTable articles={articles} />;
};

export default NewsTablePage;
