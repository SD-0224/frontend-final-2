import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 900,
      lg: 1300,
      xl: 1920,
    },
  },
  spacing: 6,
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#1B4B66",
    },
    secondary: {
      main: "#d5e9f5",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
