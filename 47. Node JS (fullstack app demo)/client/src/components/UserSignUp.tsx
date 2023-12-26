
import { Link } from "react-router-dom";
import styles from "../pages/usersignup.module.css";

const UserSignUp = () => {
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
        <input className={styles.input} type="password" placeholder="password" />
      </label>
      <label>
        <input className={styles.input} type="password" placeholder="confirm password" />
      </label>
      <button className={styles.submit}>Submit</button>
      <p className={styles.signin}>
       <Link to={'/login'}> Already have an acount ? </Link>
      </p>
    </form>
  );
};

export default UserSignUp;
