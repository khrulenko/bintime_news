import { ImgHTMLAttributes } from 'react';
import { TypographyProps } from '@mui/material';
import { StyleFunction } from '../../../common/types';

export const createInfoTextStyles: StyleFunction<TypographyProps> = ({
  fontSize = 16,
}) => ({
  fontSize: fontSize + 'px',
  fontWeight: '600',
  color: '#2129328A',
});

export const createImageStyles: StyleFunction<
  ImgHTMLAttributes<HTMLImageElement>
> = () => ({
  margin: '0 -136px',
  height: '600px',
  objectFit: 'cover',
});
