import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: { minWidth: 200 },
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
