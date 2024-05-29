import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'EditorialNRegular, Arial, sans-serif',
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: 'EditorialNRegular, Arial, sans-serif',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: 'EditorialNRegular, Arial, sans-serif',
        },
      },
    },
  },
});

export default theme;
