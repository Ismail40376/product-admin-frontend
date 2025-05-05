import { AppBar, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import { Link as RouterLink } from "react-router-dom";

const MainLink = styled(RouterLink)(() => ({
  "color": "inherit",
  "textDecoration": "none",
  "$:hover": {
    color: "inherit",
  },
}));

const StatikToolbar = styled(Toolbar)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const AppToolbar = () => {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div">
            <MainLink to="/">SHOP</MainLink>
          </Typography>

          <Button href="/register">Sign up</Button>
        </Toolbar>
      </AppBar>
      <StatikToolbar />
    </>
  );
};

export default AppToolbar;
