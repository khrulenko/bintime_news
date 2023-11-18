import { StackProps, TypographyProps } from '@mui/material';
import { StyleFunction } from '../../../common/types';

export const createWrapperStyles: StyleFunction<StackProps> = () => ({
  display: 'flex',

  width: '100%',
  padding: '14px 0px',

  justifyContent: 'center',
  alignItems: 'center',

  background: '#1A232E',
  boxShadow: '0px 1px 12.1px 0px rgba(0, 0, 0, 0.14)',
});

export const createLogoStyles: StyleFunction<TypographyProps> = () => ({
  fontSize: '42px',
  lineHeight: '36px',
  fontFamily: 'Ubuntu, sans-serif',
  color: 'white',
});
