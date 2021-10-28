import React, { useContext } from "react";
import style from "./Navbar.module.css";

import { ExitToApp } from "@material-ui/icons";
import Logo from "../../assets/logo.png";
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
const Navbar = () => {
  const {
    auth: [isAuth, setIsAuth],
  } = useContext(AppContext);

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuth(false);
  };

  return (
    <div className={style.navbar}>
      <Link to="/">
        <img className={style.logo} src={Logo} alt="logo" />
      </Link>
      <IconButton color="secondary" size="medium" onClick={logout}>
        <ExitToApp />
      </IconButton>
    </div>
  );
};

export default Navbar;
