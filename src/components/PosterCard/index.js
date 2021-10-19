import React from "react";
import style from "./PosterCard.module.css";

import poster from "../../assets/gamePoster.jpg";

const PosterCard = () => {
  return (
    <div className={style.posterCard}>
      <img className={style.posterImage} src={poster} alt="poster" />
    </div>
  );
};

export default PosterCard;
