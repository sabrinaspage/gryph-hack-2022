import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import GoToArrow from "../images/GoToArrow.svg";
import { ThemeProvider } from "@material-ui/core";
import Logo from "../images/logo.svg";
import theme from "../styles/theme";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import Grid from "@mui/material/Grid";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import TabSection, { Section } from "../components/TabSection";
import { useState } from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import LandingGraphic from "../images/landing_graphic-01.png";
import HomePageCommentary from "../components/HomePageCommentary";

const DrawerContent = () => {
  const [section, setSection] = useState<Section>("login");

  return (
    <Box role="presentation">
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid item xs={12}>
          <Box
            sx={{
              pt: 2,
              my: 8,
              mx: 4,
            }}
          >
            <Typography variant="h2">
              Welcome to
              <img src={Logo} />
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Tabs aria-label="basic tabs example">
                <Tab
                  sx={{
                    borderBottom: "black",
                    borderStyle: "solid",
                    mr: 0,
                    width: 300,
                    ...(section === "login" && { borderBottom: "red" }),
                    ...(section === "register" && {
                      borderBottom: "#C4C4C4",
                      color: "#C4C4C4",
                    }),
                  }}
                  label="Login"
                  value={section}
                  onClick={() => setSection("login")}
                />
                <Tab
                  sx={{
                    borderBottom: "black",
                    borderStyle: "solid",
                    width: 300,
                    ...(section === "register" && { borderBottom: "red" }),
                    ...(section === "login" && {
                      borderBottom: "#C4C4C4",
                      color: "#C4C4C4",
                    }),
                  }}
                  value={section}
                  label="Register"
                  onClick={() => setSection("register")}
                />
              </Tabs>
              <TabSection section={section} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default function Homepage() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, ["right"]: open });
    };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: {
            backgroundImage: `url(${LandingGraphic})`,
            backgroundSize: "105%",
          },
        }}
      />
      <HomePageCommentary />
      <React.Fragment key={"right"}>
        <Box
          pr={8}
          sx={{
            display: "flex",
            justifyContent: "right",
            alignItems: "end",
            height: "100vh",
            pb: 5,
            zIndex: 10,
          }}
        >
          <Box
            sx={{ cursor: "pointer", transform: "scale(1.0)" }}
            component="img"
            onClick={toggleDrawer(true)}
            src={GoToArrow}
          />
        </Box>
        <Drawer
          transitionDuration={400}
          PaperProps={{
            sx: { width: "40%" },
          }}
          BackdropProps={{
            sx: { background: "transparent" },
          }}
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer(false)}
        >
          <ClickAwayListener onClickAway={() => toggleDrawer(false)}>
            <DrawerContent />
          </ClickAwayListener>
        </Drawer>
      </React.Fragment>
    </ThemeProvider>
  );
}
