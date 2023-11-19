import { useNavigate } from 'react-router-dom';
import { styled, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { createWrapperStyles } from './styles';

interface Props {
  href: string;
}

const Wrapper = styled(IconButton)(createWrapperStyles);

const BackButton = ({ href }: Props) => {
  const navigate = useNavigate();
  const goTo = () => navigate(href);

  return (
    <Wrapper color="inherit" onClick={goTo}>
      <ArrowBackIcon />
    </Wrapper>
  );
};

export default BackButton;
