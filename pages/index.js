import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Header from "../components/Header/Header.js";
import LoginHeader from "../components/Header/LoginHeader.js";
import RegistrationForm from "../components/Form/ContactForm.js";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
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
      <LoginHeader />
      <Header />
      <RegistrationForm />
    </div>
  );
}
