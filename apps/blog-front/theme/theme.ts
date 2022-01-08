import { green, purple } from '@mui/material/colors';
import { createTheme, responsiveFontSizes } from '@mui/material';

// storybookでStorybook Addon Material-UIが使えるように
// themeOptionsとthemeで分けている
// 参考: https://storybook.js.org/addons/storybook-addon-material-ui/
export const themeOptions = {
  palette: {
    common:{
      white:'#fff',
      black:"#000"
    },
    primary: {
      light: green[100],
      main: green[600],
      dark:green[900],
    },
    secondary: {
      light: purple[100],
      main: purple[600],
      dark:purple[900],
    },
    background:{
      // default:'#222'
    },
    w:{
      main:'#fff'
    },
  },
  typography: {
    h1: {
      fontWeight:600,
    },
    h2: {
      fontWeight:600,
    },
    h3: {
      fontWeight:600,
    },
    body1:{
      fontSize: '1.1rem',
      '@media (min-width:600px)': {
        fontSize: '1.2rem',
      },
    },
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      "Arial",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"Hiragino Kaku Gothic ProN"',
      '"Hiragino Sans"',
      'Meiryo', 
      'sans-serif',
    ].join(',')
  },
}

const theme_ =  createTheme(themeOptions);
export const theme = responsiveFontSizes(theme_);

theme.typography.h3 = {
  fontSize: '6rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
};

export type MyTheme = typeof theme;

export default theme;