import { TableHeadProps, TableRowProps, TableCellProps } from '@mui/material';
import { StyleFunction } from '../../../../common/types';

export const createWrapperStyles: StyleFunction<TableHeadProps> = () => ({
  background: '#ECF0F6',
});

export const createRowStyles: StyleFunction<TableRowProps> = () => ({
  '& :first-child': {
    borderTopLeftRadius: '5px',
  },
  '& :last-child': {
    borderTopRightRadius: '5px',
  },
});

export const createCellStyles: StyleFunction<TableCellProps> = ({
  theme: {
    palette: { secondary },
  },
}) => ({
  padding: '12px 16px',
  border: '1px solid',
  borderColor: secondary.main,
});
