import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Avatar, Box, Button, Container, Grid, Link, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const Register = () => {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState(prev => ({ ...prev, [name]: value }));
  };

  const submitFormHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting", state);
  };

  return (
    <Container
      component="section"
      maxWidth="xs"
      sx={{
        mt: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondry.main" }}>
        <LockOutlinedIcon />
      </Avatar>

      <Typography component="h1" variant="h5">
        Sign up
      </Typography>

      <Box component="form" onSubmit={submitFormHandler} noValidate sx={{ mt: 1, width: "100%" }}>
        <Grid container spacing={2}>
          <Grid size={12}>
            <TextField
              required
              fullWidth
              name="username"
              label="Username"
              variant="outlined"
              value={state.username}
              onChange={inputChangeHandler}
            />
          </Grid>
          <Grid size={12}>
            <TextField
              required
              fullWidth
              name="email"
              label="Email"
              type="email"
              variant="outlined"
              value={state.email}
              onChange={inputChangeHandler}
            />
          </Grid>
          <Grid size={12}>
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              variant="outlined"
              value={state.password}
              onChange={inputChangeHandler}
            />
          </Grid>
        </Grid>

        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          Sign up
        </Button>

        <Grid container justifyContent="flex-end">
          <Grid>
            <Link component={RouterLink} variant="body2" to="/login">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Register;
