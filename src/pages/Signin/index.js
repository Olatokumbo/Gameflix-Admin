import { TextField, Typography, Button, makeStyles } from "@material-ui/core";
import React, { useContext, useState } from "react";
import style from "./Signin.module.css";
import Logo from "../../assets/logo.png";
import axios from "axios";
import { AppContext } from "../../context/AppContext";

const useStyles = makeStyles({
  root: {
    background: "black",
  },
  input: {
    color: "white",
    width: 250,
    height: "auto",
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#F12424",
    },
  },
  btn: {
    backgroundColor: "#F12424",
    width: "100%",
    padding: 10,
    marginTop: 5,
    "&:hover": {
      backgroundColor: "#F12424",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#F12424",
    },
  },
});

const Signin = () => {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const {
    auth: [_isAuth, setIsAuth],
  } = useContext(AppContext);

  const signinForm = () => {
    console.log("Signin");
    axios
      .post(
        "http://localhost:8000/admin/signin",
        { username, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setError("");
        localStorage.setItem("token", JSON.stringify(response.data.token));
        setIsAuth(true);
      })
      .catch((err) => {
        setError(err.response?.data.message);
      });
  };

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
              onChange={(e) => setUsername(e.target.value)}
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
            <Button
              disabled={!(username && password)}
              className={classes.btn}
              onClick={signinForm}
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
            <Typography className={style.errorMsg}>{error}</Typography>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
