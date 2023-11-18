import { Typography, styled } from '@mui/material';
import { createLogoStyles, createWrapperStyles } from './styles';

const Wrapper = styled('div')(createWrapperStyles);
const Logo = styled(Typography)(createLogoStyles);

const Header = () => {
  return (
    <Wrapper>
      <Logo>Formula</Logo>
    </Wrapper>
  );
};

export default Header;
