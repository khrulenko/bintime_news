import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Stack } from '@mui/material';
import Dropdown from '../Dropdown';
import { AppDispatch, EmptyStrOr } from '../../../common/types';
import {
  getQueryParams,
  setCategory,
  setCountry,
} from '../../../data/slices/queryParamsSlice';
import { Categories, Countries } from '../../../common/constants';
import { fetchNews } from '../../../data/thunks';

const Filters = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { category, country } = useSelector(getQueryParams);

  const categories = useMemo(() => Object.entries(Categories), []);
  const countries = useMemo(() => Object.entries(Countries), []);

  const handleCategoryChange = (value: EmptyStrOr<Categories>) => {
    dispatch(setCategory(value));
    dispatch(fetchNews());
  };
  const handleCountryChange = (value: EmptyStrOr<Countries>) => {
    dispatch(setCountry(value));
    dispatch(fetchNews());
  };

  return (
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
  );
};

export default Filters;
