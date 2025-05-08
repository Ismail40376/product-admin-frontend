import { Button, Grid } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";

const MainLink = styled(RouterLink)(() => ({
  "color": "inherit",
  "textDecoration": "none",
  "$:hover": {
    color: "inherit",
  },
}));

const StaticToolbar = styled(Toolbar)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const AppToolbar: React.FC = () => {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" component="div">
            <MainLink to="/">SHOP</MainLink>
          </Typography>
          <Grid>
            <Button href="/register" color="inherit">
              Sign up
            </Button>
            <Button href="/login" color="inherit">
              Sign in
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>
      <StaticToolbar />
    </>
  );
};

export default AppToolbar;
