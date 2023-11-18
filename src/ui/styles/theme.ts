import { createTheme } from '@mui/material';
import MuiCssBaseline from './muiComponents/MuiCssBaseline';
import MuiLink from './muiComponents/MuiLInk';

const theme = createTheme({
  components: {
    MuiCssBaseline,
    MuiLink,
  },
  palette: {
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
