import React from "react";
import style from "./GameInfo.module.css";
import { Button, CircularProgress, makeStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import ReviewCard from "../../components/ReviewCard";
import Map from "../../components/Map";
import { useHistory } from "react-router-dom";
import useFetchGameInfo from "../../hooks/useFetchGameInfo";

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

const GameInfo = ({ match: { params } }) => {
  const classes = useStyles();
  const history = useHistory();
  const [game, loading] = useFetchGameInfo(params.id);
  return (
    <div className={style.gameMain}>
      <div className={style.left}>
        <img
          src={`http://localhost:8000/admin/game/image/${game.coverURL}`}
          className={style.wallpaper}
          alt="wallpaper"
        />
        <div className={style.mainContent}>
          <div className={style.header}>
            <div>
              <Typography className={style.title}>{game.title}</Typography>
              <div className={style.ratingsContainer}>
                {/* <StarRounded /> */}
                <Typography className={style.rating}>{game.genre}</Typography>
              </div>
            </div>
            <div className={style.mainControllers}>
              <Button
                variant="contained"
                onClick={() => history.push(`/game/${game._id}/edit`)}
              >
                Edit
              </Button>
              <Button variant="contained" className={classes.dltBtn}>
                Delete
              </Button>
            </div>
          </div>
          <Typography className={style.reviewsTitle}>Reviews</Typography>
          <div className={style.reviews}>
            {loading ? (
              <CircularProgress />
            ) : game?.reviews?.length > 0 ? (
              game.reviews.map((review) => (
                <ReviewCard key={review._id} review={review} />
              ))
            ) : (
              <Typography className={style.noReviews}>No reviews</Typography>
            )}
          </div>
        </div>
      </div>
      <div className={style.right}>
        <Map coords={{ lat: 55.3781, lng: -6.436 }} reviews={game.reviews} />
      </div>
    </div>
  );
};

export default GameInfo;
