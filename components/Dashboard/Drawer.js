import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Squash as Hamburger } from "hamburger-react";
import styles from "./SideBar.module.scss";
import classNames from "classnames";

const useStyles = makeStyles({
  list: {
    width: 280,
  },
  root: {
    width: "100%",
  },
});

export default function Drawer({ navLinks }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className={classNames(styles.container, classes.list)}
    >
      <button className={styles.eventButton}>Create an event</button>
      <List className={classes.root}>
        {navLinks.map((text) => (
          <ListItem className={styles.items} button key={text}>
            <ListItemText className={styles.text} primary={text} />
          </ListItem>
        ))}
      </List>
      <div className={styles.buttonContainer}>
        <button className={styles.button}>Log out</button>
      </div>
    </div>
  );

  return (
    <div className={styles.hamburger}>
      <div>
        <Button onClick={toggleDrawer("left", true)}>
          <Hamburger toggled={state.left} toggle={setState} />
        </Button>
      </div>
      <SwipeableDrawer
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
        className={styles.drawer}
      >
        {list("left")}
      </SwipeableDrawer>
    </div>
  );
}
