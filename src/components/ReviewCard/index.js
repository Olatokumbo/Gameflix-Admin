import React from "react";
import { Avatar, IconButton, Typography } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import style from "./ReviewCard.module.css";

const ReviewCard = () => {
  return (
    <div className={style.reviewCard}>
      <Avatar sx={{ width: 30, height: 30 }}>D0</Avatar>
      <div className={style.main}>
        <div>
          <Typography className={style.username}>david0</Typography>
          <Typography className={style.comment}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
        </div>
        <IconButton color="secondary">
          <Delete />
        </IconButton>
      </div>
    </div>
  );
};

export default ReviewCard;
