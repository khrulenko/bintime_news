import { Skeleton, styled, TableCell, TableRow } from '@mui/material';
import { Article } from '../../../../data/slices/newsSlice';
import { createCellStyles, createImageStyles } from './styles';
import { ISODateToString } from '../../../../common/utils';
import IconLink from '../../IconLink';

interface Props {
  article: Article;
}

const Cell = styled(TableCell)(createCellStyles);
const Image = styled('img')(createImageStyles);

const NewsTableRow = ({ article }: Props) => {
  const { title, author, description, publishedAt, urlToImage, url } = article;

  return (
    <TableRow>
      <Cell>{urlToImage ? <Image src={urlToImage} /> : <Skeleton />}</Cell>

      <Cell>{title}</Cell>

      <Cell>{author}</Cell>

      <Cell>{description}</Cell>

      <Cell align="center">{ISODateToString(publishedAt)}</Cell>

      <Cell align="center">
        <IconLink href={url} />
      </Cell>
    </TableRow>
  );
};

export default NewsTableRow;
