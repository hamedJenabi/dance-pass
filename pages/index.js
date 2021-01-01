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
import { unstable_useFormState as useFormState } from "reakit/Form";

export default function Home() {
  const isMobile = useMedia({ maxWidth: "768px" });
  const [step, setStep] = useState(1);
  const form = useFormState({
    values: {
      firstName: "",
      lastName: "",
      email: "",
      country: "",
      ticket: "",
      role: "",
      level: "",
      competition: "",
      comps: [],
      terms: "",
    },
    onValidate: (values) => {
      const errors = {};
      if (!values.firstName) {
        errors.firstName = "please write your name";
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      if (!values.lastName) {
        errors.lastName = "please write your name";
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      if (
        !values.email ||
        !emailRegex.test(values.email.trim().toLowerCase())
      ) {
        errors.email = "Email is not valid";
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      if (values.terms.length === 0) {
        errors.terms = "Please check this box";
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      if (Object.keys(errors).length > 0) {
        throw errors;
      }
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      // fetch("/api/register", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //     "Cache-Control": "no-cache, no-store",
      //   },
      //   body: JSON.stringify(form.values),
      // })
      //   .then((response) => {
      //     if (response.ok !== true) {
      //       setStatus("sign up failed");
      //     }

      //     return response.json();
      //   })
      //   .then((json) => {
      //     if (json.register === true) {
      //       alert("And you are in!");
      //     } else {
      //       alert("What just happened? Please try again!");
      //     }
      //   })
      //   .catch((error) => console.log(error));
    },
  });
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
      <LoginHeader />
      <Header title="Welcome" />
      <div className={styles.section}>
        <RegistrationForm form={form} data={data} />
      </div>
    </div>
  );
}
