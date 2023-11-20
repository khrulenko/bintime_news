import { ImgHTMLAttributes } from 'react';
import { LinkProps } from 'react-router-dom';
import { TableCellProps } from '@mui/material';
import { StyleFunction } from '../../../../common/types';

export const createCellStyles: StyleFunction<TableCellProps> = ({
  theme: {
    palette: { secondary },
  },
}) => ({
  height: '88px',
  padding: '8px 16px',

  border: '1px solid',
  borderColor: secondary.main,
});

export const createImageStyles: StyleFunction<
  ImgHTMLAttributes<HTMLImageElement>
> = () => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const createArticleLinkStyles: StyleFunction<LinkProps> = () => ({
  color: 'inherit',
  textDecoration: 'none',

  '&:hover': {
    textDecoration: 'underline',
  },
});
