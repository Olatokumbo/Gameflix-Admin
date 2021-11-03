import React, { useState, useEffect } from "react";
import {
  TextField,
  Typography,
  Button,
  makeStyles,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from "@material-ui/core";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import useFetchGameInfo from "../../hooks/useFetchGameInfo";
import style from "./EditGame.module.css";

const useStyles = makeStyles({
  input: {
    color: "white",
    width: 250,
    height: "auto",
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#F12424",
    },
  },
  btn: {
    backgroundColor: "#F12424",
    width: "100%",
    padding: 10,
    marginTop: 15,
    // marginBottom: 10,
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

const EditGame = () => {
  const { id } = useParams();
  const history = useHistory();
  const [game, loading] = useFetchGameInfo(id);
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("shooter");
  const [lloading, setlLoading] = useState(false);

  useEffect(() => {
    console.log("LOADING>>>>>>");
    setTitle(game?.title);
    setGenre(game?.genre);
    // return () => {
    //   cleanup;
    // };
  }, [game]);

  const editGame = () => {
    let token = localStorage.getItem("token");
    token = JSON.parse(token);
    setlLoading(true);
    axios
      .post(
        `http://localhost:8000/admin/game/${id}/edit`,
        {
          title,
          genre,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setlLoading(false);
        alert("Game has been updated");
        history.push(`/game/${id}`);
      })
      .catch((err) => {
        setlLoading(false);
        alert(err.message);
      });
  };

  return (
    <div className={style.editGame}>
      <div className={style.mainContent}>
        <Typography className={style.header}>Edit Game</Typography>
        <form className={style.editForm}>
          <TextField
            className={classes.input}
            type="text"
            variant="standard"
            placeholder="Title"
            margin="normal"
            color="primary"
            InputProps={{
              className: classes.input,
            }}
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            fullWidth
          />
          <FormControl
            variant="standard"
            sx={{ m: 1, minWidth: 120 }}
            className={classes.input}
          >
            <InputLabel id="demo-simple-select-standard-label">
              Genre
            </InputLabel>
            {genre && (
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                label="Genre"
              >
                <MenuItem value="shooter">Shooter</MenuItem>
                <MenuItem value="adventure">Adventure</MenuItem>
                <MenuItem value="racing">Racing</MenuItem>
                <MenuItem value="sports">Sports</MenuItem>
                <MenuItem value="simulation">Simulation</MenuItem>
              </Select>
            )}
          </FormControl>
          <Button
            disabled={!(title && genre && !loading)}
            className={classes.btn}
            variant="contained"
            color="primary"
            onClick={editGame}
          >
            Submit
          </Button>
          {/* <Typography className={style.errorMsg}>Error Message!</Typography> */}
        </form>
      </div>
    </div>
  );
};

export default EditGame;
