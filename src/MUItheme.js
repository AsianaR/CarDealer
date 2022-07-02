import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#f5f7f9',
    },
    secondary: {
      main: '#2e6ab0',
    },
    background: {
      default: '#42DE27',
      paper: '#171719',
    },
    divider: '#cecece',
    text: {
      primary: '#f5f7f9',
      secondary: '#eeeeee',
      disabled: 'rgba(222,214,214,0.5)',
      hint: 'rgba(241,233,233,0.5)',
    },
    warning: {
      main: '#e7c100',
    },
  },
});