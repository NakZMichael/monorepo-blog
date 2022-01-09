import { green, purple } from '@mui/material/colors';
import { createTheme, responsiveFontSizes } from '@mui/material';

const getThemeOptions = (mode: 'dark' | 'light') => ({
  palette: {
    mode:mode||'light',
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
    fontSize:12,
    h1: {
      fontSize:'4rem',
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
})

export const getTheme =(mode:'dark'|'light')=>responsiveFontSizes(createTheme(getThemeOptions(mode)))

export type MyTheme = ReturnType<typeof getThemeOptions>;
