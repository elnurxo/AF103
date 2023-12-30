import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import styles from "./index.module.css";
import logo from "../../public/logo.png";
import { Link } from "react-router-dom";
import { useAuthContext } from "../services/context/AuthContext";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [auth, setAuth] = useAuthContext();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar className={styles.app} position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <a
                style={{ display: "block", width: "140px", height: "42px" }}
                href="http://spotify.com/"
                target="_blank"
              >
                <img
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  src={logo}
                  alt=""
                />
              </a>
            </Typography>
            <Button
              variant="outlined"
              color="success"
              style={{ marginRight: "7px" }}
            >
              <Link style={{ color: "white", textDecoration: "none" }} to={"/"}>
                Home
              </Link>
            </Button>
            {auth ? (
              <>
                <Button
                  variant="outlined"
                  color="success"
                  style={{ marginRight: "7px" }}
                >
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to="/artists"
                  >
                    Artists
                  </Link>
                </Button>
                <Button
                  variant="outlined"
                  color="success"
                  style={{ marginRight: "7px" }}
                >
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to="/profile"
                  >
                    {auth.username}
                  </Link>
                </Button>
                <Button
                  onClick={() => {
                    Swal.fire({
                      title: "Are you sure to log out?",
                      icon: "warning",
                      showCancelButton: true,
                      confirmButtonColor: "#3085d6",
                      cancelButtonColor: "#d33",
                      confirmButtonText: "Yes, delete it!",
                    }).then((result) => {
                      if (result.isConfirmed) {
                        setAuth(undefined);
                        Cookies.remove("token");
                        Swal.fire({
                          title: "Logged Out!",
                          icon: "success",
                        });
                      }
                    });
                  }}
                  variant="outlined"
                  color="success"
                >
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to="/"
                  >
                    Logout
                  </Link>
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="outlined"
                  color="success"
                  style={{ marginRight: "7px" }}
                >
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to="/login"
                  >
                    Login
                  </Link>
                </Button>
                <Button variant="outlined" color="success">
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to="/register"
                  >
                    Register
                  </Link>
                </Button>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
