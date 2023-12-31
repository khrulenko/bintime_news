import { useSelector } from 'react-redux';
import { styled, Table, TableBody, TableRow } from '@mui/material';
import { CSSProperties } from 'styled-components';
import { getNews } from '../../../data/slices/newsSlice';
import NewsTableRow from './NewsTableRow';
import NewsTableHead from './NewsTableHead';
import { createWrapperStyles } from './styles';
import Pagination from '../Pagination';
import WithLoading from '../WithLoading';
import NoNewsFoundAlert from '../NoNewsFoundAlert';
import ErrorAlert from '../ErrorAlert';

interface HeaderProps {
  title: string;
}

type Header = HeaderProps & CSSProperties;

export type Headers = Header[];

const headers: Headers = [
  {
    title: 'Image',
    width: '12%',
    minWidth: '120px',
  },
  {
    title: 'Title',
    width: '20%',
  },
  {
    title: 'Authors',
    width: '14%',
  },
  {
    title: 'Description',
    width: '30%',
  },
  {
    title: 'Publication date',
    width: '13%',
  },
  {
    title: 'Original URL',
    width: '11%',
  },
];

const Wrapper = styled(Table)(createWrapperStyles);

const NewsTable = () => {
  const { articles, loading, error } = useSelector(getNews);

  if (!articles.length && !loading) return <NoNewsFoundAlert />;

  if (error) return <ErrorAlert />;

  return (
    <WithLoading isLoading={loading}>
      <Wrapper>
        <NewsTableHead headers={headers} />

        <TableBody>
          {articles.map((article) => (
            <NewsTableRow key={article.title} article={article} />
          ))}

          <TableRow>
            <Pagination />
          </TableRow>
        </TableBody>
      </Wrapper>
    </WithLoading>
  );
};

export default NewsTable;
