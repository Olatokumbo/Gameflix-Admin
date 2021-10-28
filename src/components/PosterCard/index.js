import React from "react";
import style from "./PosterCard.module.css";

import poster from "../../assets/gamePoster.jpg";

const PosterCard = ({ game }) => {
  return (
    <div className={style.posterCard}>
      <img className={style.posterImage} src={game.posterURL} alt="poster" />
    </div>
  );
};

export default PosterCard;
