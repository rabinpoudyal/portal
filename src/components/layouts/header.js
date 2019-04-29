import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { Link } from "react-router-dom";

const Header = () => (
  <div style={{ marginBottom: "80px" }}>
    <AppBar position="fixed">
      <Toolbar variant="dense">
        <IconButton color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="headline" color="inherit">
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            Headlines App
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
);

export default Header;
