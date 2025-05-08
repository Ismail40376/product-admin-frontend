import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { User } from "../../../../store/reducers/userSlice";

const UserMenu = (user: User) => {
  const [anchor, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button color="inherit" onClick={handleClick}>
        Hello, {user.username}
      </Button>
      <Menu anchorEl={anchor} open={Boolean(anchor)} onClose={handleClose} keepMounted>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default UserMenu;
