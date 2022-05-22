import React, { useState, useContext } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { Context } from "../states/Provider";
import axios from "axios";

export type Section = "login" | "register";

interface TabSectionProps {
  section: Section;
}

const Login = () => {
  const navigate = useNavigate();
  const [authError, setAuthError] = useState(false);
  const [, dispatch] = useContext(Context);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    axios
      .post("https://gryph-hack-2022.herokuapp.com/users/login", {
        email: data.get("email"),
        password: data.get("password"),
      })
      .then((res: any) => {
        setAuthError(false);
        dispatch({
          type: "LOG_IN",
          userData: res.data,
        });
        navigate("/");
      })
      .catch(() => {
        setAuthError(true);
      });
  };
  return (
    <Grid item xs={12}>
      <Box
        sx={{
          my: 2,
          mx: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Log In
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            error={authError}
            helperText={authError && "Invalid email or password"}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            error={authError}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Box sx={{ mt: 3, mb: 2 }}>
            <Button type="submit" fullWidth variant="contained" sx={{ py: 2 }}>
              Sign In
            </Button>
          </Box>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/registration" variant="body2">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
};

const Register = () => {
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    axios
      .post("https://gryph-hack-2022.herokuapp.com/users", {
        name: data.get("name"),
        type: 0,
        email: data.get("email"),
        password: data.get("password"),
      })
      .then(() => {
        setEmailError(false);
        navigate("/login");
      })
      .catch(() => {
        setEmailError(true);
      });
  };
  return (
    <Grid item xs={12}>
      <Box
        sx={{
          my: 2,
          mx: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Username"
            name="name"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            error={emailError}
            helperText={emailError && "Email already exists"}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Box sx={{ mt: 3, mb: 2 }}>
            <Button type="submit" fullWidth variant="contained" sx={{ py: 2 }}>
              Sign Up
            </Button>
          </Box>
          <Grid container>
            <Grid item>
              <Link href="/login" variant="body2">
                Have an account? Log in!
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
};

const TabSection = ({ section }: TabSectionProps) => {
  if (section === "login") return <Login />;
  if (section === "register") return <Register />;
  return null;
};

export default TabSection;
