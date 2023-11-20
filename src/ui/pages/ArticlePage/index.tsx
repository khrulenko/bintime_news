import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Divider, Stack, Typography, styled } from '@mui/material';
import { getNews } from '../../../data/slices/newsSlice';
import TextBlock from '../../components/TextBlock';
import { createImageStyles, createInfoTextStyles } from './styles';
import { ISODateToString } from '../../../common/utils';
import BackButton from '../../components/BackButton';
import { URL_NEWS_TABLE } from '../../../routing/URLs';

const InfoText = styled(Typography)(createInfoTextStyles);
const Image = styled('img')(createImageStyles);

const ArticlePage = () => {
  const location = useLocation();
  const { articles } = useSelector(getNews);

  const queryParams = new URLSearchParams(location.search);
  const articleTitle = queryParams.get('title');
  const currentArticle = articles.find(
    (article) => article.title === articleTitle
  );

  if (!currentArticle) {
    return <>Oops, there is no such article</>;
  }

  const {
    source,
    title,
    author,
    description,
    content,
    urlToImage,
    publishedAt,
  } = currentArticle;

  return (
    <Stack gap="32px">
      <Stack direction="row" gap="8px">
        <BackButton href={URL_NEWS_TABLE} />
        <Typography fontSize="22px">{title}</Typography>
      </Stack>

      <Stack direction="row" justifyContent="space-between">
        <InfoText>Source: {source.name}</InfoText>
        <InfoText>Publication date: {ISODateToString(publishedAt)}</InfoText>
      </Stack>

      <TextBlock name="Description" content={description} />

      <Image src={urlToImage} />

      {content && <TextBlock name="Content" content={content} />}

      {author && (
        <>
          <Divider />

          <InfoText fontSize="14px">Authors: {author}</InfoText>
        </>
      )}
    </Stack>
  );
};

export default ArticlePage;
