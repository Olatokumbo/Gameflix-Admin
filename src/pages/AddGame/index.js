import React, { useState } from "react";
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
import style from "./AddGame.module.css";

const useStyles = makeStyles({
  root: {
    background: "black",
  },
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
  btn2: {
    marginTop: 5,
    marginBottom: 5,
  },
});

const AddGame = () => {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("shooter");
  const [posterPhoto, setPosterPhoto] = useState(null);
  const [coverPhoto, setCoverPhoto] = useState(null);

  const handlePosterUpload = (e) => {
    const files = Array.from(e.target.files);
    setPosterPhoto(files[0]);
  };

  const handleCoverUpload = (e) => {
    const files = Array.from(e.target.files);
    setCoverPhoto(files[0]);
  };
  return (
    <div className={style.addGame}>
      <div className={style.main}>
        <Typography className={style.header}>Add Game</Typography>
        <form className={style.addForm}>
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
          </FormControl>

          {/* Poster Upload */}
          <div className={style.upload}>
            <label htmlFor="photos">
              <div className={style.uploadPoster}>
                <Typography className={style.uploadText}>
                  Upload Poster
                </Typography>
              </div>
            </label>
            <input
              type="file"
              id="photos"
              multiple
              //   hidden
              accept=".jpeg, .jpg, .png"
              onChange={handlePosterUpload}
              required
            />
          </div>

          {/* Cover Upload */}
          <div className={style.upload}>
            <label htmlFor="photos1">
              <div className={style.uploadCover}>
                <Typography className={style.uploadText}>
                  Upload Cover
                </Typography>
              </div>
            </label>
            <input
              type="file"
              id="photos1"
              multiple
              //   hidden
              accept=".jpeg, .jpg, .png"
              onChange={handleCoverUpload}
              required
            />
          </div>
          <Button
            //   disabled={!(username && password)}
            className={classes.btn}
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
          <Typography className={style.errorMsg}>Error Message!</Typography>
        </form>
      </div>
    </div>
  );
};

export default AddGame;
