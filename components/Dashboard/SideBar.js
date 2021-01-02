import Head from "next/head";
import useMedia from "use-media";
import React, { useState } from "react";
import styles from "./SideBar.module.scss";
import Header from "../../components/Header/Header.js";
import LoginHeader from "../../components/Header/LoginHeader.js";
import classNames from "classnames";

export default function SideBar() {
  const isDesktop = useMedia({ minWidth: "968px" });
  return (
    <div className={styles.container}>
      <h1 className={styles.items}>Dance-Pass</h1>
      <h1 className={styles.items}>Dashboard</h1>
      <h1 className={styles.items}>Dashboard</h1>
      <h1 className={styles.items}>Dashboard</h1>
      <h1 className={styles.items}>Dashboard</h1>
      <div className={styles.buttonWrapper}>
        <button className={styles.button}>Log out</button>
      </div>
    </div>
  );
}
