import Head from "next/head";
import useMedia from "use-media";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { emailRegex } from "../utils/validate";
import styles from "../styles/Home.module.scss";
import Header from "../components/Header/Header.js";
import LoginHeader from "../components/Header/LoginHeader.js";
const RegistrationForm = dynamic(
  () => import("../components/Form/RegistrationForm.js"),
  { ssr: false }
);
// import RegistrationForm from "../components/Form/RegistrationForm.js";
import Ticket from "../components/Form/Ticket.js";
import { unstable_useFormState as useFormState } from "reakit/Form";
import { ErrorOutlineSharp } from "@material-ui/icons";

export default function Home() {
  const isMobile = useMedia({ maxWidth: "768px" });
  const [step, setStep] = useState(1);
  const form = useFormState({
    values: { firstName: "", lastName: "", email: "", ticket: "" },
    onValidate: (values) => {
      const errors = {};
      if (!values.firstName) {
        errors.firstName = "please write your name";
      }
      if (!values.lastName) {
        errors.lastName = "please write your name";
      }
      if (
        !values.email ||
        !emailRegex.test(values.email.trim().toLowerCase())
      ) {
        errors.email = "Email is not valid";
      }
      if (Object.keys(errors).length > 0) {
        throw errors;
      }
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache, no-store",
        },
        body: JSON.stringify(form.values),
      })
        .then((response) => {
          if (response.ok !== true) {
            setStatus("sign up failed");
          }

          return response.json();
        })
        .then((json) => {
          if (json.register === true) {
            alert("And you are in!");
          } else {
            alert("What just happened? Please try again!");
          }
        })
        .catch((error) => console.log(error));
    },
  });
  console.log("form", form);

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
      <LoginHeader />
      <Header />
      <div className={styles.section}>
        <h2>Maybe some subtitle here!</h2>
        <RegistrationForm form={form} />
      </div>
    </div>
  );
}
