import { TypographyProps } from '@mui/material';
import { StyleFunction } from '../../../common/types';

export const createNameStyles: StyleFunction<TypographyProps> = () => ({
  fontSize: '16px',
  fontWeight: '700',
});

export const createContentStyles: StyleFunction<TypographyProps> = () => ({
  fontSize: '16px',
  fontWeight: '500',
});
