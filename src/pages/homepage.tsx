import ThemeProvider from "@material-ui/styles/ThemeProvider";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/styled-engine/GlobalStyles";
import Background from "../images/bluegradient-1080p.png";
import LogoPlacement from "../images/hack-01 1.png";
import theme from "../styles/theme";

const Homepage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: {
            backgroundImage: `url(${Background})`,
            backgroundSize: "100%",
          },
        }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box component="img" src={LogoPlacement} />
      </Box>
    </ThemeProvider>
  );
};

export default Homepage;
