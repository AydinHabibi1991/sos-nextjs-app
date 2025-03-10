// styles/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light', // Force light mode regardless of system settings
    primary: {
      main: '#1976d2', // A nice blue for primary actions (customize as needed)
    },
    secondary: {
      main: '#dc004e', // A vibrant pink for secondary actions (customize as needed)
    },
  },
  typography: {
    fontFamily: 'IRANSansXV, Roboto, Arial, sans-serif',
  },
});

export default theme;