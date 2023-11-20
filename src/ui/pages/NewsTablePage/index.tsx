import { useState } from 'react';
import { styled, Button, Stack, Typography } from '@mui/material';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import NewsTable from '../../components/NewsTable';
import { createFiltersButtonStyles, createHeaderStyles } from './styles';
import Search from '../../components/Search';
import Filters from '../../components/Filters';

const FiltersButton = styled(Button)(createFiltersButtonStyles);
const Header = styled(Typography)(createHeaderStyles);

const NewsTablePage = () => {
  const [showFilters, setShowFilters] = useState<boolean>(false);

  const toggleFilters = () => setShowFilters((prev) => !prev);

  return (
    <Stack gap="20px">
      <Stack direction="row" justifyContent="space-between">
        <Header>Formula Top Headlines</Header>

        <Stack direction="row" gap="20px">
          <Search />

          <FiltersButton
            disableElevation
            startIcon={<FilterAltOutlinedIcon />}
            onClick={toggleFilters}
          >
            Filters
          </FiltersButton>
        </Stack>
      </Stack>

      {showFilters && <Filters />}

      <NewsTable />
    </Stack>
  );
};

export default NewsTablePage;
