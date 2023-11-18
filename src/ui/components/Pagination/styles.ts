import { TablePaginationProps } from '@mui/material';
import { StyleFunction } from '../../../common/types';

export const createWrapperStyles: StyleFunction<TablePaginationProps> = () => ({
  border: '1px solid #EFEFF3',
  borderBottomRightRadius: '5px',
  borderBottomLeftRadius: '5px',
});
