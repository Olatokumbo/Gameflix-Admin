import React from "react";
import { Avatar, IconButton, Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { Delete } from "@material-ui/icons";
import style from "./ReviewCard.module.css";

const ReviewCard = ({ review }) => {
  return (
    <div className={style.reviewCard}>
      <Avatar sx={{ width: 30, height: 30 }} />
      <div className={style.main}>
        <div className={style.content}>
          <Typography className={style.username}>{review.userId}</Typography>
          <Rating value={review.rating} readOnly />
          <Typography className={style.comment}>{review.comment}</Typography>
        </div>
        <IconButton color="secondary">
          <Delete />
        </IconButton>
      </div>
    </div>
  );
};

export default ReviewCard;
