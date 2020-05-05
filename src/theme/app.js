import { red } from '@material-ui/core/colors'
import { createMuiTheme } from '@material-ui/core/styles'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#E81A7B',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    text: {
      main: '#FFF',
    },
    background: {
      default: 'rgb(239,239,239)',
    },
  },
  typography: {
    fontFamily: [
      'ProximaNova',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
})

// theme.typography.h1 = {
//   fontSize: '3rem',
//   '@media (min-width:600px)': {
//     fontSize: '4.5rem',
//   },
//   [theme.breakpoints.up('md')]: {
//     fontSize: '6rem',
//   },
// }

// theme.typography.h2 = {
//   fontSize: '2rem',
//   fontWeight: 300,
//   '@media (min-width:600px)': {
//     fontSize: '2.5rem',
//   },
//   [theme.breakpoints.up('md')]: {
//     fontSize: '2.75rem',
//   },
// }

// theme.typography.h3 = {
//   fontWeight: 300,
//   lineHeight: '4rem',
// }

// theme.typography.h5 = {
//   fontSize: '.8rem',
//   [theme.breakpoints.up('md')]: {
//     fontSize: '1.5rem',
//   },
// }

export default theme
