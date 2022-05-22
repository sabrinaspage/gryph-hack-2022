import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { SvgIcon, ThemeProvider } from "@material-ui/core";
import theme from "../styles/theme";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import Background from "../images/bluegradient-1080p.png";
import Grid from "@mui/material/Grid";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import TabSection, { Section } from "../components/TabSection";
import { useState } from "react";

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
              Welcome to <br />
              <strong>Script</strong>
            </Typography>
            <Box
              sx={{
                borderColor: "divider",
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
                    mr: 10,
                  }}
                  label="Login"
                  onClick={() => setSection("login")}
                />
                <Tab
                  sx={{
                    borderBottom: "black",
                    borderStyle: "solid",
                  }}
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
            backgroundImage: `url(${Background})`,
            backgroundSize: "100%",
          },
        }}
      />
      <React.Fragment key={"right"}>
        <Box
          pr={8}
          sx={{
            display: "flex",
            justifyContent: "right",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <SvgIcon
            style={{
              cursor: "pointer",
              transform: "scale(4.0)",
              color: "white",
            }}
            onClick={toggleDrawer(true)}
            component={ArrowBackIosNewIcon}
          />
        </Box>
        <Drawer
          variant="persistent"
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
          {<DrawerContent />}
        </Drawer>
      </React.Fragment>
    </ThemeProvider>
  );
}
