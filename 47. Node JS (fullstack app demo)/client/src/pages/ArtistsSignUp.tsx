import { Link } from "react-router-dom";
import styles from "./usersignup.module.css";
import { InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React from "react";

const ArtistsSignUp = () => {
    const [genre, setGenre] = React.useState<string | undefined>("r&b");

    const handleChange = (event: SelectChangeEvent) => {
      setGenre(event.target.value as string);
    };
  return (
    <form className={styles.form}>
      <div className={styles.flex}>
        <label>
          <input className={styles.input} type="text" placeholder="full name" />
        </label>

        <label>
          <input className={styles.input} type="text" placeholder="username" />
        </label>
      </div>

      <label>
        <input className={styles.input} type="email" placeholder="email" />
      </label>

      <label>
        <input
          className={styles.input}
          type="password"
          placeholder="password"
        />
      </label>
      <label>
        <input
          className={styles.input}
          type="password"
          placeholder="confirm password"
        />
      </label>

      <div className={styles.flex}>
        <label>
          <input
            className={styles.input}
            type="text"
            placeholder="profile image"
          />
        </label>
        <label>
          <input
            className={styles.input}
            type="text"
            placeholder="background image"
          />
        </label>
      </div>
            
          <InputLabel id="demo-simple-select-label">Genre</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={genre}
            label="Genre"
            onChange={handleChange}
          >
            <MenuItem value={"r&b"}>R&B</MenuItem>
            <MenuItem value={"hiphop"}>Hip Hop</MenuItem>
            <MenuItem value={"pop"}>Pop</MenuItem>
            <MenuItem value={"rock"}>Rock</MenuItem>
            <MenuItem value={"metal"}>Metal</MenuItem>
            <MenuItem value={"indie"}>Indie</MenuItem>
            <MenuItem value={"techno"}>Techno</MenuItem>
            <MenuItem value={"country"}>Country</MenuItem>
          </Select>

      <button className={styles.submit} style={{ backgroundColor: "seagreen" }}>
        Submit
      </button>
      <p className={styles.signin}>
        <Link to={"/login"}> Already have an acount ? </Link>
      </p>
    </form>
  );
};

export default ArtistsSignUp;
