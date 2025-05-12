import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../store";
import { logoutUserAsync, User } from "../../../../store/actions/usersActions";

const UserMenu = (user: User) => {
  const [anchor, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useDispatch<AppDispatch>();
  const handleLogout = () => {
    dispatch(logoutUserAsync());
  };

  return (
    <>
      <Button color="inherit" onClick={handleClick}>
        Hello, {user.username}
      </Button>
      <Menu anchorEl={anchor} open={Boolean(anchor)} onClose={handleClose} keepMounted>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default UserMenu;
