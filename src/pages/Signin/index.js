import { TextField, Typography, Button, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import style from "./Signin.module.css";
import Logo from "../../assets/logo.png";

const useStyles = makeStyles({
  root: {
    background: "black",
  },
  input: {
    color: "white",
    width: 250,
    height: "auto",
  },
});
const Signin = () => {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className={style.signin}>
      <div className={style.left}>
        <div className={style.overlay}></div>
      </div>
      <div className={style.right}>
        <img className={style.logo} src={Logo} alt="logo" />
        <div className={style.main}>
          <Typography className={style.header}>Sign in</Typography>
          <form className={style.signinForm}>
            <TextField
              className={classes.input}
              type="text"
              variant="standard"
              placeholder="Username"
              margin="normal"
              color="primary"
              InputProps={{
                className: classes.input,
              }}
              onChange={(e) => setPassword(e.target.value)}
              value={username}
              fullWidth
            />
            <TextField
              className={classes.input}
              type="password"
              variant="standard"
              placeholder="Password"
              margin="normal"
              color="primary"
              InputProps={{
                className: classes.input,
              }}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              fullWidth
            />
            <Button className={style.btn} variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
