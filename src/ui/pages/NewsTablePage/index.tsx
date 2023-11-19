import { ChangeEvent, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled, Button, Stack, Typography, TextField } from '@mui/material';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import SearchIcon from '@mui/icons-material/Search';
import NewsTable from '../../components/NewsTable';
import {
  getQueryParams,
  setCategory,
  setCountry,
  setQuery,
} from '../../../data/slices/queryParamsSlice';
import { Categories, Countries, SEARCH_DELAY } from '../../../common/constants';
import Dropdown from '../../components/Dropdown';
import { AppDispatch, EmptyStrOr, NullOr } from '../../../common/types';
import { fetchNews } from '../../../data/thunks';
import { createFiltersButtonStyles, createHeaderStyles } from './styles';

const FiltersButton = styled(Button)(createFiltersButtonStyles);
const Header = styled(Typography)(createHeaderStyles);

const NewsTablePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { category, country } = useSelector(getQueryParams);
  const [showFilters, setShowFilters] = useState<boolean>(false);

  const categories = useMemo(() => Object.entries(Categories), []);
  const countries = useMemo(() => Object.entries(Countries), []);
  let timerId: NullOr<number> = null;

  const debouncedSetQuery = (value: string) => {
    if (timerId) clearTimeout(timerId);

    timerId = setTimeout(() => {
      dispatch(setQuery(value));
      dispatch(fetchNews());
    }, SEARCH_DELAY);
  };
  const onSearch = (event: ChangeEvent<HTMLInputElement>) =>
    debouncedSetQuery(event.target.value);
  const toggleFilters = () => setShowFilters((prev) => !prev);
  const handleCategoryChange = (value: EmptyStrOr<Categories>) => {
    dispatch(setCategory(value));
    dispatch(fetchNews());
  };
  const handleCountryChange = (value: EmptyStrOr<Countries>) => {
    dispatch(setCountry(value));
    dispatch(fetchNews());
  };

  return (
    <Stack gap="20px">
      <Stack direction="row" justifyContent="space-between">
        <Header>Formula Top Headlines</Header>

        <Stack direction="row" gap="20px">
          <TextField
            size="small"
            placeholder="Search arcticle"
            onChange={onSearch}
            InputProps={{
              startAdornment: <SearchIcon />,
            }}
          />

          <FiltersButton
            disableElevation
            startIcon={<FilterAltOutlinedIcon />}
            onClick={toggleFilters}
          >
            Filters
          </FiltersButton>
        </Stack>
      </Stack>

      {showFilters && (
        <Stack direction="row" gap="16px">
          <Dropdown
            name="Category"
            data={categories}
            value={category}
            onChange={handleCategoryChange}
          />

          <Dropdown
            name="Country"
            data={countries}
            value={country}
            onChange={handleCountryChange}
          />
        </Stack>
      )}

      <NewsTable />
    </Stack>
  );
};

export default NewsTablePage;
