import classes from "./index.module.css"

const Navbar = () => {
  return (
    <>
      <div>Navbar</div>
      <button className={`${classes.btn} ${classes['btn-primary']}`}>navbar button</button>
    </>
  );
};

export default Navbar;
