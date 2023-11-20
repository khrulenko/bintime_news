import { ChangeEvent, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { AppDispatch } from '../../../common/types';
import {
  getQueryParams,
  setQuery,
} from '../../../data/slices/queryParamsSlice';
import { fetchNews } from '../../../data/thunks';
import { SEARCH_DELAY } from '../../../common/constants';
import { debounce } from '../../../common/utils';

const Search = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { q } = useSelector(getQueryParams);

  const debouncedFetchNews = useCallback(
    debounce(() => dispatch(fetchNews()), SEARCH_DELAY),
    [dispatch, fetchNews]
  );

  const onSearch = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    dispatch(setQuery(value));
    debouncedFetchNews();
  };

  return (
    <TextField
      size="small"
      placeholder="Search arcticle"
      value={q}
      onChange={onSearch}
      InputProps={{
        startAdornment: <SearchIcon />,
      }}
    />
  );
};

export default Search;
