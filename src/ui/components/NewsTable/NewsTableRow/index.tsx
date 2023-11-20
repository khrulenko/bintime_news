import { Link } from 'react-router-dom';
import { Skeleton, styled, TableCell, TableRow } from '@mui/material';
import { Article } from '../../../../data/slices/newsSlice';
import {
  createCellStyles,
  createImageStyles,
  createArticleLinkStyles,
} from './styles';
import { ISODateToString } from '../../../../common/utils';
import IconLink from '../../IconLink';
import { URL_ARTICLE } from '../../../../routing/URLs';

interface Props {
  article: Article;
}

const Cell = styled(TableCell)(createCellStyles);
const Image = styled('img')(createImageStyles);
const ArticleLink = styled(Link)(createArticleLinkStyles);

const NewsTableRow = ({ article }: Props) => {
  const { source, title, author, description, publishedAt, urlToImage, url } =
    article;

  const appArticleUrl = `${URL_ARTICLE}?id=${source.id}&title=${title}`;

  return (
    <TableRow>
      <Cell>{urlToImage ? <Image src={urlToImage} /> : <Skeleton />}</Cell>

      <Cell>
        <ArticleLink to={appArticleUrl}>{title}</ArticleLink>
      </Cell>

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
