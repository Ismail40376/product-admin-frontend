import LockOpenIcon from "@mui/icons-material/LockOpen";
import { Avatar, Box, Button, Container, Grid, Link, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const submitFormHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Loggin in with", form);
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{ mt: 8, display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOpenIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
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
              value={form.username}
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
              value={form.password}
              onChange={inputChangeHandler}
            />
          </Grid>
        </Grid>

        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          Sign in
        </Button>

        <Grid container justifyContent="flex-end">
          <Grid>
            <Link component={RouterLink} to="/register">
              Or sign up
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Login;
