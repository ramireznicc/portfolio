import { createTheme } from "@mui/material/styles";

export const Theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#e3ee81",
    },
    secondary: {
      main: "#282828",
    },
    background: {
      default: "#151515",
      paper: "#282828",
    },
    text: {
      primary: "#eeeeee",
    },
  },
  typography: {
    fontFamily: "Space Mono",
  },
});
