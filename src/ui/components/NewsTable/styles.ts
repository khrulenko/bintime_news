import { TableProps } from '@mui/material';
import { StyleFunction } from '../../../common/types';

export const createWrapperStyles: StyleFunction<TableProps> = () => ({
  borderCollapse: 'separate',
  border: '0.5px solid #EFEFF3',
  borderTopRightRadius: '5px',
  borderTopLeftRadius: '5px',
});
