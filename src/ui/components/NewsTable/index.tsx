import { styled, Table, TableBody } from '@mui/material';
import { CSSProperties } from 'styled-components';
import { Articles } from '../../../data/slices/newsSlice';
import NewsTableRow from './NewsTableRow';
import NewsTableHead from './NewsTableHead';
import { createWrapperStyles } from './styles';

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
          <NewsTableRow key={article.description} article={article} />
        ))}
      </TableBody>
    </Wrapper>
  );
};

export default NewsTable;
