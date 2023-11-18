import { useDispatch, useSelector } from 'react-redux';
import { styled, TablePagination } from '@mui/material';
import {
  getQueryParams,
  setPage,
  setPageSize,
} from '../../../data/slices/queryParamsSlice';
import { createWrapperStyles } from './styles';
import { AppDispatch } from '../../../common/types';
import { getNews } from '../../../data/slices/newsSlice';
import { fetchNews } from '../../../data/thunks';
import { toApiPage, toUiPage } from '../../../common/utils';

const Wrapper = styled(TablePagination)(createWrapperStyles);

const Pagination = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { page, pageSize } = useSelector(getQueryParams);
  const { totalResults } = useSelector(getNews);

  const articlesAmount = totalResults >= 100 ? 100 : totalResults;

  const handleChangePage = (_event: unknown, newPage: number) => {
    dispatch(setPage(toApiPage(newPage)));
    dispatch(fetchNews());
  };

  const handleChangeRowsPerPage = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPageSize(Number(value)));
    dispatch(setPage(1));
    dispatch(fetchNews());
  };

  return (
    <Wrapper
      rowsPerPageOptions={[5, 10, 25, 50, 100]}
      count={articlesAmount}
      rowsPerPage={pageSize}
      page={toUiPage(page)}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
};

export default Pagination;
