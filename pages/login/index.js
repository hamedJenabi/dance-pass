import React, { useState, useEffect } from "react";

import {
  unstable_useFormState as useFormState,
  unstable_Form as Form,
  unstable_FormLabel as FormLabel,
  unstable_FormInput as FormInput,
  unstable_FormMessage as FormMessage,
  unstable_FormSubmitButton as FormSubmitButton,
} from "reakit/Form";
import countries from "../../utils/countries";
const flatProps = {
  options: countries.map((option) => option.title),
};
import Head from "next/head";
import dynamic from "next/dynamic";
import { emailRegex } from "../../utils/validate";
import Header from "../../components/Header/Header.js";
import styles from "./login.module.scss";

const Login = () => {
  const [status, setStatus] = useState("");
  const form = useFormState({
    values: {
      email: "",
      password: "",
    },
    onValidate: (values) => {
      const errors = {};
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
      // fetch("/api/login", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //     "Cache-Control": "no-cache, no-store",
      //   },
      //   body: JSON.stringify(form.values),
      // })
      //   .then((response) => {
      //     if (response.ok !== true) {
      //       setStatus("sign in failed");
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
      <Header title="login" />
      <div className={styles.section}>
        <Form className={styles.form} {...form}>
          <h1>Sign in to your account</h1>
          <div className={styles.label}>
            <FormInput
              className={styles.input}
              {...form}
              name="email"
              placeholder="your email"
            />
            <FormMessage {...form} name="email" />
          </div>
          <div className={styles.label}>
            <FormInput
              className={styles.input}
              {...form}
              name="password"
              type="password"
              placeholder="your password"
            />
            {status === "failed" && (
              <p style={{ margin: 0 }}>Check your username or password!</p>
            )}
          </div>
          <FormSubmitButton className={styles.button} {...form}>
            login
          </FormSubmitButton>
        </Form>
      </div>
    </div>
  );
};

export default Login;
