import { TableProps } from '@mui/material';
import { StyleFunction } from '../../../common/types';

export const createWrapperStyles: StyleFunction<TableProps> = ({
  theme: {
    palette: { secondary },
  },
}) => ({
  borderCollapse: 'separate',
  border: '1px solid',
  borderColor: secondary.main,
  borderRadius: '5px',
});
