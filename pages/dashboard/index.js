import Head from "next/head";
import useMedia from "use-media";
import React, { useState } from "react";
import styles from "./dashboard.module.scss";
import SideBar from "../../components/Dashboard/SideBar.js";
import Drawer from "../../components/Dashboard/Drawer.js";
import Header from "../../components/Header/Header.js";
import LoginHeader from "../../components/Header/LoginHeader.js";
import classNames from "classnames";

export default function Dashboard() {
  const isDesktop = useMedia({ minWidth: "1080px" });

  const data = {
    tickets: ["Fullpass", "Partypass", "Beginner Pass"],
    levels: ["Intermediate", "Intermediate/Advanced", "Advanced", "Advanced+"],
    competitions: [
      "MnM",
      "Strictly",
      "SoloSoloSoloSoloSoloSolo",
      "Solo",
      "Solo2",
      "Solo4",
      "Solo6",
      "Solo8",
    ],
    roles: ["Leader", "Follower"],
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>dance-pass</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* <LoginHeader /> */}
      {!isDesktop && <Drawer />}
      <div className={styles.section}>
        {isDesktop && <SideBar />}

        <div className={styles.dashboard}>
          <h1>Dashboard</h1>
          <h1>Dashboard</h1>
          <h1>Dashboard</h1>
          <h1>Dashboard</h1>
          <h1>Dashboard</h1>
          <h1>Dashboard</h1>
        </div>
      </div>
    </div>
  );
}
