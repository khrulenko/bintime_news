import { TableProps } from '@mui/material';
import { StyleFunction } from '../../../common/types';

export const createWrapperStyles: StyleFunction<TableProps> = () => ({
  borderCollapse: 'separate',
  border: '1px solid #EFEFF3',
  borderRadius: '5px',
});
