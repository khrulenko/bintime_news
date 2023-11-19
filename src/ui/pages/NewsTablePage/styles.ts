import { ButtonProps, TypographyProps } from '@mui/material';
import { StyleFunction } from '../../../common/types';

export const createFiltersButtonStyles: StyleFunction<ButtonProps> = () => ({
  width: 'fit-content',

  fontSize: '13px',
  textTransform: 'capitalize',

  borderRadius: '7px',
  backgroundColor: '#ECF0F6',

  '&:hover': {
    color: 'white',
  },
});

export const createHeaderStyles: StyleFunction<TypographyProps> = () => ({
  fontSize: '22px',
  fontWeight: '500',
});
