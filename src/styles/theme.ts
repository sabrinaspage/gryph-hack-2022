import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import createBreakpoints from "@mui/system/createTheme/createBreakpoints";

const breakpoints = createBreakpoints({});

const theme = createTheme({
  components: {},
  palette: {
    primary: {
      main: red[500],
    },
  },
});

export default theme;
