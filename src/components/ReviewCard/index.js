import React from "react";
import { Avatar, IconButton, Typography } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { StarRounded } from "@material-ui/icons";
import style from "./ReviewCard.module.css";

const ReviewCard = ({ review }) => {
  return (
    <div className={style.reviewCard}>
      <Avatar sx={{ width: 30, height: 30 }} />
      <div className={style.main}>
        <div className={style.content}>
          <div className={style.topContent}>
            <Typography className={style.username}>
              {review.username}
            </Typography>
            <div className={style.ratingsMain}>
              <StarRounded className={style.star} />
              <Typography className={style.rating}>{review.rating}</Typography>
            </div>
          </div>
          <Typography className={style.comment}>{review.comment}</Typography>
        </div>
        <IconButton color="secondary" className={style.iconButton}>
          <Delete />
        </IconButton>
      </div>
    </div>
  );
};

export default ReviewCard;
