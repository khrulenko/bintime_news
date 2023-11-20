import { createTheme } from '@mui/material';
import MuiCssBaseline from './muiComponents/MuiCssBaseline';
import MuiLink from './muiComponents/MuiLInk';
import MuiButton from './muiComponents/MuiButton';
import MuiTextField from './muiComponents/MuiTextField';
import MuiTablePagination from './muiComponents/MuiTablePagination';

const theme = createTheme({
  components: {
    MuiCssBaseline,
    MuiLink,
    MuiButton,
    MuiTextField,
    MuiTablePagination,
  },
  palette: {
    primary: {
      main: '#04A9BF',
    },
    secondary: {
      main: '#EFEFF3',
    },
    text: {
      primary: '#212932',
    },
  },
  typography: {
    fontFamily: 'Noto Sans',
  },
});

export default theme;
