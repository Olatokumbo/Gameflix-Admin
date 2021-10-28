import React from "react";
import style from "./Home.module.css";
import { Button, makeStyles, CircularProgress } from "@material-ui/core";
import PosterCard from "../../components/PosterCard";
import { Link, useHistory } from "react-router-dom";
import useFetchGames from "../../hooks/useFetchGames";

const useStyles = makeStyles({
  btn: {
    backgroundColor: "#F12424",
    padding: 10,
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

const Home = () => {
  const classes = useStyles();
  const history = useHistory();
  const [games, loading] = useFetchGames();
  return (
    <div style={{ backgroundColor: "black", height: "100vh" }}>
      <div className={style.home}>
        <Button
          onClick={() => history.push("/add")}
          className={classes.btn}
          variant="contained"
          color="primary"
        >
          Add Game
        </Button>

        <div className={style.postersMain}>
          {loading ? (
            <CircularProgress />
          ) : (
            games.map((game) => (
              <Link key={game._id} to={`/game/${game._id}`}>
                <PosterCard game={game} />
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
