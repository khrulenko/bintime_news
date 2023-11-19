import { ButtonProps } from '@mui/material';
import { StyleFunction } from '../../../common/types';

export const createWrapperStyles: StyleFunction<ButtonProps> = () => ({
  padding: '0',

  '&::after': {
    content: "' '",
    position: 'absolute',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
  },

  '&:hover': {
    backgroundColor: 'transparent',
    '&::after': { backgroundColor: 'black', opacity: '0.04' },
  },
});
