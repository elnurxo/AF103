import { Link } from "react-router-dom";
import styles from "../pages/usersignup.module.css";
import { useFormik } from "formik";
import { getAllArtists, loginArtist } from "../services/api/artists";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../services/context/AuthContext";
import Cookies from 'js-cookie';

const ArtistsSignIn = () => {
  const navigate = useNavigate();
  const[auth, setAuth] = useAuthContext();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values, actions) => {
      const artist: {
        email: string,
        password: string
      } = {
        email: values.email,
        password: values.password,
      };

      loginArtist(artist).then(async(res)=>{
        console.log('FRONT LOGIN ARTIST: ',res);
        if (res?.status == 401) {
            Swal.fire({
                position: "bottom-end",
                icon: "warning",
                title: res.message,
                showConfirmButton: false,
                timer: 1500
              });
        }
        else{
          if (res && res.status==200 && res.token) {
              await Cookies.set('token', res.token, { expires: 7,secure: true });

              const artists = await getAllArtists();
              const currentLoggedInArtist = artists.find((x)=>x.email==artist.email);
              setAuth(currentLoggedInArtist);

              navigate('/')

            Swal.fire({
                position: "bottom-end",
                icon: "success",
                title: `welcome back ${currentLoggedInArtist?.username}`,
                showConfirmButton: false,
                timer: 1500
              });
           }
        }
      });
      actions.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
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
    
      <button style={{backgroundColor: formik.isSubmitting ? "red" : "seagreen"}} disabled={(Object.keys(formik.errors).length>0 || formik.isSubmitting) ? true :false} type="submit" className={styles.submit}>
        Sign In
      </button>
      <p className={styles.signin}>
        <Link to={"/register"}> Don't have an account ? </Link>
      </p>
    </form>
  );
};

export default ArtistsSignIn;
