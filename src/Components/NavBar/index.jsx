import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { IconButton, Badge, Paper } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));
const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const location = useLocation();

  const trackScreenWidth = () => {
    const width = window.innerWidth;
    setScreenWidth(width);
    if (width > 600) {
      setOpen(true);
    }
  };
  const handleClose = () => {
    if (screenWidth < 600) {
      setOpen(false);
    }
  };

  useEffect(() => {
    trackScreenWidth();
    window.addEventListener("resize", trackScreenWidth);
    return () => window.removeEventListener("resize", trackScreenWidth);
  }, []);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClosedropdown = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();
  const [openmodal, setOpenmodal] = React.useState(false);

  const Openmodal = () => {
    setOpenmodal(true);
  };

  const Closemodal = () => {
    setOpenmodal(false);
  };
  return (
    <nav className="navbar">
      <div className="nav-wrapper">
        <div className="logo">
          <Link to="/">
            <img src="/logo.png" onClick={handleClose} />
          </Link>
        </div>

        <div className="list-wrapper">
          <img
            src="https://img.icons8.com/material-sharp/24/26e07f/squared-menu.png"
            alt="Menu bars"
            style={{ opacity: !open ? 1 : 0 }}
            onClick={() => {
              setOpen(!open);
            }}
          />
          <img
            src="https://img.icons8.com/ios-filled/50/26e07f/multiply.png"
            alt="Menu cross"
            style={{ opacity: open ? 1 : 0 }}
            onClick={() => {
              setOpen(!open);
            }}
          />
          <center>
            <ul style={{ left: open ? "0" : "-100vw" }}>
              <li>
                <Link
                  to="/"
                  style={{ color: location.pathname === "/" && "#056135" }}
                >
                  HOME
                </Link>
              </li>

              <li>
                <Link
                  style={{
                    color: location.pathname === "/galery" && "#056135"
                  }}
                >
                  GALLERY
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  style={{
                    color: location.pathname === "/news" && "#056135"
                  }}
                >
                  NEWS
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  style={{
                    color: location.pathname === "/contact" && "#056135"
                  }}
                >
                  CONTACT US
                </Link>
              </li>
              <li>
                <a href="https://liyontatea.lk/">SHOP</a>
              </li>
            </ul>
          </center>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
