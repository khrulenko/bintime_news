import { Stack, styled, Typography } from '@mui/material';
import { createNameStyles, createContentStyles } from './styles';

interface Props {
  name: string;
  content: string;
}

const Name = styled(Typography)(createNameStyles);
const Content = styled(Typography)(createContentStyles);

const TextBlock = ({ name, content }: Props) => {
  return (
    <Stack gap="16px">
      <Name>{name}</Name>

      <Content>{content}</Content>
    </Stack>
  );
};

export default TextBlock;
