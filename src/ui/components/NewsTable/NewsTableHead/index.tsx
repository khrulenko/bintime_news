import { styled, TableCell, TableHead, TableRow } from '@mui/material';
import { Headers } from '..';
import {
  createWrapperStyles,
  createRowStyles,
  createCellStyles,
} from './styles';

interface Props {
  headers: Headers;
}

const Wrapper = styled(TableHead)(createWrapperStyles);
const Row = styled(TableRow)(createRowStyles);
const Cell = styled(TableCell)(createCellStyles);

const NewsTableHead = ({ headers }: Props) => {
  return (
    <Wrapper>
      <Row>
        {headers.map(({ title, ...styles }) => (
          <Cell key={title} sx={styles}>
            {title}
          </Cell>
        ))}
      </Row>
    </Wrapper>
  );
};

export default NewsTableHead;
