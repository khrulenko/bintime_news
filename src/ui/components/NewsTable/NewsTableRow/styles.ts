import { ImgHTMLAttributes } from 'react';
import { TableCellProps } from '@mui/material';
import { StyleFunction } from '../../../../common/types';

export const createCellStyles: StyleFunction<TableCellProps> = ({
  theme: {
    palette: { secondary },
  },
}) => ({
  border: '1px solid',
  borderColor: secondary.main,
});

export const createImageStyles: StyleFunction<
  ImgHTMLAttributes<HTMLImageElement>
> = () => ({
  width: '100%',
  height: '100%',
});
