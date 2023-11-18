import { createTheme } from '@mui/material';
import MuiCssBaseline from './muiComponents/MuiCssBaseline';

const theme = createTheme({
  components: {
    MuiCssBaseline,
  },
  typography: {
    fontFamily: 'Noto Sans',
  },
});

export default theme;
