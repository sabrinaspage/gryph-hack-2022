import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import { Context } from "../states/Provider";
import Logo from "../images/logo.svg";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import QuestionCircle from "../images/question-circle.svg";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function NavBar() {
  const navigate = useNavigate();
  const [, dispatch] = useContext(Context);

  const onLogout = () => {
    dispatch({
      type: "LOG_OUT",
      userData: {},
    });
    navigate("/");
  };

  return (
    <AppBar
      position="static"
      style={{
        background: "transparent",
        boxShadow: "none",
      }}
    >
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box component="div">
          <img src={Logo} />
        </Box>
        <Box component="div" width={200}>
          <Grid container columns={3}>
            <Grid item xs={1}>
              <Box component="div">
                <img src={QuestionCircle} />
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Button
                color="inherit"
                onClick={onLogout}
                sx={{ color: "#F3694D", fontSize: 20, fontWeight: "bold" }}
              >
                Logout
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </AppBar>
  );
}
