import React from "react";
import style from "./PosterCard.module.css";

const PosterCard = ({ id }) => {
  return (
    <div className={style.posterCard}>
      <img
        className={style.posterImage}
        src={`http://localhost:8000/admin/game/image/${id}`}
        alt="poster"
      />
    </div>
  );
};

export default PosterCard;
