import Head from "next/head";
import React, { useState } from "react";
import styles from "../styles/Home.module.scss";
import Header from "../components/Header/Header.js";
import LoginHeader from "../components/Header/LoginHeader.js";
import RegistrationForm from "../components/Form/ContactForm.js";
import Ticket from "../components/Form/Ticket.js";
import { unstable_useFormState as useFormState } from "reakit/Form";

export default function Home() {
  const [step, setStep] = useState(1);
  const form = useFormState({
    values: { firstName: "", lastName: "", email: "" },
    onValidate: (values) => {
      if (!values.firstName) {
        const errors = {
          firstName: "please write your name",
        };
        throw errors;
      }
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      //   fetch("/api/register", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //       "Cache-Control": "no-cache, no-store",
      //     },
      //     body: JSON.stringify(form.values),
      //   })
      //     .then((response) => {
      //       if (response.ok !== true) {
      //         setStatus("sign up failed");
      //       }

      //       return response.json();
      //     })
      //     .then((json) => {
      //       if (json.register === true) {
      //         alert("yuhu");
      //       } else {
      //         alert("MHMH");
      //       }
      //     })
      //     .catch((error) => console.log(error));
    },
  });
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
      <div className={styles.section}>
        <h2>Maybe some subtitle here!</h2>
        {step === 1 && <RegistrationForm setStep={setStep} form={form} />}
        {step === 2 && <Ticket setStep={setStep} form={form} />}
      </div>
    </div>
  );
}
