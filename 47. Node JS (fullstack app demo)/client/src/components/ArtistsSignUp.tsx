import { Link } from "react-router-dom";
import styles from "../pages/usersignup.module.css";
import { InputLabel, MenuItem, Select } from "@mui/material";
import { useFormik } from "formik";
import { toFormikValidationSchema } from 'zod-formik-adapter';
import ArtistsSignUpSchema from "../validation/artistSignUpValidation";
import { registerArtist } from "../services/api/artists";
import Swal from "sweetalert2";

const ArtistsSignUp = () => {
  const formik = useFormik({
    initialValues: {
      stageName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      profileImage: "",
      backgroundImage: "",
      birthDate: "",
      genre: "r&b",
    },
    validationSchema: toFormikValidationSchema(ArtistsSignUpSchema),
    onSubmit: (values, actions) => {
      console.log("values", values);
      const newArtist: Artist = {
        stageName: values.stageName,
        username: values.username,
        email: values.email,
        password: values.password,
        profileImage: values.profileImage,
        backgroundImage: values.backgroundImage,
        birthDate: values.birthDate,
        genre: values.genre,
        isVerified: false
      };

      registerArtist(newArtist).then((res)=>{
        console.log('response: ', res);
        if (res) {
          Swal.fire({
            position: "bottom-end",
            icon: res.message == 'signed up successfully!' ? 'success' : 'warning',
            title: res.message,
            showConfirmButton: false,
            timer: 1500
          });
          if (res.message == 'signed up successfully!') {
              actions.resetForm();
          }
        }
       
      });
     
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <div className={styles.flex}>
        <label>
          <input
            name="stageName"
            value={formik.values.stageName}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            className={styles.input}
            type="text"
            placeholder="stage name"
          />
          {formik.errors.stageName && formik.touched.stageName && <span style={{color: 'red'}}>{formik.errors.stageName}</span>}
        </label>

        <label>
          <input
            name="username"
            value={formik.values.username}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            className={styles.input}
            type="text"
            placeholder="username"
          />
          {formik.errors.username && formik.touched.username && <span style={{color: 'red'}}>{formik.errors.username}</span>}
        </label>
      </div>

      <label>
        <input
          name="email"
          value={formik.values.email}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          className={styles.input}
          type="email"
          placeholder="email"
        />
          {formik.errors.email && formik.touched.email && <span style={{color: 'red'}}>{formik.errors.email}</span>}
      </label>

      <label>
        <input
          name="password"
          value={formik.values.password}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          className={styles.input}
          type="password"
          placeholder="password"
        />
        {formik.errors.password && formik.touched.password && <span style={{color: 'red'}}>{formik.errors.password}</span>}
      </label>
      <label>
        <input
          name="confirmPassword"
          value={formik.values.confirmPassword}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          className={styles.input}
          type="password"
          placeholder="confirm password"
        />
        {formik.errors.confirmPassword && formik.touched.confirmPassword && <span style={{color: 'red'}}>{formik.errors.confirmPassword}</span>}
      </label>

      <div className={styles.flex}>
        <label>
          <input
            name="profileImage"
            value={formik.values.profileImage}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            className={styles.input}
            type="text"
            placeholder="profile image"
          />
        {formik.errors.profileImage && formik.touched.profileImage && <span style={{color: 'red'}}>{formik.errors.profileImage}</span>}
        </label>
        <label>
          <input
            name="backgroundImage"
            value={formik.values.backgroundImage}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            className={styles.input}
            type="text"
            placeholder="background image"
          />
        {formik.errors.backgroundImage && formik.touched.backgroundImage && <span style={{color: 'red'}}>{formik.errors.backgroundImage}</span>}
        </label>
      </div>
      <label>
        <input
          name="birthDate"
          value={formik.values.birthDate}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          className={styles.input}
          type="date"
        />
        {formik.errors.birthDate && formik.touched.birthDate && <span style={{color: 'red'}}>{formik.errors.birthDate}</span>}

      </label>
      <InputLabel id="demo-simple-select-label">Genre</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Genre"
        name="genre"
        value={formik.values.genre}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
      >
        <MenuItem value={"r&b"}>R&B</MenuItem>
        <MenuItem value={"hip-hop"}>Hip Hop</MenuItem>
        <MenuItem value={"pop"}>Pop</MenuItem>
        <MenuItem value={"rock"}>Rock</MenuItem>
        <MenuItem value={"metal"}>Metal</MenuItem>
        <MenuItem value={"indie"}>Indie</MenuItem>
        <MenuItem value={"techno"}>Techno</MenuItem>
        <MenuItem value={"country"}>Country</MenuItem>
      </Select>
      {formik.errors.genre && formik.touched.genre && <span style={{color: 'red'}}>{formik.errors.genre}</span>}

      <button type="submit" className={styles.submit} style={{ backgroundColor: "seagreen" }}>
        Submit
      </button>
      <p className={styles.signin}>
        <Link to={"/login"}> Already have an acount ? </Link>
      </p>
    </form>
  );
};

export default ArtistsSignUp;
