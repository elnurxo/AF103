import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../services/context/UserContext";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          User Side
        </Typography>
        <Button color="inherit">
          <Link style={{ color: "white" }} to={"/"}>
            Home
          </Link>
        </Button>
        <Button color="inherit">
          <Link style={{ color: "white" }} to={"/categories"}>
            Categories
          </Link>
        </Button>
        {user && (
          <Button color="inherit">
            <Link style={{ color: "white" }} to={"/basket"}>
              Basket
            </Link>
          </Button>
        )}
        {user === null ? (
          <>
            <Button color="inherit">
              <Link style={{ color: "white" }} to={"/login"}>
                Login
              </Link>
            </Button>
            <Button color="inherit">
              <Link style={{ color: "white" }} to={"/register"}>
                Register
              </Link>
            </Button>
          </>
        ) : (
          <>
            <Button color="inherit">
              <Link style={{ color: "white" }} to={"/login"}>
                {user.username}
              </Link>
            </Button>
            <Button
              onClick={() => {
                Swal.fire({
                  title: "Are you sure to logout?",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, log out!",
                }).then((result) => {
                  setUser(null);
                  if (result.isConfirmed) {
                    Swal.fire({
                      title: "Logged Out!",
                      icon: "success",
                    });
                  }
                });
              }}
              color="inherit"
            >
              Logout
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
