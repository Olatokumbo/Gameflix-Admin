import React from "react";
import style from "./Home.module.css";
import { Button, makeStyles } from "@material-ui/core";

import Navbar from "../../components/Navbar";
import PosterCard from "../../components/PosterCard";

const useStyles = makeStyles({
  btn: {
    backgroundColor: "#F12424",
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

const Home = () => {
  const classes = useStyles();
  return (
    <div style={{ backgroundColor: "black", height: "100vh" }}>
      <Navbar />
      <div className={style.home}>
        <Button className={classes.btn} variant="contained" color="primary">
          Add Game
        </Button>
        <div className={style.postersMain}>
          <PosterCard />
          <PosterCard />
          <PosterCard />
          <PosterCard />
          <PosterCard />
          <PosterCard />
          <PosterCard />
          <PosterCard />
          <PosterCard />
          <PosterCard />
          <PosterCard />
          <PosterCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
