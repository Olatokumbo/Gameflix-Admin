import React from "react";
import style from "./GameInfo.module.css";
import { StarRounded } from "@material-ui/icons";
import { Button, makeStyles } from "@material-ui/core";

import bg from "../../assets/bg2.jpg";
import { Typography } from "@material-ui/core";
import ReviewCard from "../../components/ReviewCard";
import Map from "../../components/Map";

const useStyles = makeStyles({
  dltBtn: {
    backgroundColor: "#F12424",
    color: "white",
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

const GameInfo = () => {
  const classes = useStyles();
  return (
    <div className={style.gameMain}>
      <div className={style.left}>
        <img src={bg} className={style.wallpaper} alt="wallpaper" />
        <div className={style.mainContent}>
          <div className={style.header}>
            <div>
              <Typography className={style.title}>
                Call of Duty Cold War
              </Typography>
              <div className={style.ratingsContainer}>
                <StarRounded />
                <Typography className={style.rating}>5.6</Typography>
              </div>
            </div>
            <div className={style.mainControllers}>
              <Button variant="contained">Edit</Button>
              <Button variant="contained" className={classes.dltBtn}>
                Delete
              </Button>
            </div>
          </div>
          <Typography className={style.reviewsTitle}>Reviews</Typography>
          <div className={style.reviews}>
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </div>
        </div>
      </div>
      <div className={style.right}>
        <Map coords={{ lat: 6.54881, lng: 3.38683 }}/>
      </div>
    </div>
  );
};

export default GameInfo;
