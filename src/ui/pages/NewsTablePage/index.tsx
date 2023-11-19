import { useDispatch, useSelector } from 'react-redux';
import { Stack } from '@mui/material';
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

const NewsTablePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { category, country } = useSelector(getQueryParams);

  const categories = Object.entries(Categories);
  const countries = Object.entries(Countries);

  return (
    <Stack gap="16px">
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

      <NewsTable />
    </Stack>
  );
};

export default NewsTablePage;
