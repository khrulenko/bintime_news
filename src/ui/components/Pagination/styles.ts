import { TablePaginationProps } from '@mui/material';
import { StyleFunction } from '../../../common/types';

export const createWrapperStyles: StyleFunction<TablePaginationProps> = ({
  theme: {
    palette: { secondary },
  },
}) => ({
  border: '1px solid',
  borderColor: secondary.main,
  borderBottomRightRadius: '5px',
  borderBottomLeftRadius: '5px',
});
