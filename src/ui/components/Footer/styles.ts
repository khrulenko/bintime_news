import { StackProps, TypographyProps } from '@mui/material';
import { StyleFunction } from '../../../common/types';

export const createWrapperStyles: StyleFunction<StackProps> = () => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',

  width: '100%',
  padding: '10px 136px 12px',

  color: '#4E5460',
  boxShadow: '0px -2px 4px 0px rgba(223, 223, 223, 0.25)',
});

export const createLogoStyles: StyleFunction<TypographyProps> = () => ({
  fontSize: '24px',
  fontWeight: '500',
  lineHeight: '18px',
  fontFamily: 'Ubuntu, sans-serif',
});

export const createTextStyles: StyleFunction<TypographyProps> = () => ({
  fontSize: '13px',
  lineHeight: '24px',
});

export const createEmailWrapperStyles: StyleFunction<StackProps> = () => ({
  flexDirection: 'row',
  gap: '8px',
  alignItems: 'flex-end',
});
