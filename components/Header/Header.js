import React, { useState, useEffect } from "react";
import Link from "next/link";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import styles from "./Header.module.scss";

const useStyles = makeStyles(styles);

export default function Header({}) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [scrollState, setScrollState] = useState(false);
  let lastScrollTop = 0;

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.addEventListener("scroll", headerColorChange);
    return function cleanup() {
      window.removeEventListener("scroll", headerColorChange);
    };
  }, []);

  const headerColorChange = () => {
    window.pageYOffset > 0 ? setShadow(true) : setShadow(false);
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      setScrollState(true);
    } else {
      setScrollState(false);
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  };

  return (
    <div
      className={classNames(styles.container, {
        [styles.visible]: shadow,
        [styles.unfix]: scrollState,
        [styles.fix]: !scrollState,
      })}
    >
      <div
        className={classNames(styles.linkWrapper, {
          [styles.white]: scrollState,
        })}
      >
        <p>welcome to this event</p>
      </div>
    </div>
  );
}
