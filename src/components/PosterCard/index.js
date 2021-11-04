import React from "react";
import style from "./PosterCard.module.css";

const PosterCard = ({ id }) => {
  return (
    <div className={style.posterCard}>
      <img
        className={style.posterImage}
        src={`${process.env.REACT_APP_API_URL}/admin/game/image/${id}`}
        alt="poster"
      />
    </div>
  );
};

export default PosterCard;
