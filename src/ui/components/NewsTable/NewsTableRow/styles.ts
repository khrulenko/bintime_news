import { ImgHTMLAttributes } from 'react';
import { TableCellProps } from '@mui/material';
import { StyleFunction } from '../../../../common/types';

export const createCellStyles: StyleFunction<TableCellProps> = () => ({
  border: '1px solid #EFEFF3',
});

export const createImageStyles: StyleFunction<
  ImgHTMLAttributes<HTMLImageElement>
> = () => ({
  width: '100%',
  height: '100%',
});
