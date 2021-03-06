import React, { useState, useEffect } from "react";
import Link from "next/link";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components
import styles from "./LoginHeader.module.scss";

const useStyles = makeStyles(styles);

export default function LoginHeader({ status = "out" }) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [scrollState, setScrollState] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", headerColorChange);
    return function cleanup() {
      window.removeEventListener("scroll", headerColorChange);
    };
  }, []);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const headerColorChange = () => {
    window.pageYOffset > 0 ? setShadow(true) : setShadow(false);

    window.pageYOffset > 1100 ? setScrollState(true) : setScrollState(false);
  };

  return (
    <div
      className={classNames(styles.container, {
        [styles.visible]: shadow,
        [styles.white]: scrollState,
      })}
    >
      <div
        className={classNames(styles.linkWrapper, {
          [styles.white]: scrollState,
        })}
      >
        {status === "out" && (
          <p>
            already registered?{"  "}
            <Link href="/login" as="/login">
              <a className={styles.link}>login here</a>
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}
