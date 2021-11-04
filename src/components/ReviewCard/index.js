import React from "react";
import { Avatar, IconButton, Typography } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { StarRounded } from "@material-ui/icons";
import axios from "axios";
import style from "./ReviewCard.module.css";

const ReviewCard = ({ review, gameId }) => {
  const deleteReview = () => {
    let token = localStorage.getItem("token");
    token = JSON.parse(token);
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/admin/game/${gameId}/review/delete`,
        {
          reviewId: review._id,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((_data) => {
        alert("Comment Deleted");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
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
        <IconButton
          color="secondary"
          className={style.iconButton}
          onClick={deleteReview}
        >
          <Delete />
        </IconButton>
      </div>
    </div>
  );
};

export default ReviewCard;
