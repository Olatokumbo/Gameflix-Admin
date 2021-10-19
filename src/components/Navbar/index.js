import React from "react";
import style from "./Navbar.module.css";

import { ExitToApp } from "@material-ui/icons";
import Logo from "../../assets/logo.png";
import { IconButton } from "@material-ui/core";
const Navbar = () => {
  return (
    <div className={style.navbar}>
      <img className={style.logo} src={Logo} alt="logo" />
      <IconButton color="secondary" size="medium">
        <ExitToApp />
      </IconButton>
    </div>
  );
};

export default Navbar;
