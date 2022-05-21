import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import createBreakpoints from "@mui/system/createTheme/createBreakpoints";

const breakpoints = createBreakpoints({});

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: { maxWidth: 300 },
        outlined: {
          height: 50,
          fontSize: 16,
          borderWidth: 2,
          borderRadius: 8,
          [breakpoints.up("xs")]: {
            minWidth: 200,
            backgroundColor: "white",
          },
          [breakpoints.up("sm")]: {
            minWidth: 250,
            backgroundColor: "white",
          },
          [breakpoints.up("md")]: {
            minWidth: 250,
            backgroundColor: "white",
          },
        },
      },
    },
  },
  palette: {
    primary: {
      main: red[500],
    },
  },
});

export default theme;
