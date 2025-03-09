// styles/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // A nice blue for primary actions (customize as needed)
    },
    secondary: {
      main: '#dc004e', // A vibrant pink for secondary actions (customize as needed)
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Default MUI font (customize as needed)
  },
});

export default theme;