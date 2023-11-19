import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled, Button, Stack, Typography } from '@mui/material';
import NewsTable from '../../components/NewsTable';
import {
  getQueryParams,
  setCategory,
  setCountry,
} from '../../../data/slices/queryParamsSlice';
import { Categories, Countries } from '../../../common/constants';
import Dropdown from '../../components/Dropdown';
import { AppDispatch, EmptyStrOr } from '../../../common/types';
import { fetchNews } from '../../../data/thunks';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { createFiltersButtonStyles, createHeaderStyles } from './styles';

const FiltersButton = styled(Button)(createFiltersButtonStyles);
const Header = styled(Typography)(createHeaderStyles);

const NewsTablePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { category, country } = useSelector(getQueryParams);
  const [showFilters, setShowFilters] = useState<boolean>(false);

  const categories = Object.entries(Categories);
  const countries = Object.entries(Countries);

  const toggleFilters = () => setShowFilters((prev) => !prev);

  return (
    <Stack gap="20px">
      <Stack direction="row" justifyContent="space-between">
        <Header>Formula Top Headlines</Header>

        <FiltersButton
          disableElevation
          startIcon={<FilterAltOutlinedIcon />}
          onClick={toggleFilters}
        >
          Filters
        </FiltersButton>
      </Stack>

      {showFilters && (
        <Stack direction="row" gap="16px">
          <Dropdown
            name="Category"
            data={categories}
            value={category}
            onChange={(value: EmptyStrOr<Categories>) => {
              dispatch(setCategory(value));
              dispatch(fetchNews());
            }}
          />

          <Dropdown
            name="Country"
            data={countries}
            value={country}
            onChange={(value: EmptyStrOr<Countries>) => {
              dispatch(setCountry(value));
              dispatch(fetchNews());
            }}
          />
        </Stack>
      )}

      <NewsTable />
    </Stack>
  );
};

export default NewsTablePage;
