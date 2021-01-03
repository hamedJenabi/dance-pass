import React, { useState } from "react";
import useMedia from "use-media";
import styles from "./SideBar.module.scss";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { makeStyles, useTheme } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
  },
}));
export default function SideBar({ navLinks }) {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isDesktop = useMedia({ minWidth: "968px" });
  return (
    <div className={styles.container}>
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
}
