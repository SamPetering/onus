import { grey, lightBlue } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[900],
      contrastText: grey[300],
    },
    secondary: {
      main: lightBlue[500],
      contrastText: grey[300],
    },
    background: {
      default: grey[900],
      paper: grey['A400'],
    },
    text: {
      primary: grey[300],
      secondary: grey[400],
    },
  },
});

theme.props = {
  MuiInputLabel: {},
};

theme.overrides = {
  MuiInput: {
    input: {
      textAlign: 'center',
    },
  },
  MuiButton: {
    root: {
      fontWeight: 'bold',
      borderRadius: '5px',
      padding: '8px',
    },
  },
  MuiListItem: {
    dense: {
      paddingTop: '0',
      paddingBottom: '0',
    },
  },
};

export default theme;
