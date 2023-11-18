import { styled, Table, TableBody, TableRow } from '@mui/material';
import { CSSProperties } from 'styled-components';
import { Articles } from '../../../data/slices/newsSlice';
import NewsTableRow from './NewsTableRow';
import NewsTableHead from './NewsTableHead';
import { createWrapperStyles } from './styles';
import Pagination from '../Pagination';

interface TableProps {
  articles: Articles;
}

interface HeaderProps {
  title: string;
}

type Header = HeaderProps & CSSProperties;

export type Headers = Header[];

const headers: Headers = [
  {
    title: 'Image',
    width: '12%',
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

const NewsTable = ({ articles }: TableProps) => {
  return (
    <Wrapper>
      <NewsTableHead headers={headers} />

      <TableBody>
        {articles.map((article) => (
          //COMM: the server sends items with same ids
          // that's why url is used as unique value for key
          <NewsTableRow key={article.url} article={article} />
        ))}

        <TableRow>
          <Pagination />
        </TableRow>
      </TableBody>
    </Wrapper>
  );
};

export default NewsTable;
