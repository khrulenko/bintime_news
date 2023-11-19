import {
  InputLabelProps,
  MenuItemProps,
  SelectProps,
  TypographyProps,
} from '@mui/material';
import { StyleFunction } from '../../../common/types';

export const createNameStyles: StyleFunction<TypographyProps> = () => ({
  paddingLeft: '2px',
  fontSize: '12px',
  fontWeight: '500',
});

export const createLabelStyles: StyleFunction<InputLabelProps> = () => ({
  lineHeight: '18px',
  fontSize: '13px',
});

export const createSelectWrapperStyles: StyleFunction<SelectProps> = () => ({
  width: '250px',
  height: '34px',

  lineHeight: '18px',
  fontSize: '13px',

  borderRadius: '5px',
  borderColor: '#D3D3E2',
});

export const createItemStyles: StyleFunction<MenuItemProps> = () => ({
  lineHeight: '18px',
  fontSize: '13px',
});
