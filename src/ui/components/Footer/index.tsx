import { Link, Stack, Typography, styled } from '@mui/material';
import {
  createWrapperStyles,
  createTextStyles,
  createLogoStyles,
  createEmailWrapperStyles,
} from './styles';

const Wrapper = styled(Stack)(createWrapperStyles);
const Logo = styled(Typography)(createLogoStyles);
const Text = styled(Typography)(createTextStyles);
const EmailWrapper = styled(Stack)(createEmailWrapperStyles);

const Footer = () => {
  return (
    <Wrapper>
      <Stack gap="16px">
        <Logo>Formula</Logo>

        <Text>©Formula 2023. All Rights Reserved</Text>
      </Stack>

      <EmailWrapper>
        <span className="material-symbols-outlined">mail</span>

        <Text>
          <Link href="mailto:info@formula.com">info@formula.com</Link>
        </Text>
      </EmailWrapper>
    </Wrapper>
  );
};

export default Footer;
